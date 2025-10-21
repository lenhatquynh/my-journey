import {
  CodeIcon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon
} from "lucide-react";
import Link from "next/link";
import { Dock, DockIcon } from "../_components/Dock";
import Separator from "../_components/Separator";

export default function Navigation() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-zinc-500">
      <Dock direction="middle">
        <DockIcon>
          <Link href={"#about"}>
            <HomeIcon size={20} />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href={"#work"}>
            <CodeIcon size={20} />
          </Link>
        </DockIcon>
        <Separator />
        <DockIcon>
          <Link target="_blank" href="https://github.com/lenhatquynh">
            <GithubIcon size={20} />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/quynh-le-nhat"
          >
            <LinkedinIcon size={20} />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}
