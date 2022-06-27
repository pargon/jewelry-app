import React from "react";
import { Card } from "react-bootstrap";
import Item from "../components/Item";

function ItemList({ items }) {
  return (
    <>
        {items &&
          items.map((item) => (
            <Card className="text-center" key={item.id}>
              <Item item={item} />
            </Card>
          ))}
    </>
  );
}

export default ItemList;
