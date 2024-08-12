import React, { useEffect, useRef, useState } from "react";
import ListGroup from "./ListGroup";

interface Store {
  id: string;
  store_name: string;
  city: string;
  address: string;
  rating: number;
}

const BASE_URL = " http://localhost:5081/api/Store";

const SearchPanel = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [stores, setStores] = useState<Store[]>([]);

  const abortControllerRef = useRef<AbortController | null>(null);

  async function Search() {
    console.log(searchValue);
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch(
        `${BASE_URL}/find?cityQuery=${searchValue}`,
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
    return <img className="col-12" src="src/assets/error_shibu.jpeg"></img>;
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

  return (
    <div className="text-center">
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
