import React, { useEffect, useRef, useState } from "react";
import ListGroup from "./ListGroup";

interface Store {
  _id: {
    pid: number;
    increment: number;
    machine: number;
    timestamp: number;
    creationTime: string;
  };
  store_name: string;
  city: string;
  address: string;
  rating: number;
}

const BASE_URL = import.meta.env.VITE_BASE_URL;
const STORES_URL = import.meta.env.VITE_ENDPOINT_STORES;

const SearchPanel = () => {
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
    <div className="text-center main-panel">
      <img className="image-backdrop" src={backgroundImage} alt="" />
      <div className="image-overlay"></div>
      <input
        value={searchValue}
        onChange={inputChange}
        onKeyDown={handleEnterKey}
        type="text"
        className="form-control text-center w-50 mb-3 mx-auto"
        placeholder="Enter a City.."
      ></input>
      <button onClick={handleSearch} className="btn btn-primary">
        Search
      </button>
      <hr />
      <div>
        <ListGroup stores={stores}></ListGroup>
      </div>
    </div>
  );
};

export default SearchPanel;
