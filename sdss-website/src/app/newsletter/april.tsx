function EventImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </div>
  )
}

function EventCard({
  title,
  description,
  images,
  highlight = false,
}: {
  title: string
  description: string
  images: string[]
  highlight?: boolean
}) {
  return (
    <div className={`rounded-lg border border-border p-4 ${highlight ? "bg-primary/5" : ""}`}>
      <p className="font-medium text-foreground">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {images.map((src, index) => (
          <EventImage
            key={src}
            src={src}
            alt={`${title} photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function AprilNewsletter() {
  return (
    <article className="space-y-6 px-4 pb-6">
      {/* Header Stats */}
      <div className="rounded-lg bg-primary/10 p-4">
        <p className="text-center text-lg font-semibold text-primary">
          SDSS Wrapped — 2025-26 Year in Review
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-6 text-sm text-foreground">
          <span>
            <strong>9</strong> events hosted
          </span>
          <span>
            <strong>300+</strong> new followers
          </span>
          <span>
            <strong>190</strong> datathon attendees
          </span>
        </div>
      </div>

      {/* Thank You Note */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          A Note From Us: Thank You
        </h3>
        <p className="text-foreground leading-relaxed">
          What a year. When we look back at everything SDSS has done; the
          workshops, the panels, the late-night datathon prep, it{"'"}s hard not
          to feel genuinely proud of this community. None of it happens without
          you. Every attendee, mentor, mentee, sponsor, and supporter who showed
          up made this year what it was. Thank you for being part of something
          we{"'"}re building together.
        </p>
        <p className="text-foreground leading-relaxed italic">
          Here{"'"}s to one more year of turning data into community.
        </p>
      </div>

      {/* First Semester */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          Fall Semester Highlights
        </h3>
        <div className="space-y-4">
          <EventCard
            title="Synergy Mentorship Program"
            description="25+ mentors · 45+ mentees matched · 70+ people connected"
            images={[
              "/events/synergy-mentorship/im1.jpeg",
              "/events/synergy-mentorship/im2.jpeg",
            ]}
          />
          <EventCard
            title="Intro to Python in Data Science"
            description="In partnership with Export Development Canada"
            images={[
              "/events/python-ds/im1.JPG",
              "/events/python-ds/im2.JPG",
            ]}
          />
          <EventCard
            title="Careers in Data"
            description="Featuring Deloitte & BMO"
            images={[
              "/events/careers-in-data/i1.jpeg",
              "/events/careers-in-data/i2.jpeg",
            ]}
          />
          <EventCard
            title="SQL Workshop"
            description="With Amanbani Nanda, Analytics Developer @ Wealthsimple"
            images={[
              "/events/sql-workshop/im1.jpeg",
              "/events/sql-workshop/im2.jpeg",
            ]}
          />
          <EventCard
            title="Alumni Night"
            description="Connecting students with UofT's finest"
            images={[
              "/events/alumni-night/im1.JPG",
              "/events/alumni-night/im2.jpeg",
            ]}
          />
          <EventCard
            title="SDSS x Stripe"
            description="A night with the fintech world"
            images={[
              "/events/stripe/im1.jpeg",
              "/events/stripe/im2.JPG",
            ]}
          />
        </div>
      </div>

      {/* Second Semester */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          Winter Semester Highlights
        </h3>
        <div className="space-y-4">
          <EventCard
            title="Medical Imaging using CNNs"
            description="With Pascal Tyrrell · Director of Data Science @ UofT Department of Medical Imaging"
            images={[
              "/events/medical-imaging/im1.jpeg",
              "/events/medical-imaging/im2.jpg",
            ]}
          />
          {/* <EventCard
            title="Resume Review & Interview Prep"
            description="Helping you land that internship"
            images={[
              "/events/medical-imaging/im1.jpeg",
              "//events/medical-imaging/im2.HEIC",
            ]}
          /> */}
          <EventCard
            title="Building & Interpreting ML Results"
            description="In partnership with TD Layer 6 AI"
            images={[
              "/events/layer6-ml/im1.jpeg",
              "/events/layer6-ml/im2.jpeg",
            ]}
          />
          <EventCard
            title="Datathon!!"
            description="Sponsored by Deloitte · 190 attendees · Our biggest event yet!"
            images={[
              "/events/datathon/im1.jpeg",
              "/events/datathon/im2.jpeg",
            ]}
            
          />
        </div>
      </div>

      {/* What's Next */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">
          What{"'"}s Next?
        </h3>
        <p className="text-foreground leading-relaxed">
          The best is still ahead. The general membership application is going to be released in September. Furthermore, exec recruiting for next year is starting
          soon — so if you{"'"}ve ever wanted to be part of the team that makes all
          of this happen, now{"'"}s your moment. Stay tuned on our socials for
          applications, timelines, and everything you need to join SDSS in 2026–27!
        </p>
      </div>

      {/* Stay Connected */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Stay Connected</h3>
        <p className="text-foreground leading-relaxed">
          Make sure to follow us on our socials to stay tuned! Find us on
          Instagram, Discord, and LinkedIn.
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
