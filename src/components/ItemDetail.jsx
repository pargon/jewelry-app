import { useState, useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);
  const onAdd = () => {
    addItem(item, quantity);
  };

  return (
    <>
      <Row className="d-flex justify-content-center my-4">
        <Col className='col-lg-2'>
          <Card className="text-center">
            <Card.Body>
              <Card.Img
                variant="top"
                src={item.pictureUrl}
                style={{ width: "8rem" }}
              />
              <Card.Title>{item.title}</Card.Title>
              <ItemCount
                quantity={quantity}
                setQuantity={setQuantity}
                stock={item.stock}
                onAdd={onAdd}
              ></ItemCount>
            </Card.Body>
          </Card>
        </Col>
        <Col className='h-100'>
          <Card>
            <Card.Body>
              <Card.Subtitle>{`Category: ${item.categoryDesc}`}</Card.Subtitle>
              <Card.Text className='mt-2' >{item.description}</Card.Text>
              <Card.Text>Price: {item.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ItemDetail;
