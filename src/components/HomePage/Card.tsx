import { useState } from "react";
import "../../styles.css";
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
      console.log(id);
      navigate("/store/" + id);
    }
  };

  return (
    <li className="list-item">
      <div
        onClick={handleCardClick}
        data-id={store.id}
        className="d-flex flex-row align-items-center card m-2"
      >
        <div className="col-3 p-1">
          <img
            className="rounded-circle w-100 cardThumbnail"
            src="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg"
            alt="Image"
          />
          <p className="distanceTag">1.2 km</p>
        </div>
        <div className="d-flex flex-column w-100 addressBox">
          <h4 className="store-name">{store.store_name}</h4>
          <p className="card">
            <span>
              <img
                className="col-1"
                src="../images/location-indicator.svg"
                alt="location"
              />
            </span>
            <span>{store.address}</span>
            <br />
          </p>
          <p className="">
            <span>City: </span>
            <span>{store.city}</span>
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
