import DrinkItem from "./DrinkItem";

interface Drink {
  id: number;
  store_id: number;
  drink_name: string;
  is_hot_drink: boolean;
  drink_rating: number;
  is_registered: boolean;
}
interface Props {
  drinks: Drink[];
}

const DrinkList = ({ drinks }: Props) => {
  console.log();
  return (
    <ul className="drinks-list">
      {drinks?.map((drink, index) => (
        <DrinkItem drink={drink} key={drink.id}></DrinkItem>
      ))}
    </ul>
  );
};

export default DrinkList;
