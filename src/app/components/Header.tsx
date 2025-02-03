import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import Link from "next/link";
import { MdPictureAsPdf } from "react-icons/md";
import socialMedias from "~/projects_data/socialMedias";

function Header() {
  return (
    <header className="sticky left-0 top-0 overflow-hidden border-b-8 border-lime-700 bg-zinc-950">
      <div className="mx-auto flex h-32 flex-col items-center justify-around sm:max-w-[1200px] md:h-28 md:flex-row md:justify-between md:px-10">
        <div>
          <Link href="/" className="font-ocra text-4xl text-zinc-300">
            MANOEL LOPES<span className="animate-ping-fast">_</span>
          </Link>
        </div>
        <nav>
          <div>
            <ul className="flex gap-4">
              {socialMedias.map((media) => {
                return (
                  <li key={media.id}>
                    <Link
                      href={media.url}
                      target="_blank"
                      className="font-courier text-sm"
                    >
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger>
                            <MdPictureAsPdf
                              size={32}
                              className="text-zinc-500 transition-colors duration-500 hover:text-zinc-300"
                            />
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            <p>{media.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
