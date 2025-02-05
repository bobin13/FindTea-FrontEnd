import { useState } from "react";
import Card from "./Card";

interface Store {
  id: string;
  store_name: string;
  city: string;
  address: string;
  rating: number;
}

interface Props {
  stores: Store[];
}

function ListGroup({ stores }: Props) {
  return (
    <>
      <ul className="list-group mb-[80px]">
        {stores.map((store, index) => (
          <Card item={store} key={store.id}></Card>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
