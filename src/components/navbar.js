import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex w-full items-center justify-between px-6 py-5">
      <Link
        to="/"
        className="text-xl font-bold text-stone-900 transition-opacity hover:opacity-70"
      >
        DeiT Model
      </Link>

      <nav
        aria-label="Main navigation"
        className="flex items-center gap-12 sm:gap-20"
      >
        <Link
          to="/"
          className="text-sm font-medium text-black transition-opacity hover:opacity-70"
        >
          Analyze
        </Link>

        <Link
          to="/history"
          className="text-sm font-medium text-black transition-opacity hover:opacity-70"
        >
          History
        </Link>
      </nav>
    </header>
  );
}