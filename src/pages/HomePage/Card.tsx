import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = (props: any) => {
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

  const [drinkPanelVisibility, setDrinkPanelVisibility] = useState(false);
  const store: Store = props.item;
  const navigate = useNavigate();
  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const id = (event.currentTarget as HTMLDivElement).getAttribute("data-id");
    if (id) {
      console.log(store._id.valueOf());
      navigate("/store/" + id);
    }
  };

  return (
    <li className="list-item animate-fadeIn rounded-md border-s-white border-2 items-center flex-row p-2 m-2 bg-black bg-opacity-50">
      <div
        onClick={handleCardClick}
        data-id={store._id}
        className="flex flex-row justify-between"
      >
        <div className="bg-opacity-100 flex-1">
          <img
            className="rounded h-[110px] animate-fadeIn"
            src="../images/tim_logo.jpg"
            alt="Image"
          />
        </div>
        <div className="flex-1">
          <h4 className="">{store.store_name}</h4>
          <p className="text-2xl font-semibold ml-2">
            <span></span>
            <span>{store.city}</span>
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <p className="text-6xl font-semibold">{store.rating}</p>
        </div>
      </div>
      <div className="flex flex-row m-1 mt-2 border-s-white border-2 rounded-md items-center justify-center">
        <img
          className="h-6 bg-green-600 rounded-xl m-1"
          src="../images/location-indicator.svg"
          alt="location"
        />
        <p className="text-xl">{store.address} (2km) </p>
      </div>
    </li>
  );
};

export default Card;
