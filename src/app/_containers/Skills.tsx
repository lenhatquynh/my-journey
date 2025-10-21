import RandomTextReveal from "@/components/RandomTextReveal";

export default function Skills() {
  const skills = [
    ".Net",
    "C#",
    "Next.js",
    "Reactjs",
    "PostgreSQL",
    "Typescript",
    "Javascript",
    "OOP",
    "SOLID",
    "Redux",
    "Tanstack Query",
    "Git",
    'Scrum',
    'Kanban'
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
