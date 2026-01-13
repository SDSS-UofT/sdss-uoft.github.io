"use client"

import type React from "react"
import { useState } from "react"

export default function Newsletter() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Validate UofT email
    if (!email.endsWith("@mail.utoronto.ca") && !email.endsWith("@utoronto.ca")) {
      setMessage("Please use a valid UofT email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(
        "https://nybucudurreongmvrbnx.functions.supabase.co/newsletter-signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, fullName }),
        }
      );

      // debugging code to determine issue with fetch response parsing
      // const raw = await res.text();
      // console.log("STATUS:", res.status);
      // console.log("RAW RESPONSE:", raw);

      // let data2: any = null;
      // try {
      //   data2 = JSON.parse(raw);
      // } catch {}

      // if (!res.ok || !data2?.ok) {
      //   throw new Error(data2?.error || raw || "Failed to subscribe");
      // }
      
    
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to subscribe");
    
      setMessage(
        data.created
          ? "Thank you for subscribing to our Newsletter!"
          : "You're already on the list — thanks for subscribing!"
      );
    
      setEmail("");
      setFullName("");
    } catch (err: any) {
      setMessage(err.message || "Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }

  }

  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center p-4 overflow-hidden pt-44 pb-44">
      {/* Purple to Pink Gradient Background */}
      {/* className="absolute inset-0 bg-gradient-to-b from-[#5B5F8D] via-[#7B6B9E] to-[#E8B4D9]" */}

      {/* Newsletter signup box */}
      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">Subscribe to Our Newsletter!</h1>
          {/* <p className="text-lg text-white/90 text-pretty">Stay updated with the latest from SDSS UofT</p> */}
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-6 space-y-2 border-b border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900">Sign Up</h2>
            <p className="text-gray-600">Get the latest updates on data science events, workshops, and opportunities</p>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-base font-medium text-gray-900">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Jane Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B5F8D] focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-base font-medium text-gray-900">
                  UofT Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane.doe@mail.utoronto.ca"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B5F8D] focus:border-transparent transition-all"
                />
                <p className="text-sm text-gray-500">Please use your UofT email</p>
              </div>

              {message && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    message.includes("Thank you") || message.includes("the list")
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-base font-semibold text-white bg-[#5B5F8D] rounded-lg hover:bg-[#4A4E7A] focus:outline-none focus:ring-2 focus:ring-[#5B5F8D] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
