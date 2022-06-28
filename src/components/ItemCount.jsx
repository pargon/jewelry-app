import { Card, Button, ButtonGroup } from "react-bootstrap";
import FinishBuy from "./FinishBuy";

function ItemCount({ quantity, setQuantity, stock, onAdd }) {
  const sum = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      alert(`Stock Max:${stock}`);
    }
  };

  const sub = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  let isFinish = true;

  const addValueCart = () => {
    if (quantity === 0) {
      alert("Must select one");
    } else {
      if (quantity <= stock) {
        setQuantity(quantity);
        isFinish = true;

        onAdd();
      } else {
        alert(`Not Stock Available`);
      }
    }
  };

  return (
    <>
      <Card.Text>Order Quantity: {quantity}</Card.Text>
      <ButtonGroup>
        <Button onClick={sum} variant="secondary">
          +
        </Button>
        <Button onClick={addValueCart} variant="secondary">
          Add Cart
        </Button>
        <Button onClick={sub} variant="secondary">
          -
        </Button>
      </ButtonGroup>
      <FinishBuy condition={isFinish}></FinishBuy>

    </>
  );
}

export default ItemCount;
