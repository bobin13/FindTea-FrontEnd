import { Coffee } from "lucide-react"; // Importing Coffee icon

function Header() {
  return (
    <header className="font-custom tracking-tight py-4 bg-gray-900/90 backdrop-blur-md shadow-lg shadow-teal-400/30 animate-fadeIn">
      <div className="flex flex-col items-center">
        <Coffee className="w-12 h-12 text-teal-400 mb-2 animate-pulse" />
        <p className="text-xl font-bold text-gray-100">Find Your Tea!</p>
      </div>
    </header>
  );
}

export default Header;
