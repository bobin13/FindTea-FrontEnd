import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftCircle, Home, PlusCircle } from "lucide-react"; // Icons

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <ul className="flex justify-between items-center max-w-4xl mx-auto">
        {/* Home Button */}
        <li className="flex items-center space-x-2 hover:text-teal-400 transition">
          <Home size={22} />
          <Link to="/">Home</Link>
        </li>

        {/* Back Button */}
        <li
          className="flex items-center space-x-2 cursor-pointer hover:text-yellow-400 transition"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftCircle size={22} />
          <span>Back</span>
        </li>

        {/* Add Stores Button */}
        <li className="flex items-center space-x-2 hover:text-green-400 transition">
          <PlusCircle size={22} />
          <a href="#">Add Stores</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
