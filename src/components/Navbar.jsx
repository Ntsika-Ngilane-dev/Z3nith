import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-zenithGray px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-zenithRed text-2xl font-bold">Z3nith</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-zenithRed">Home</Link>
        <Link to="/music" className="hover:text-zenithRed">Music</Link>
        <Link to="/about" className="hover:text-zenithRed">About</Link>
        <Link to="/contact" className="hover:text-zenithRed">Contact</Link>
      </div>
    </nav>
  );
}
