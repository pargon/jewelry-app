import React from "react";
import { CardGroup } from "react-bootstrap";
import Item from "../components/Item";

function ItemList({ items }) {
  
  return (
    <>
      <CardGroup> 
        {items &&
          items.map((item) => (
            <>
              <Item item={item} />
            </>
          ))}
      </CardGroup>
    </>
  );
}

export default ItemList;
