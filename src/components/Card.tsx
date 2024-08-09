import "../styles.css";

const Card = (props: any) => {
  interface Store {
    id: string;
    store_name: string;
    city: string;
    address: string;
    rating: number;
  }
  const store: Store = props.item;
  return (
    <li className="list-item">
      <div className="d-flex flex-row align-items-center card m-2">
        <div className="col-3 p-1">
          <img
            className="rounded-circle w-100 cardThumbnail"
            src="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg"
            alt="Image"
          />
        </div>
        <div className="d-flex flex-column w-100">
          <h3 className="store-name">{store.store_name}</h3>
          <p>
            <span>Address: </span>
            <span>{store.address}</span>
          </p>
          <p>
            <span>City: </span>
            <span>{store.city}</span>
          </p>
        </div>
        <div className="ratingDiv">
          <p>{store.rating}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
