import RandomTextReveal from "../_components/RandomTextReveal";
import Image from "next/image";

export default function Header() {
  return <header id="about" className="section flex items-start gap-7">
    <div>
      <h1><RandomTextReveal onHover={true} text="Hi, I am Quynh Le" /></h1>

      <p>Innovative and dedicated Software Engineer, with a passion for transforming ideas into impactful digital solutions.</p>
    </div>

    <Image src="/avatar.png" alt="Quynh Le" width={96} height={96} className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-full shadow" />

  </header>
}
