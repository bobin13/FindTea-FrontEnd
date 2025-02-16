import { Search, Heart, User, CirclePlus } from "lucide-react"; // Import icons
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="fixed bottom-0 w-full bg-gray-900/90 backdrop-blur-md shadow-lg shadow-teal-400/30 animate-fadeIn">
      <div className="flex flex-row justify-around py-3 border-t-2 border-teal-400">
        {/* Search Button */}
        <button
          onClick={() => navigate("/search")}
          className="flex flex-col items-center text-gray-200 transition-all hover:text-white hover:scale-110 active:scale-90"
        >
          <Search className="w-7 h-7 text-teal-400" />
          <p className="text-xs mt-1">Search</p>
        </button>
        <button
          onClick={() => navigate("/addStore")}
          className="flex flex-col items-center text-gray-200 transition-all hover:text-white hover:scale-110 active:scale-90"
        >
          <CirclePlus className="w-7 h-7 text-orange-400"></CirclePlus>
          <p className="text-xs mt-1">Add Store</p>
        </button>

        {/* Favorites Button */}
        <button
          onClick={() => navigate("/favorites")}
          className="flex flex-col items-center text-gray-200 transition-all hover:text-white hover:scale-110 active:scale-90"
        >
          <Heart className="w-7 h-7 text-red-400" />
          <p className="text-xs mt-1">Favorites</p>
        </button>

        {/* Profile Button */}
        <button
          onClick={() => navigate("/profile")}
          className="flex flex-col items-center text-gray-200 transition-all hover:text-white hover:scale-110 active:scale-90"
        >
          <User className="w-7 h-7 text-blue-400" />
          <p className="text-xs mt-1">Profile</p>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
