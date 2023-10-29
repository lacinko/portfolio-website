import { Icon } from "./Icons";

function Footer() {
  return (
    <footer className="container fixed bottom-0 z-20 flex justify-between bg-slate-800 px-4 py-3 font-mono text-white">
      <p className="text-xs sm:text-sm">© 2023 All rights reserved.</p>
      <ul className="flex gap-4">
        <li>
          <a
            href="mailto:ladislav.topolsky@gmail.com?subject=Contactto!&body=Hello Ladislav,"
            target="_blank"
          >
            <Icon icon="Gmail" className="h-4 w-4 sm:h-5 sm:w-5" fill="white" />
          </a>
        </li>
        <li>
          <a
            href="
            https://www.linkedin.com/in/ladislav-topo%C4%BEsky-1a964a141/
            "
            target="_blank"
          >
            <Icon
              icon="linkedIn"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="white"
            />
          </a>
        </li>
        <li>
          <a
            href="
            https://github.com/lacinko
            "
            target="_blank"
          >
            <Icon
              icon="github"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="white"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
