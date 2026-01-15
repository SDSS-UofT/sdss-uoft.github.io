import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function isValidUofTEmail(email: string) {
  const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isUofT = email.endsWith("@mail.utoronto.ca") || email.endsWith("@utoronto.ca");
  return looksLikeEmail && isUofT;
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const body = await req.json();

    const fullName = String(body.fullName || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const studentNumber = String(body.studentNumber || "").trim();
    const year = String(body.year || "").trim();
    const program = String(body.program || "").trim();
    const newsletter = String(body.newsletter || "").trim();


    const eventsInterested = String(body.eventsInterested || "").trim();
    const eventsSpecify = body.eventsSpecify ? String(body.eventsSpecify).trim() : null;
    const comments = body.comments ? String(body.comments).trim() : null;

    // basic validation
    if (!fullName) {
      return new Response(JSON.stringify({ ok: false, error: "Name is required." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!isValidUofTEmail(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Please use a valid UofT email address." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!studentNumber) {
      return new Response(JSON.stringify({ ok: false, error: "Student number is required." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!year || !program || !newsletter) {
      return new Response(JSON.stringify({ ok: false, error: "Please complete all required fields." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!eventsInterested) {
      return new Response(JSON.stringify({ ok: false, error: "Please select at least one event type." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) {
      return new Response(JSON.stringify({ ok: false, error: "Server misconfigured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { error } = await supabase.from("member_registrations").insert([{
      full_name: fullName,
      email,
      student_number: studentNumber,
      year,
      program,
      newsletter,
      events_interested: eventsInterested,
      events_specify: eventsSpecify,
      comments,
    }]);

    if (error) {
      const msg = error.message.toLowerCase();
      if (msg.includes("duplicate") || msg.includes("unique")) {
        return new Response(JSON.stringify({ ok: true, created: false }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ ok: false, error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true, created: true }), {
      status: 201,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
