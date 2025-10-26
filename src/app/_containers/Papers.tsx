import { ExternalLink } from "lucide-react";
import Link from "next/link";
import RandomTextReveal from "../_components/RandomTextReveal";

export default function Papers() {
  const papers = [
    {
      title:
        "Digitization adoption in developing countries: Investigating the factors affecting intention to use digital currency in Vietnam",
      journal: "Journal of Infrastructure, Policy and Development",
      impactFactor: "ISI/Scopus Q2",
      url: "https://systems.enpress-publisher.com/index.php/jipd/article/view/5967",
    },
    {
      title: "A Proposed Approach for Monkeypox Classification",
      journal:
        "International Journal of Advanced Computer Science and Applications",
      impactFactor: "ISI/Scopus Q3",
      url: "https://thesai.org/Publications/ViewPaper?Volume=14&Issue=8&Code=IJACSA&SerialNo=71",
    },
  ];

  return (
    <section className="section mt-[50px] pb-[200px]">
      <button className="btn uppercase text-xs mb-[10px]">My papers</button>
      <h2>
        <RandomTextReveal onHover={true} text="Research Publications" />
      </h2>

      <div className="space-y-4">
        {papers.map((paper, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 last:border-b-0"
          >
            <p className="text-sm font-semibold text-gray-900 mb-2">{paper.title}</p>
            <p className="text-sm text-gray-600 mb-2">{paper.journal}</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-600">{paper.impactFactor}</span>
              <Link
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:underline"
              >
                <span>Read paper</span>
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
