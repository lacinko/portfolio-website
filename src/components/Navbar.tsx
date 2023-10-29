type NavbarProps = {
  links: {
    name: string;
    url: string;
  }[];
};

function Navbar({ links }: NavbarProps) {
  return (
    <nav className="flex w-full items-center max-md:hidden">
      <ul className="flex w-full gap-10 font-mono">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              className="decoration-blue-500 decoration-2 hover:underline hover:underline-offset-2 "
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
