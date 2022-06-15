import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import Item from "../components/Item";

function ItemList({ items }) {
  return (
    <>
      <CardGroup>
        {items &&
          items.map((item) => (
            <Card key={item.id} style={{ width: "18rem" }}>
              <Item item={item} />
            </Card>
          ))}
      </CardGroup>
    </>
  );
}

export default ItemList;
