export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { Pool } from "pg";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: process.env.NODE_ENV === "production"
//     ? { rejectUnauthorized: false }
//     : false,
// });
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});


function isValidUofTEmail(email: string) {
  return (
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    (email.endsWith("@mail.utoronto.ca") || email.endsWith("@utoronto.ca"))
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = String(body.email || "").trim().toLowerCase();
    const fullName = String(body.fullName || "").trim();
    const source = String(body.source || "").trim() || null;

    if (!isValidUofTEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please use a valid UofT email address" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `
      INSERT INTO newsletter_signups (email, name)
      VALUES ($1, $2)
      ON CONFLICT DO NOTHING
      RETURNING id;
      `,
      [email, fullName || null]
    );

    if (result.rowCount === 1) {
      return NextResponse.json(
        { ok: true, created: true },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { ok: true, created: false },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("NEWSLETTER API ERROR:", err?.message || err, err?.stack);
    return NextResponse.json(
      { ok: false, error: err?.message || "Server error" },
      { status: 500 }
    );
  }
  
}
