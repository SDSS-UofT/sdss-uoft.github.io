'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

const RECAPTCHA_SITE_KEY = '6LcWD_ArAAAAANUpVPBzuYam2n6vZ4Knvm0iZ-AQ'; // public, safe to commit
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzWyA5pONy5drSdruU59tQC35poEjaTp4mZLlsCMUnMG-fx0gPO7DfvaJMEVjc_UYMWiQ/exec'; 

export default function Signup() {
  const router = useRouter();
  const [submitting, setSubmitting] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const form = formRef.current!;
      const data = new FormData(form);

      // strict origin hint for backend CORS allow-list
      data.append('__origin__', window.location.origin);

      // reCAPTCHA v3
      // @ts-ignore
      const token = window.grecaptcha
        // @ts-ignore
        ? await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'signup' })
        : '';
      data.append('recaptchaToken', token);

      // Fire-and-forget to Apps Script (redirect happens client-side)
      await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: data });

      router.push('/thanks'); // your public thanks page
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 pt-16 md:pt-28">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
      <div className="mx-auto max-w-md bg-white/90 p-6 rounded-2xl shadow-lg">
        <div className="w-full flex justify-center mb-3">
          <img src="/sdss-icon-top.png" alt="SDSS" width={64} height={64} className="h-16 w-16" />
        </div>

        <h1 className="text-2xl font-semibold text-[#4e4d76] text-center">
          Register for SQL Workshop: Real-World Data Applications
        </h1>

        <form ref={formRef} className="space-y-4 mt-6" onSubmit={handleSubmit} noValidate>
          {/* tell server which event key to use (must match EVENTS allow-list) */}
          <input type="hidden" name="event" value="SQL Workshop: Real-World Data Applications" />

          {/* name*/}
          <label className="block">
            <span className="text-sm text-[#4e4d76]">Name</span>
            <input
              name="name"
              type="text"
              disabled={submitting}
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-[#373754]
                         focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </label>

          {/* email (required) */}
          <label className="block">
            <span className="text-sm text-[#4e4d76]">Email</span>
            <input
              name="email"
              type="email"
              required
              disabled={submitting}
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-[#373754]
                         focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </label>

          {/* year (required) */}
          <label className="block">
            <span className="text-sm text-[#4e4d76]">Year</span>
            <select
              name="year"
              required
              disabled={submitting}
              defaultValue=""
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-[#373754]
                         focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            >
              <option value="" disabled>
                Select year
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
              <option value="Graduate">Graduate</option>
              <option value="Alumni">Alumni</option>
              <option value="Other">Other</option>
            </select>
          </label>

          {/* major*/}
          <label className="block">
            <span className="text-sm text-[#4e4d76]">Major</span>
            <input
              name="major"
              type="text"
              disabled={submitting}
              placeholder="e.g., Computer Science, Statistics"
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-[#373754]
                         focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </label>

          {/* heardFrom (required) — backend also accepts heard_from */}
          <label className="block">
            <span className="text-sm text-[#4e4d76]">How did you hear about this event?</span>
            <select
              name="heardFrom"
              required
              disabled={submitting}
              defaultValue=""
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-[#373754]
                         focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option>Instagram</option>
              <option>Discord</option>
              <option>Friend/Classmate</option>
              <option>Professor/Department</option>
              <option>Email Newsletter</option>
              <option>Booth/Tabling</option>
              <option>Other</option>
            </select>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full justify-center rounded-2xl px-4 py-2 text-sm font-medium
                       bg-[#ddabeb] text-white hover:bg-[#9f70ac] active:bg-[#9f70ac] transition-colors
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? 'Submitting…' : 'Register'}
          </button>
        </form>
      </div>
    </main>
  );
}
