import React from 'react';

type Exec = {
  id: number;
  name: string;
  role: string;
  year: string;
  program: string;
  linkedin: string;
  pfp: string;
};

const Card: React.FC<Exec> = ({ name, role, year, program, linkedin, pfp }) => {
  return (
    <div className="bg-white pink-border w-full lg:mt-0 p-4 items-center">
      <div className='flex flex-row'>
        {/* Profile picture */}
        {pfp ? (
          <img src={pfp} alt={name} className="lg:w-40 lg:h-40 w-24 h-24 mr-4 rounded-full object-cover shrink-0" />
        ) : (
          <div className="w-40 h-40 rounded-full object-cover bg-gray-200 shrink-0"></div>
        )}
        {/* Name and Details */}
        <div className="lg:ml-6 mr-2 flex flex-col">
          <p className="body-regular upper-case gray">{role}</p>
          <h2 className="body-large text-black mb-2 whitespace-normal break-words">{name}</h2>
          <p className="body-regular gray whitespace-normal break-words">{year}</p>
          <p className="body-regular gray whitespace-normal break-words">{program}</p>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="body-regular secondary-purple mt-2">
            LinkedIn
          </a>
        </div>

      </div>

    </div>
  );
};

export default Card;
