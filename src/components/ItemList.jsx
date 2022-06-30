import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../components/Item";

function ItemList({ items, category }) {
  return (
    <>
      {items &&
        items.map((item) => (
          <Card className="text-center" key={item.id}>
            <Item item={item} />
            <Card.Footer>
              <small className="text-muted">
                <Link to={ ((category)? "../item/": "item/") + item.id}>Item Detail</Link>
              </small>
            </Card.Footer>
          </Card>
        ))}
    </>
  );
}

export default ItemList;
