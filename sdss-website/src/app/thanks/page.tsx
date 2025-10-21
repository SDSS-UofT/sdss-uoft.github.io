// src/app/thanks/page.tsx
export default function Thanks() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 px-4">
      <div className="mx-auto max-w-md bg-white p-6 rounded-2xl shadow text-center">
        <h1 className="text-2xl font-semibold text-[#4e4d76]">
          You’re signed up! 🎉
        </h1>

        <p className="mt-3 text-[#4e4d76]/80">
          We’ve emailed you a confirmation. We’ll also send a reminder the day
          before the event.
        </p>

        <a
          href="/events"
          className="inline-flex mt-6 rounded-2xl px-5 py-3 bg-[#ddabeb] text-white hover:bg-[#c78ddc] active:bg-[#b879ce] transition-colors"
        >
          Back to Events
        </a>
      </div>
    </main>
  );
}
