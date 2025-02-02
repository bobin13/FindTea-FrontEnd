import React, { useEffect, useRef, useState } from "react";
import ListGroup from "./ListGroup";
import { Search, AlertTriangle } from "lucide-react"; // Icons

interface Store {
  id: string;
  store_name: string;
  city: string;
  address: string;
  rating: number;
}

const BASE_URL = import.meta.env.VITE_BASE_URL;
const STORES_URL = import.meta.env.VITE_ENDPOINT_STORES;

const Home = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("london");
  const [stores, setStores] = useState<Store[]>([]);
  const [backgroundImage, setBackgroundImage] = useState("");

  const abortControllerRef = useRef<AbortController | null>(null);

  async function Search() {
    console.log(searchValue);
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${BASE_URL}${STORES_URL}/${searchValue.toLowerCase()}`,
        { signal: abortControllerRef.current?.signal }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch stores. Try again.");
      }

      const stores = await response.json();
      setStores(stores);
    } catch (e: any) {
      if (e.name === "AbortError") return;
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  // Search button handler
  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      Search();
    }
  };

  // Input change handler
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // Handle Enter key press
  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Detect if mobile device
  useEffect(() => {
    setBackgroundImage(
      /Mobi/i.test(window.navigator.userAgent)
        ? "../images/tea-cup.png"
        : "../images/background-desktop.jpg"
    );
  }, []);

  return (
    <div className="relative font-custom flex flex-col items-center min-h-screen bg-gray-900 text-white">
      {/* Search Section */}
      <div className="mt-12 flex flex-col items-center w-full max-w-lg px-4">
        <input
          value={searchValue}
          onChange={inputChange}
          onKeyDown={handleEnterKey}
          type="text"
          className="w-full p-3 rounded-lg text-lg text-gray-200 bg-gray-800 bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
          placeholder="Enter a City..."
        />
        <button
          onClick={handleSearch}
          className="mt-3 flex items-center justify-center w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold p-3 rounded-lg transition duration-200 shadow-lg"
        >
          Search
        </button>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="mt-8 flex flex-col items-center">
          <p className="text-lg text-gray-300">🔎 Searching...</p>
        </div>
      )}

      {/* Error Handling */}
      {error && (
        <div className="mt-8 flex flex-col items-center text-red-400">
          <AlertTriangle size={40} />
          <p className="text-lg">{error}</p>
        </div>
      )}

      {/* Store List */}
      <div className="mt-6 w-full max-w-2xl">
        <ListGroup stores={stores} />
      </div>
    </div>
  );
};

export default Home;
