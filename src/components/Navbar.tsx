function Navbar() {
  return (
    <nav className="w-full">
      <ul className="flex w-full justify-between py-3 font-mono">
        <li>
          <a
            href="#about-me"
            className="decoration-blue-500 decoration-2 hover:underline hover:underline-offset-2 "
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="decoration-blue-500 decoration-2 hover:underline hover:underline-offset-2 "
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="decoration-blue-500 decoration-2 hover:underline hover:underline-offset-2 "
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="decoration-blue-500 decoration-2 hover:underline hover:underline-offset-2 "
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="decoration-blue-500 decoration-2 hover:underline hover:underline-offset-2 "
          >
            Education
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
