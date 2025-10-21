import Link from "next/link";
import RandomTextReveal from "../_components/RandomTextReveal";

export default function GetInTouch() {
  return (
    <section className="section mt-[100px] pb-[200px]">
      <button className="btn uppercase text-xs mb-[10px]">My contact</button>
      <h2>
        <RandomTextReveal onHover={true} text="Get in touch" />
      </h2>
      <p>
        Want to chat? Just shoot me a dm{" "}
        <Link
          className="link"
          href="https://www.linkedin.com/in/quynh-le-nhat/"
          target="_blank"
        >
          with a direct question on LinkedIn
        </Link>{" "}
        {`and I'll respond whenever I can. Otherwise, send me an email to`}{" "}
        <Link className="link" href={"mailto:nhatquynhle2001@gmail.com"}>
          nhatquynhle2001@gmail.com
        </Link>
      </p>
    </section>
  );
}
