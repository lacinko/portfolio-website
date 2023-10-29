import { cn } from "../utils/utils";

type MobileMenuProps = {
  isMenuOpen: boolean;
  links: {
    name: string;
    url: string;
  }[];
};

function MobileMenu({ isMenuOpen, links }: MobileMenuProps) {
  return (
    <div
      id="mobile-nav"
      className={cn(
        isMenuOpen ? "translate-y-0" : "-translate-y-[100dvh]",
        "md:hidden",
        "fixed inset-0 z-10 flex transform flex-col items-center justify-center bg-slate-800 bg-opacity-95 font-mono text-white transition-transform duration-300 ease-in-out",
      )}
    >
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              className="text-xl font-medium hover:text-indigo-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileMenu;
