import React from "react";
import Card from "@/app/components/event-card/event";

type EventData = React.ComponentProps<typeof Card>;

const upcoming: EventData[] = [
  {
    title: "Medical Imaging with CNN Workshop",
    date: "March 4th, 2026 • 2:30–4:30 PM",
    location: "SK 548, 246 Bloor St",
    description: "Join us for a beginner-friendly workshop on medical image classification, where you’ll explore image data, build a CNN model, and learn how to interpret key performance metrics led by Professor Tyrrell.",
    signup: { url: "/events/med-image/signup", label: "Register", newTab: true },
  },
];

const past: EventData[] = [
  {
    title: "SQL Workshop: Real-World Data Applications!",
    date: "Nov 18, 2025 • 6–9 PM",
    location: "SS 2110, UTSG",
    description: "Learn the SQL essentials that power real-world data solutions, from core commands and query logic to optimization and interview-ready problem solving!",
  },
  {
    title: "Introduction to Python in Data Science",
    date: "Oct 6, 2025",
    location: "SS 1074, UTSG",
    description:
      "Build a data science project from start to finish using common libraries and skills in the industry!",
  },
  {
    title: "Careers in Data!",
    date: "Oct 23, 2025",
    location: "SS2108, UTSG",
    description: "Join us for an evening of insights, networking, and career advice from UofT alumni working in the field.",
  },
  {
    title: "SDSS x Stripe",
    date: "Nov 20, 2025 • 5:30–7 PM",
    location: "700 University Avenue, 10th floor. UTSG",
    description: "Join us for SDSS x Stripe to learn how engineering and data work at Stripe and connect directly with Stripe professionals. A great chance to gain insights, ask questions, and build your network in fintech!",
  },
  {
    title: "SDSS Alumni Night",
    date: "Nov 21, 2025 • 6–9 PM",
    location: "UTSU Room B100, UTSG",
    description: "Join us for an evening of connection, mentorship, and inspiring stories from our alumni in Statistics and Data Science community.",
  },
];

export default function EventsPage() {
  return (
    // Keep some top padding so the fixed nav doesn't crowd; adjust if needed
    <main className="min-h-screen bg-gray-50 pt-28 md:pt-24 px-8 md:px-10 lg:px-8 pb-[99px]">
      {/* Force h1/h2 left just in case some parent centers text */}
      <div className="mx-auto max-w-5xl [&_h1]:!text-left [&_h2]:!text-left">
        {/* Extra space from the navbar to the title */}
        <header className="mt-8 mb-6">
          <h1 className="gradient-text text-4xl font-bold">Events</h1>
        </header>

        <section id="upcoming" className="mt-2">
          <h2 className="gradient-text text-2xl font-semibold tracking-tight scroll-mt-12">
            Upcoming Events
          </h2>

          {upcoming.length === 0 ? (
            <p className="text-gray-600 mt-1">
              No upcoming events right now — check back soon!
            </p>
          ) : (
            // Bottom margin under the event cards
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 mt-1 mb-12">
              {upcoming.map((ev) => (
                <Card key={ev.title} {...ev} />
              ))}
            </div>
          )}
        </section>

        <section id="past" className="mt-6">
          <h2 className="gradient-text text-2xl font-semibold tracking-tight scroll-mt-12">
            Past Events
          </h2>

          {past.length === 0 ? (
            <p className="text-gray-600 mt-1">No past events yet.</p>
          ) : (
            // Bottom margin under the event cards
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 mt-1 mb-12">
              {past.map((ev) => (
                <Card key={ev.title} {...ev} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
