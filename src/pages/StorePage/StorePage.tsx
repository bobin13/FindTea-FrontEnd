import { useParams, useNavigate, renderMatches } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import DrinkList from "./DrinkList";
import UserReview from "./UserReview";

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
  name: string;
  store_name: string;
  city: string;
  address: string;
  rating: number;
  drinks: Drink[];
}

function StorePage() {
  const params = useParams();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [storeUrl, setStoreUrl] = useState(`${BASE_URL}/Stores/id`);
  const [store, setStore] = useState<Store>();
  const navigate = useNavigate();

  async function GetStore() {
    try {
      const response = await fetch(`${storeUrl}/${params.id}`);
      const store = await response.json();
      console.log(store);
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
    <div className="font-custom">
      <NavBar />
      <div className="flex flex-col items-center p-6 min-h-screen bg-gray-900 text-white">
        {/* Store Image & Name */}
        <div className="flex flex-col items-center bg-gray-800/50 backdrop-blur-md shadow-lg rounded-lg p-6 w-full max-w-md">
          <img
            className="w-32 h-32 object-contain rounded-lg shadow-md border-2 border-gray-600"
            src="../images/tim_logo.jpg"
            alt="Store Logo"
          />
          <p className="mt-4 text-2xl font-bold text-gray-200">
            {store?.store_name}
          </p>
        </div>

        {/* Store Details */}
        <div className="mt-6 bg-gray-800/50 backdrop-blur-md shadow-lg rounded-lg p-6 w-full max-w-md">
          <p className="text-lg text-gray-300">
            <span className="font-semibold text-teal-400">📍 City:</span>{" "}
            {store?.city}
          </p>
          <p className="text-lg text-gray-300">
            <span className="font-semibold text-teal-400">🏠 Address:</span>{" "}
            {store?.address}
          </p>
          <p className="text-lg text-gray-300">
            <span className="font-semibold text-yellow-400">⭐ Rating:</span>{" "}
            <span className="text-yellow-400 text-2xl font-semibold">
              {store?.rating}
            </span>
            <span>/10</span>
          </p>
        </div>

        <hr className="w-full max-w-md my-6 border-gray-700" />

        {/* Drinks Section */}
        <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-md shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-400">
            🥤Drinks: {store?.drinks! != null ? store?.drinks!.length : 0}
          </h3>
          <DrinkList drinks={store?.drinks!} />
        </div>

        {/* Review Section */}
        <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-md shadow-lg rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold text-orange-400">Reviews:</h3>
          <ul className="mt-1">
            <UserReview
              username={"Bobinn"}
              rating={6}
              comment={'"Average Tea at best!"'}
              date={"monday"}
            ></UserReview>
            <UserReview
              username={"Jobann"}
              rating={5}
              comment={'"Fuddu Cha BC!!!"'}
              date={"Tueday, 10th feb"}
            ></UserReview>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StorePage;
