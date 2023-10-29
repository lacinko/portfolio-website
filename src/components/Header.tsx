import Navbar from "./Navbar";

function Header() {
  return (
    <header className="container fixed top-0 z-10 flex justify-between bg-slate-800 px-4  py-2 font-mono text-white">
      <Navbar />
    </header>
  );
}

export default Header;
