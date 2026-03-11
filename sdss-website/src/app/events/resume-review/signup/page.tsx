'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

const RECAPTCHA_SITE_KEY = '6LcWD_ArAAAAANUpVPBzuYam2n6vZ4Knvm0iZ-AQ';
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbysmDNDoAaqfI5_uTLzbjm5u5KR4shj1YnB42j_gwG78alguWmP4LB2ZhY2TmuaYTeqgQ/exec';

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
      data.append('__origin__', window.location.origin);

      // @ts-ignore
      const token = window.grecaptcha
        // @ts-ignore
        ? await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'signup' })
        : '';
      data.append('recaptchaToken', token);

      const params = new URLSearchParams();
      data.forEach((value, key) => params.append(key, value as string));

      await fetch(`${SCRIPT_URL}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
      });

      router.push('/thanks');
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white px-4 pt-6 md:pt-8">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
      <div className="mx-auto max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <div className="w-full flex justify-center mb-3">
          <img src="/sdss-icon-top.png" alt="SDSS" width={64} height={64} className="h-16 w-16" />
        </div>

        <h1 className="text-2xl font-semibold text-[#4e4d76] text-center">
          Register for Resume Review &amp; Interview Tips
        </h1>
        <p className="text-center text-sm text-gray-500 mt-1">March 13th, 2026 • 5–7 PM • WB130</p>

        <form ref={formRef} className="space-y-4 mt-6" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="event" value="Resume Review & Interview Tips" />

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
              <option value="" disabled>Select year</option>
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

          <label className="block">
            <span className="text-sm text-[#4e4d76]">Program</span>
            <input
              name="program"
              type="text"
              required
              disabled={submitting}
              placeholder="e.g., Statistics, Computer Science"
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-[#373754]
                         focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </label>

          <label className="block">
            <span className="text-sm text-[#4e4d76]">Summer Internship Status</span>
            <select
              name="internshipStatus"
              required
              disabled={submitting}
              defaultValue=""
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-[#373754]
                         focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            >
              <option value="" disabled>Select an option</option>
              <option value="Looking for a summer internship">Looking for a summer internship</option>
              <option value="Already have a summer internship">Already have a summer internship</option>
              <option value="None of the above">None of the above</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm text-[#4e4d76]">Dietary Restrictions</span>
            <input
              name="dietaryRestrictions"
              type="text"
              disabled={submitting}
              placeholder="e.g., Vegetarian, Gluten-free, None"
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-[#373754]
                         focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
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