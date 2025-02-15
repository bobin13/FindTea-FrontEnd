import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = (props: any) => {
  interface Store {
    id: string;
    store_name: string;
    city: string;
    address: string;
    rating: number;
  }

  const [drinkPanelVisibility, setDrinkPanelVisibility] = useState(false);
  const store: Store = props.item;
  const navigate = useNavigate();
  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const id = (event.currentTarget as HTMLDivElement).getAttribute("data-id");

    if (id) {
      navigate("/store/" + id);
    }
  };

  return (
    <li
      onClick={handleCardClick}
      data-id={store.id}
      className="animate-fadeIn cursor-pointer rounded-lg border border-gray-700 bg-gray-900/80 hover:shadow-lg hover:shadow-teal-400/50 transition-all duration-200 transform hover:scale-105 p-4 m-2"
    >
      {/* Store Name */}
      <h4 className="text-2xl font-bold text-center text-teal-300 mb-3">
        {store.store_name}
      </h4>

      {/* Store Content */}
      <div className="flex items-center justify-between">
        {/* Store Image */}
        <div className="flex-1">
          <img
            className="rounded-lg h-[100px] object-cover border border-gray-700 shadow-md"
            src="../images/tim_logo.jpg"
            alt="Store Logo"
          />
        </div>

        {/* Store Details */}
        <div className="flex-1 text-gray-300">
          <p className="text-lg">
            <span className="font-semibold text-teal-400">📍{store.city}</span>{" "}
          </p>
        </div>

        {/* Store Rating */}
        <div className="flex flex-1 items-center justify-center">
          <p className="text-5xl font-bold text-yellow-400">{store.rating}</p>
          <p className="pt-5 text-xl">/10</p>
        </div>
      </div>
      <div className="p-1">
        <p className="tracking-tighter">Address: {store.address}</p>
      </div>
      {/* Google Maps Link */}
      <a
        href={`https://www.google.com/maps/search/${store.store_name}+${store.address},${store.city}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-center text-lg font-semibold text-gray-200 bg-teal-600/80 hover:bg-teal-500 transition-all duration-200 rounded-md py-2"
      >
        View on Maps 📍
      </a>
    </li>
  );
};

export default Card;
