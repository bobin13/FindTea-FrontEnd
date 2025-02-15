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
    <div className="drinks-list-item font-semibold flex flex-row justify-between bg-gray-900 rounded-md p-1 px-3 mb-1 shadow-md">
      <p>{drink?.drink_name}</p>
      <p className="text-yellow-400 text-xl ">{drink?.drink_rating}</p>
    </div>
  );
};

export default DrinkItem;
