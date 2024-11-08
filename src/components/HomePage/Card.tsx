import { useState } from "react";
import "../../styles.css";
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
      console.log(id);
      navigate("/store/" + id);
    }
  };

  return (
    <li className="list-item fade-in">
      <div
        onClick={handleCardClick}
        data-id={store._id.pid}
        className="d-flex flex-row align-items-center card m-2"
      >
        <div className="col-3 p-1">
          <img
            className="cardThumbnail"
            src="../images/shibu_404.gif"
            alt="Image"
          />
          <p className="distanceTag">1.2 km</p>
        </div>
        <div className="d-flex flex-column w-100 addressBox">
          <h4 className="store-name">{store.store_name}</h4>
          <p className="">
            <span>City: </span>
            <span>{store.city}</span>
          </p>
          <p className="">
            <span>
              <img
                className="col-1"
                src="../images/location-indicator.svg"
                alt="location"
              />
            </span>
            <span>{store.address}</span>
          </p>
        </div>
        <div className="ratingDiv">
          <p>{store.rating}</p>
        </div>
      </div>
      <div></div>
    </li>
  );
};

export default Card;
