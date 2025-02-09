
import Image from "next/image";
import Link from "next/link";
import { eventData } from "./data/events";
import EventCarousel from "./components/event-carousel/event-carousel";
import { usePathname } from 'next/navigation';

// import { Key } from "react";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col justify-between lg:pr-20 lg:pl-20 lg:pb-20 pl-4 pr-4">
      <div className="first lg:ml-20 lg:mr-0">
        <div className="flex flex-col space-y-5 lg:w-1/2">
          <div className="flex flex-col text-white display-large lg:mt-80 mt-60">
            <div>The future of data</div>
            <div className="mt-[-10px]">science and statistics.</div>
          </div>
          <div className="body-regular pb-5 text-white">
            Students in Data Science and Statistics is a community uplifting and supporting students at the University of Toronto
          </div>

        </div>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSezVJTq-SxrF5PEk3jnlI5yQ-krV5OoXnLrQf8Hze-XWZDUwQ/viewform?usp=sharing" className="inline-flex meet-teams-button body-regular secondary-purple items-center bg-white border purple-border rounded-full px-4 py-2 text-gray-800 hover:bg-secondary-purple hover:text-white transition duration-200">
          <span className="p-1">Register for SDSS Datathon</span>
        </Link>
      </div>

      <div className="lg:pl-40 lg:pr-40">
        <div className="heading white">Introducing SDSS Datathon 2025</div>
        <div className="body-regular white">The first campus-wide datathon at UofT St. George is happening <b>March 1-2</b>!</div>
        <div className="flex flex-row items-center mt-10">
          <div className="line-divider w-full bg-white"></div>
        </div>
        <div className="bg-white rounded-2xl lg:pl-10 lg:pr-10 pl-4 pr-4 pt-4 pb-4 mt-10">
          <div className="lg:grid lg:grid-cols-3 gap-10 m-6">
            <div className="flex flex-col">
              <div className="body-regular purple lg:mt-0 mt-5 mb-5">What is it?</div>
              <div className="body-regular black">Over two days, participants tackle complex data challenges, creating unique and innovative real-world data and machine learning applications from our carefully crafted cases. They can also enhance them with their own datasets!</div>
            </div>
            <div className="flex flex-col">
              <div className="body-regular purple lg:mt-0 mt-10 mb-5">Who can join?</div>
              <div className="body-regular black">Any UofT undergraduates from beginners to experienced data scientists! Our different awards will ensure applicants can be tested fairly across various dimensions such as model performance, quality of insights, and quality of visualizations.</div>
            </div>
            <div className="flex flex-col">
              <div className="body-regular purple lg:mt-0 mt-10 mb-5">Location</div>
              <div className="body-regular black">
                Room 1130 - Bahen Centre for Information Technology. <br></br>
                <a
                  href="https://www.google.com/maps/place/40+St+George+St,+Toronto,+ON+M5S+2E4"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  40 St George St, Toronto, ON M5S 2E4
                </a>
              </div>

            </div>

          </div>
        </div>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSezVJTq-SxrF5PEk3jnlI5yQ-krV5OoXnLrQf8Hze-XWZDUwQ/viewform?usp=sharing" className="inline-flex meet-teams-button w- mt-10 body-regular items-center bg-white border purple-border rounded-full px-4 py-2 text-gray-800 hover:bg-secondary-purple hover:text-white transition duration-200">
          <span className="mr-2 p-1">Register now</span>
          <span className="">→</span>
        </Link>
      </div>

      <div className="mission-statement lg:pl-40 lg:pr-40 pl-6 pr-6">
        <div className="body-regular purple lg:pt-20 pt-10 pb-5">MISSION</div>
        <div className="flex flex-col lg:space-y-20 space-y-10 lg:pb-20">
          <div className="heading black">
            SDSS is a student-run organization at the University of Toronto that aims to foster a community of students interested in data science and statistics. We provide students with the resources, opportunities, and support they need to succeed in their academic and professional careers.
          </div>
          <img src="brave.png" alt="Mission Statement" />
          <div className="mission-numbers space-x-2 flex lg:flex-row flex-col items-center">
            <div className="mission-section mb-10 lg:text-left text-center">
              <div className="body-regular purple">FOUNDED IN </div>
              <div className="display black">2023</div>
              <div className="body-regular black">By 2 best friends :-)</div>
            </div>
            <div className="mission-section mb-10 lg:text-left text-center">
              <div className="body-regular purple">MEMBERSHIP</div>
              <div className="display black">100+</div>
              <div className="body-regular black">Joining us in events</div>
            </div>
            <div className="mission-section mb-10 lg:text-left text-center">
              <div className="body-regular purple">TEAM</div>
              <div className="display black">140%</div>
              <div className="body-regular black">Bigger since 2023</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <EventCarousel eventData={eventData} />
      </div>


      <div className="about-us">
        <div className="about-us-container lg:pl-40 lg:pr-40 lg:pt-20 pl-6 pr-6 pt-10 pb-20 mb-20">
          <div className="body-regular purple">ABOUT US</div>
          <div className="black flex flex-col">
            <div className="flex flex-col lg:flex-row lg:mb-10 lg:space-x-5">
              <div className="heading lg:w-1/2">
                SDSS fosters <i>impactful learning</i> and <i>collaborative engagement</i> in data science and statistics.</div>
              <div className="body-regular mt-4 lg:w-1/2">Welcome to the world of data and technology at U of T. SDSS enables a diverse community of passionate individuals to explore, learn, grow, and engage in social good in the world of Data Science and Statistics.</div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 gap-10">
            <div className="flex flex-row items-center space-x-10">
              <img className="object-contain h-200" src="/ad-icon.png" alt="About Us" />
              <div className="flex flex-col space-y-2 mt-6 mb-6">
                <div className="body-regular purple">01 EDUCATION</div>
                <div className="body-regular black">Our Academic Development Team provides resources for students of all skill levels to learn and grow in data science and statistics.</div>
              </div>

            </div>
            <div className="flex flex-row space-x-10 items-center">
              <img className="object-contain h-20" src="/pd-icon.png" alt="About Us" />
              <div className="flex flex-col space-y-2 mt-6 mb-6">
                <div className="body-regular purple">02 CAREER</div>
                <div className="body-regular black">Our Professional Development Team exposes students to industry professionals and encourages students to continue pursuing this path.</div>
              </div>
            </div>

            <div className="flex flex-row space-x-10 items-center">
              <img className="object-contain h-20" src="/consulting-icon.png" alt="About Us" />
              <div className="flex flex-col space-y-2 mt-6 mb-6">
                <div className="body-regular purple">03 CONSULTING</div>
                <div className="body-regular black">Our Consulting Team works on real-world data science and statistics projects for non-profit organizations and businesses.</div>
              </div>
            </div>

            <div className="flex flex-row space-x-10 items-center">
              <img className="object-contain h-20" src="/community-icon.png" alt="About Us" />
              <div className="flex flex-col space-y-2 mt-6 mb-6">
                <div className="body-regular purple">04 COMMUNITY</div>
                <div className="body-regular black">Our Internal Team ensures that our members are able to grow and learn in a safe and welcoming environment.</div>
              </div>
            </div>
          </div>

          <Link href="/our-teams" className="inline-flex meet-teams-button w- mt-10 body-regular items-center bg-white border purple-border rounded-full px-4 py-2 text-gray-800 hover:bg-secondary-purple hover:text-white transition duration-200">
            <span className="mr-2 p-1">Meet Our Team</span>
            <span className="">→</span>
          </Link>

        </div>
      </div>
    </main>
  );
}
