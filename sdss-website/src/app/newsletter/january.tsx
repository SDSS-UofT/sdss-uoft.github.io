import Image from "next/image";

export default function JanuaryNewsletter() {
    return (
      <article className="space-y-6 px-4 pb-6">
        <p className="text-foreground leading-relaxed">
          Hi SDSS Community, Happy New Year! As we kick off the Winter semester, we
          wanted to share a quick recap of an exciting Fall semester filled with
          learning, mentorship, and community building. Thank you to everyone who
          attended our events and helped make SDSS such a welcoming space.
        </p>
  
        {/* Fall Semester Recap */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Fall Semester Recap
          </h3>
          <p className="text-foreground leading-relaxed">
            This fall, SDSS hosted a range of academic, professional, and
            community-focused events aimed at supporting students in Statistics and
            Data Science. We launched the Synergy Mentorship Program, connecting
            upper-year students with 1st- and 2nd-year mentees, and ran several
            technical workshops, including Introduction to Python in Data Science
            and a SQL Workshop on Real-World Data Applications. These sessions gave
            students hands-on experience with industry-relevant tools while
            offering guidance on research opportunities and technical interview
            preparation.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-border bg-muted">
              <img src="/newsletter_images/january/sql_workshop.jpeg" alt="Fall semester workshop event" className="h-full w-full object-cover" />
            </div>
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-border bg-muted">
              <img src="/newsletter_images/january/synergy_mentors.jpeg" alt="Synergy Mentorship Program session" className="h-full w-full object-cover" />
              {/* <div className="flex flex-col items-center gap-2 p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <span className="text-xs text-muted-foreground">Synergy Mentorship Program session</span>
              </div> */}
            </div>
          </div>
        </div>
  
        {/* Careers & Networking */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Careers & Networking
          </h3>
          <p className="text-foreground leading-relaxed">
            We also welcomed alumni and industry professionals through our Careers
            in Data panel, SDSS Alumni Night, and SDSS x Stripe Information Session
            & Networking Night. Students had the opportunity to hear firsthand about
            career paths in data, ask questions, and build meaningful connections
            with professionals from Wealthsimple, Stripe, Deloitte, and BMO.
            Overall, Fall 2025 was a semester of learning, mentorship, and
            community building, and we{"'"}re grateful to everyone who helped make it
            such a success.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-border bg-muted">
              <img src="/newsletter_images/january/alumni_night.jpeg" alt="Careers in Data panel discussion" className="h-full w-full object-cover" />
              {/* <div className="flex flex-col items-center gap-2 p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <span className="text-xs text-muted-foreground">Careers in Data panel discussion</span>
              </div> */}
            </div>
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-border bg-muted">
              <img src="/newsletter_images/january/stripe_event.jpeg" alt="SDSS x Stripe networking night" className="h-full w-full object-cover" />
              {/* <div className="flex flex-col items-center gap-2 p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <span className="text-xs text-muted-foreground">SDSS x Stripe networking night</span>
              </div> */}
            </div>
          </div>
        </div>
  
        {/* Thank You */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">Thank You</h3>
          <p className="text-foreground leading-relaxed">
            A big thank you to our guests from Wealthsimple, Stripe, Deloitte, and
            BMO for supporting SDSS and sharing their experiences with our
            community.
          </p>
        </div>
  
        {/* What's Next? */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            What{"'"}s Next?
          </h3>
          <p className="text-foreground leading-relaxed">
            We have exciting workshops and events planned for the Winter semester
            — announcements coming soon!
          </p>
        </div>
  
        {/* Stay Connected */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Stay Connected
          </h3>
          <p className="text-foreground leading-relaxed">
            Follow us on Instagram and LinkedIn, or join our Discord to stay up to
            date. We{"'"}re excited for what{"'"}s ahead and can{"'"}t wait to see you at our
            upcoming events!
          </p>
        </div>
  
        <div className="rounded-lg bg-muted p-4">
          <p className="text-sm text-muted-foreground italic">
            Students in Data Science & Statistics (SDSS) — University of Toronto
          </p>
        </div>
      </article>
    )
  }
  