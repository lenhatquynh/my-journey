import RandomTextReveal from "@/components/RandomTextReveal";

export default function Skills() {
  const skills = [
    "C#",
    "TypeScript",
    "JavaScript",
    ".Net",
    "Web API",
    "Entity Framework",
    "Dapper",
    "Next.js",
    "React",
    "PostgreSQL",
    "SQL Server",
    "Redis",
    "In-memory cache",
    "AWS",
    "OOP",
    "SOLID",
    "Repository Pattern",
    "EventBus Pattern",
    "Git",
    "JWT",
    "RabbitMQ",
    "Redux",
    "Tanstack Query",
    'Agile & Scrum',
  ];
  return (
    <section className="section">
      <h3>
        <RandomTextReveal onHover={true} text="Skills" />
      </h3>
      <div className="flex flex-wrap items-center gap-2" style={{ maxWidth: '500px' }}>
        {skills.map((skill) => {
          return (
            <button key={skill} className="btn dark">
              {skill}
            </button>
          );
        })}
      </div>
    </section>
  );
}
