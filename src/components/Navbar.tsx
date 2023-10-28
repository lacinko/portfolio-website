function Navbar() {
  return (
    <nav className="w-full">
      <ul className="flex w-full justify-between py-3 font-mono">
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#technology-stack">Technology Stack</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
