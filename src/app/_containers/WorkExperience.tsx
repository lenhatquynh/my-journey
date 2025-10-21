import Image from "next/image";
import RandomTextReveal from "../_components/RandomTextReveal";

export default function WorkExperience() {
  const workExperience = [
    {
      logo: "/ptn-global.png",
      companyName: "PTN Global",
      position: "Software Developer",
      workingTime: "Oct 2023 - Present",
    },
    {
      logo: "/upwind.png",
      companyName: "Upwind",
      position: "Remote Freelance Developer",
      workingTime: "July 2025 - Oct 2025",
    },
    {
      logo: "/livesports.png",
      companyName: "LiveSports",
      position: "Remote Freelance Developer",
      workingTime: "Dec 2022 - May 2023",
    },
    {
      logo: "/gotechjsc.png",
      companyName: "Gotech株式会社",
      position: "Remote Part-time Developer",
      workingTime: " July 2022 - Nov 2022",
    },
  ];
  return (
    <section className="section">
      <h3 className="flex justify-between items-center">
        <div>
          <RandomTextReveal onHover={true} text="Work Experience" />
        </div>

        <a
          href={process.env.NEXT_PUBLIC_CV_URL}
          target="_blank"
        >
          <button className="btn">Download CV</button>
        </a>
      </h3>
      <div className="space-y-3">
        {workExperience.map((work, workIndex) => {
          return (
            <div key={workIndex} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  className="w-10 h-10 border shadow-md bg-black rounded-full"
                  src={work.logo}
                  alt={work.companyName}
                  width={40}
                  height={40}
                />
                <div className="pt-2">
                  <h4>{work.companyName}</h4>
                  <small>{work.position}</small>
                </div>
              </div>
              <small>{work.workingTime}</small>
            </div>
          );
        })}
      </div>
    </section>
  );
}
