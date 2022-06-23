import { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);

  const onAdd = () => {
    alert("Cant. Prd " + quantity);
    addItem(item, quantity);
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>Price: {item.price}</Card.Text>
          <ItemCount
            quantity={quantity}
            setQuantity={setQuantity}
            stock={item.stock}
            onAdd={onAdd}
          ></ItemCount>
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemDetail;
