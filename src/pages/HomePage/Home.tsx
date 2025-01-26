import React, { useEffect, useRef, useState } from "react";
import ListGroup from "./ListGroup";

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
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("london");
  const [stores, setStores] = useState<Store[]>([]);
  const [backgroundImage, setBackgroundImage] = useState("");

  const abortControllerRef = useRef<AbortController | null>(null);

  async function Search() {
    console.log(searchValue);
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch(
        `${BASE_URL}${STORES_URL}/${searchValue.toLowerCase()}`,
        {
          signal: abortControllerRef.current?.signal,
        }
      );
      const stores = await response.json();
      setStores(stores);
      console.log(stores);
    } catch (e: any) {
      if (e.name === "AbortError") {
        console.log("Aborted!");
        return;
      }
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  if (error) {
    return <img className="col-12" src="../images/error_shibu.jpeg"></img>;
  }

  //search button press event handler
  const handleSearch = () => {
    if (searchValue !== "") {
      console.log("Searching!");
      Search();
    }
  };

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const isMobile = () => {
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    return isMobileDevice;
  };
  useEffect(() => {
    if (isMobile()) {
      setBackgroundImage("../images/tea-cup.png");
    } else {
      setBackgroundImage("../images/background-desktop.jpg");
    }
  }, []);

  return (
    <div className="font-custom tracking-tighter flex-col">
      <img
        className="fixed inset-0 h-full w-full object-cover -z-10 blur-sm scale-105"
        src={backgroundImage}
        alt=""
      />

      <div className="flex flex-col items-center">
        <input
          value={searchValue}
          onChange={inputChange}
          onKeyDown={handleEnterKey}
          type="text"
          className="text-center p-1 m-1 text-xl font-semibold rounded-md w-[80%] max-w-lg opacity-50 bg-black"
          placeholder="Enter a City.."
        ></input>
        <button
          onClick={handleSearch}
          className="block p-1 m-1 rounded-md border-2 border-s-white bg-black bg-opacity-60 w-20"
        >
          Search
        </button>
      </div>

      <div>
        <ListGroup stores={stores}></ListGroup>
      </div>
    </div>
  );
};

export default Home;
