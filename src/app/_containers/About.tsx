import RandomTextReveal from "../_components/RandomTextReveal";

export default function About() {
  return (
    <section className="section">
      <h3>
        <RandomTextReveal onHover={true} text="About" />
      </h3>
      <p>
        Driven by a proactive learning mindset, I constantly seek out emerging
        technologies to enhance my expertise. I have a proven ability to
        collaborate effectively within teams and foster positive working
        relationships, consistently contributing to the achievement of project
        goals
      </p>
    </section>
  );
}
