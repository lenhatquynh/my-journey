import { Calendar, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AppFeatures from "./AppFeatures";

function WorkInfo({
  title,
  type,
  link = false,
}: {
  title: string;
  type: "duration" | "website" | "github";
  link?: boolean;
}) {
  const getLink = () => {
    if (type === "github") return `https://github.com/${title}`;

    if (type === "website") return `https://${title}`;

    return "";
  };

  const getTitle = (name: string) => {
    if (type === "website" && name.includes("github.com")) {
      return name.replace("github.com/", "git:");
    }
    return name;
  };

  return (
    <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
      {type === "duration" ? (
        <Calendar
          className="p-0.5 rounded bg-green-100 text-green-500"
          size={15}
        />
      ) : null}
      {type === "github" ? (
        <Github
          className="p-0.5 rounded bg-orange-100 text-orange-500"
          size={15}
        />
      ) : null}
      {type === "website" ? (
        <Globe className="p-0.5 rounded bg-blue-100 text-blue-500" size={15} />
      ) : null}
      <div className="truncate">
        {link ? (
          <Link
            className="hover:underline transition-all"
            target="_blank"
            href={getLink()}
          >
            {getTitle(title)}
          </Link>
        ) : (
          title
        )}
      </div>
    </div>
  );
}

export default function WorkList() {
  const works = [
    {
      thumb: "",
      logo: "/appscript.png",
      name: "Drive Files Downloader",
      duration: "Sep 16 2025",
      website: "",
      github: "lenhatquynh/drive-files-downloader",
      desc: "A Google Apps Script utility that downloads files from a list of Google Drive file IDs and saves them into a designated Drive folder. Supports renaming files with a custom prefix or preserving their original names if no prefix is set.",
      features: [
        "Reads file IDs from a specified range in a Google Sheet",
        "Downloads files directly via Google Drive URL fetch",
        "Saves downloaded files into a specified Drive folder",
        "Supports optional prefix naming. Uses original file names if no prefix specified",
        "Logs errors for files that fail to download",
      ],
    },
    {
      thumb: "",
      logo: "/appscript.png",
      name: "Drive Folder File Lister",
      duration: "Sep 16 2025",
      website: "",
      github: "lenhatquynh/drive-folder-file-lister",
      desc: "A Google Apps Script utility that lists all files in a specified Google Drive folder and appends their names and file IDs to a Google Sheet. It is ideal for users looking to quickly export metadata of files within a Drive folder to a Sheet without manual copying.",
      features: [
        "Retrieves multiple useful metadata fields for each file in a specified Drive folder",
        "Automatically appends this data as rows in the active Google Sheet",
        "Simple to customize by updating the folder ID in the script",
      ],
    },
    {
      thumb: "/upwind-thumb.png",
      logo: "/upwind-dark.png",
      name: "Upwind Snowkiting in Norway",
      duration: "July 2025 - Oct 2025",
      website: "upwindsnowkiting.com",
      github: "",
      desc: "A landing page for Upwind Snowkiting in Norway client. It is a simple and elegant website that showcases the beauty of snowkiting in Norway. Built with Next.js, MUI, and TypeScript. It's also support SEO and performance optimization.",
    },
    {
      thumb: "/eclinic-thumb.jpg",
      logo: "/eclinic.png",
      name: "Eclinic",
      duration: "Apr 2023 - Aug 2023",
      website: "",
      github: "FiveManDev/EClinic_Web",
      desc: "My capstone project for my bachelor's degree. It is a web application for a clinic that allows patients to book appointments, view their medical history, and manage their personal information.",
      features: [
        "Service packages management",
        "Chat and video call",
        "Authentication and Authorization",
        "Forum management",
        "Blogs management",
        "Doctor schedules management",
        "Diagnosis of skin diseases",
        "Booking management",
        "...More",
      ],
    },
  ];
  return (
    <section className="section-large">
      {works.map((work, workIndex) => {
        return (
          <div key={workIndex} className="mb-[70px] relative">
            <header className="flex items-center gap-4 section pt-[10px]">
              <Image
                className="p-1.5 rounded-full border shadow-md"
                src={work.logo}
                alt={work.name}
                width={40}
                height={40}
              />
              <div className="space-y-2">
                <h4 className="flex items-center gap-2">{work.name} </h4>
                <div className="hidden sm:flex items-center gap-3">
                  <WorkInfo type="duration" title={work.duration} />
                  {work.website && (
                    <WorkInfo type="website" link={true} title={work.website} />
                  )}
                  {work.github && (
                    <WorkInfo type="github" link={true} title={work.github} />
                  )}
                </div>
              </div>
            </header>
            <div className="section pt-3 flex flex-wrap sm:hidden items-center gap-3">
              <WorkInfo type="duration" title={work.duration} />
              {work.website && (
                <WorkInfo type="website" link={true} title={work.website} />
              )}

              {work.github && (
                <WorkInfo type="github" link={true} title={work.github} />
              )}
            </div>
            <section className="section pt-[20px]">
              <p className="para-sm">{work.desc}</p>
              <AppFeatures features={work.features} />
            </section>

            {work.thumb && (
              <div className="flex justify-center bg-zinc-100 rounded-xl p-3 mt-4">
                <Image
                  src={work.thumb}
                  alt={work.name}
                  width={500}
                  height={500}
                  style={{
                    maxWidth: "1000px",
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
