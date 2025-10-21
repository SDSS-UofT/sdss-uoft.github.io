'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

const RECAPTCHA_SITE_KEY = '6LcWD_ArAAAAANUpVPBzuYam2n6vZ4Knvm0iZ-AQ'; // public, safe to commit
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzXcaNWXX6l6IBwiA10B6ZvJI-31QSdFRBKcQYbdkRZJ1ABzqrK7NVS_F2jNaDJ9xL3/exec';          // your /exec URL

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

      // optional origin hint used by your script
      data.append('__origin__', window.location.origin);

      // reCAPTCHA v3 token
      let token = '';
      // @ts-ignore
      if (window.grecaptcha && RECAPTCHA_SITE_KEY) {
        // @ts-ignore
        token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'signup' });
      }
      data.append('recaptchaToken', token);

      await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: data });
      router.push('/thanks');
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-44 px-4">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
      <div className="mx-auto max-w-md bg-white/90 p-6 rounded-2xl shadow-lg">
        <div className="w-full flex justify-center mb-3">
          <img src="/sdss-icon-top.png" alt="SDSS" width={64} height={64} className="h-16 w-16" />
        </div>

        <h1 className="text-2xl font-semibold text-[#4e4d76] text-center">
          Register for Careers in Data
        </h1>

        <form ref={formRef} className="space-y-4 mt-6" onSubmit={handleSubmit} noValidate>
          {/* single-event: tell server which event key to use */}
          <input type="hidden" name="event" value="Careers in Data!" />

          <label className="block">
            <span className="text-sm text-[#4e4d76]">Name (optional)</span>
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

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full justify-center rounded-2xl px-4 py-2 text-sm font-medium
                       bg-[#ddabeb] text-white hover:bg-[#9f70ac] active:bg-[#9f70ac] transition-colors
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? 'Submitting…' : 'Register'}
          </button>

          <p className="text-xs text-gray-500 text-center">
            You’ll receive a confirmation email with event details.
          </p>
        </form>
      </div>
    </main>
  );
}
