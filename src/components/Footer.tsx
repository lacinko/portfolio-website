import { Icon } from "./Icons";

function Footer() {
  return (
    <footer className="container fixed bottom-0 z-10 flex justify-between bg-slate-800 px-4 py-3 font-mono text-white">
      <p>© 2023 All rights reserved.</p>
      <ul className="flex gap-4">
        <li>
          <a href="mailto:ladislav.topolsky@gmail.com?subject=Contactto!&body=Hello Ladislav,">
            <Icon icon="Gmail" className="h-6 w-6" fill="white" />
          </a>
        </li>
        <li>
          <a
            href="
            https://www.linkedin.com/in/ladislav-topo%C4%BEsky-1a964a141/
            "
          >
            <Icon icon="linkedIn" className="h-6 w-6" fill="white" />
          </a>
        </li>
        <li>
          <a
            href="
            https://github.com/lacinko
            "
          >
            <Icon icon="github" className="h-6 w-6" fill="white" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
