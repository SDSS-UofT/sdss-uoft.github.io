import React from "react";
import Link from "next/link"; // ⬅️ add this

type EventCard = {
  title: string;
  date: string;
  location: string;
  description: string;
  signup?: {
    url?: string;
    label?: string;
    onClick?: () => void;
    newTab?: boolean;
  };
};

const Card: React.FC<EventCard> = ({ title, date, location, description, signup }) => {
  const label = signup?.label ?? "Sign up";
  const url = signup?.url;
  const isInternal = !!url && url.startsWith("/");

  return (
    <div className="bg-white pink-border w-full p-4 rounded-2xl">
      <h2 className="body-large text-black mb-1 break-words">{title}</h2>
      <p className="body-regular gray">{date}</p>
      <p className="body-regular gray">{location}</p>
      <p className="body-regular mt-3 break-words text-black">{description}</p>

      {signup && (
        <div className="mt-3">
          {signup.onClick ? (
            <button
              type="button"
              onClick={signup.onClick}
              className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium border border-pink-100 bg-pink-200 text-black hover:bg-pink-300"
            >
              {label}
            </button>
          ) : url ? (
            isInternal ? (
              <Link
                href={url}
                className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium border border-pink-100 bg-pink-200 text-black hover:bg-pink-300"
              >
                {label}
              </Link>
            ) : (
              <a
                href={url}
                target={signup.newTab ? "_blank" : "_self"}
                rel={signup.newTab ? "noopener noreferrer" : undefined}
                className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium border border-pink-100 bg-pink-200 text-black hover:bg-pink-300"
              >
                {label}
              </a>
            )
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Card;
