import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md 
  bg-white/70 dark:bg-black/60 
  border-b border-gray-200 dark:border-gray-800">

  <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

    {/* Logo */}
    <h1 className="text-xl font-bold tracking-wide text-black dark:text-white">
      AM
    </h1>

    {/* Links */}
    <div className="hidden md:flex gap-8 text-sm font-medium text-black dark:text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </div>

    {/* Toggle */}
    <div className="flex items-center gap-4 text-black dark:text-white">
      <ThemeToggle />
    </div>

  </div>
</nav>
  );
};

export default Navbar;