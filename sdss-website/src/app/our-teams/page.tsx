import { presidentData } from "../data/presidents";
import { marketingTeamData } from "../data/marketingteam";
import { datathonTeamData } from "../data/datathonteam";
import { consultingTeamData } from "../data/consultingteam";
import { financeTeamData } from "../data/financeteam";
import { profDevTeamData } from "../data/profdevteam";
import { acaDevTeamData } from "../data/acadevteam";
import { synergyTeamData } from "../data/synergyteam";
import ExecCard from '../components/exec-card/ExecCard'
import React from 'react';


export default function Teams() {
  return (
    <main className="flex lg:mt-20 min-h-screen flex-col flex-row justify-between">
      <div className="">
        <div className="gradient-text flex flex-col lg:pl-60 lg:pr-60 lg:pt-20 lg:pb-20 pt-28 pl-4 pr-4">
          <div className="body-regular">OUR TEAM</div>
          <div className="lg:flex lg:flex-row mb-10 lg:space-x-5">
            <div className="heading lg:w-1/2">
              SDSS fosters <i>impactful learning</i> and <i>collaborative engagement</i> in data science and statistics.</div>
            <div className="body-regular mt-4 lg:w-1/2">Welcome to the world of data and technology at U of T. SDSS enables a diverse community of passionate individuals to explore, learn, grow, and engage in social good in the world of Data Science and Statistics.</div>
          </div>
          <img className="lg:team-image team-image-mobile object-cover" src="/team-image.jpg" alt="team-image" />
        </div>
      </div>

      {/* presidents */}
      <div className="lg:pr-40 lg:pl-40 pb-20 mt-20 lg:ml-10 lg:mr-10 ml-4 mr-4 pl-4 pr-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-4 justify-items-center">
          {presidentData.map((exec) => (
            <ExecCard key={exec.id} {...exec} />
          ))}
        </div>
      </div>

      <div className="bg-teams-rest mb-40">
        {/* marketing team */}
        <div className="bg-white rounded-2xl lg:pr-40 lg:pl-40 pb-20 mt-20 lg:ml-10 lg:mr-10 ml-4 mr-4 pl-4 pr-4">
          <div className="body-regular secondary-purple lg:pt-20 pt-10 pb-4">MARKETING TEAM</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-4 justify-items-center">
            {marketingTeamData.map((exec) => (
              <ExecCard key={exec.id} {...exec} />
            ))}
          </div>
        </div>

        {/* datathon team */}
        <div className="lg:pr-40 lg:pl-40 pb-20 mt-20 lg:ml-10 lg:mr-10 ml-4 mr-4 pl-4 pr-4">
          <div className="body-regular secondary-purple pb-4">DATATHON TEAM</div>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-y-2 gap-x-4 justify-items-center">
            {datathonTeamData.map((exec) => (
              <ExecCard key={exec.id} {...exec} />
            ))}
          </div>

        </div>

        /* {/* consulting team for 2024 - 2025 */}
        <div className="bg-white rounded-2xl lg:pr-40 lg:pl-40 pb-20 mt-20 lg:ml-10 lg:mr-10 ml-4 mr-4 pl-4 pr-4">
          <div className="body-regular secondary-purple pt-10 pb-4">CONSULTING TEAM</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-4 justify-items-center">
            {consultingTeamData.map((exec) => (
              <ExecCard key={exec.id} {...exec} />
            ))}
          </div>
        </div> */

        {/* synergy team */}
        <div className="bg-white rounded-2xl lg:pr-40 lg:pl-40 pb-20 mt-20 lg:ml-10 lg:mr-10 ml-4 mr-4 pl-4 pr-4">
          <div className="body-regular secondary-purple pt-10 pb-4">SYNERGY TEAM</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-4 justify-items-center">
            {synergyTeamData.map((exec) => (
              <ExecCard key={exec.id} {...exec} />
            ))}
          </div>
        </div>

        {/* finance team */}
        <div className="lg:pr-40 lg:pl-40 pb-20 mt-20 lg:ml-10 lg:mr-10 ml-4 mr-4 pl-4 pr-4">
          <div className="body-regular secondary-purple pb-4">FINANCE TEAM</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-4 justify-items-center">
            {financeTeamData.map((exec) => (
              <ExecCard key={exec.id} {...exec} />
            ))}
          </div>

        </div>

        {/* professional development team */}
        <div className="bg-white rounded-2xl lg:pr-40 lg:pl-40 pb-20 mt-20 lg:ml-10 lg:mr-10 ml-4 mr-4 pl-4 pr-4">
          <div className="body-regular secondary-purple pt-10 pb-4">PROFESSIONAL DEVELOPMENT TEAM</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-4 justify-items-center">
            {profDevTeamData.map((exec) => (
              <ExecCard key={exec.id} {...exec} />
            ))}
          </div>

        </div>

        {/* academic development team */}
        <div className="lg:pr-40 lg:pl-40 lg:pb-20 mt-20 lg:ml-10 lg:mr-10 ml-4 mr-4 pl-4 pr-4">
          <div className="body-regular secondary-purple pb-4">ACADEMIC DEVELOPMENT TEAM</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-4 justify-items-center">
            {acaDevTeamData.map((exec) => (
              <ExecCard key={exec.id} {...exec} />
            ))}
          </div>

        </div>

      </div>

    </main>
  )
};
