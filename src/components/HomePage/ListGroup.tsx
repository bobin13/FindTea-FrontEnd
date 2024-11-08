import { useState } from "react";
import Card from "./Card";

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

interface Props {
  stores: Store[];
}

function ListGroup({ stores }: Props) {
  return (
    <>
      <ul className="list-group">
        {stores.map((store, index) => (
          <Card item={store} key={store._id.pid}></Card>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
