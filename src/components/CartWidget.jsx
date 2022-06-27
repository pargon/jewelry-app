import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { BsCart2 } from "react-icons/bs";

function CartWidget() {
  const { getItemsQty } = useContext(CartContext);
  const items = getItemsQty();

  return (
    <>
      <Button variant="black">
        <BsCart2 />
        <Link to={"cart"}>{`(${items})`}</Link>        
      </Button>
    </>
  );
}

export default CartWidget;
