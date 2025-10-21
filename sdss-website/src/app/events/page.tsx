import React from "react";
import Card from "@/app/components/event-card/event";

type EventData = React.ComponentProps<typeof Card>;

const upcoming: EventData[] = [
  {
    title: "Careers in Data!",
    date: "Oct 23, 2025 • 6–8 PM",
    location: "SS2108, UTSG",
    description: "Join us for an evening of insights, networking, and career advice from UofT alumni working in the field.",
    signup: { url: "/events/event1/signup", label: "Register", newTab: true },
  },
];

const past: EventData[] = [
  {
    title: "Introduction to Python in Data Science",
    date: "Oct 6, 2025 • 6–8:30 PM",
    location: "SS 1074, UTSG",
    description:
      "Build a data science project from start to finish using common libraries and skills in the industry!",
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
