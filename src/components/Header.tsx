import Navbar from "./Navbar";

function Header() {
  return (
    <header className="container fixed flex justify-between bg-slate-800 px-4  py-2 font-mono text-white">
      <Navbar />
    </header>
  );
}

export default Header;
