import { useParams, useNavigate, renderMatches } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import DrinkList from "./DrinkList";

interface Drink {
  id: number;
  store_id: number;
  drink_name: string;
  is_hot_drink: boolean;
  drink_rating: number;
  is_registered: boolean;
}
interface Store {
  id: string;
  store_name: string;
  city: string;
  address: string;
  rating: number;
  drinks: Drink[];
}

function StorePage() {
  const params = useParams();
  const [storeUrl, setStoreUrl] = useState(
    " http://localhost:5081/api/Store/id"
  );
  const [store, setStore] = useState<Store>();
  const navigate = useNavigate();

  async function GetStore() {
    try {
      const response = await fetch(`${storeUrl}?id=${params.id}`);
      const store = await response.json();
      console.log(store.drinks);
      setStore(store);
    } catch (e) {
    } finally {
    }
  }

  useEffect(() => {
    GetStore();
    // Listener function for the "back" button
    const handleBackButton = () => {
      navigate(-1);
    };

    window.onload = function () {
      console.log("page loaded!");
    }; // Listen to the popstate event

    // window.addEventListener("popstate", handleBackButton);

    // // Clean up the event listener when the component unmounts
    // return () => {
    //   window.removeEventListener("popstate", handleBackButton);
    // };
  }, []);

  return (
    <div className="m-2">
      <NavBar />
      <div className="d-flex flex-row flex-center">
        <div className="store-image-div d-flex flex-column text-center">
          <img className="" src="../images/tim_logo.jpg" alt="" />
          <p className="store-image-text">Tim Hortons</p>
        </div>
        <div className="p-4">
          <p>City: {store?.city}</p>
          <p>Address:{store?.address}</p>
          <p className="rating-store-page"> Rating: {store?.rating}/10</p>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column card">
        <h3>Drinks: {store?.drinks!.length}</h3>
        <DrinkList drinks={store?.drinks!}></DrinkList>
      </div>
    </div>
  );
}

export default StorePage;
