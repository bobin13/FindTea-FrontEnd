import { useState } from "react";

interface Drink {
  id: number;
  store_id: number;
  drink_name: string;
  is_hot_drink: boolean;
  drink_rating: number;
  is_registered: boolean;
}
interface Props {
  drink: Drink;
}

const DrinkItem = ({ drink }: Props) => {
  return (
    <div className="drinks-list-item">
      <p>{drink?.drink_name}</p>
      <p className="fs-4">{drink?.drink_rating}/10</p>
    </div>
  );
};

export default DrinkItem;
