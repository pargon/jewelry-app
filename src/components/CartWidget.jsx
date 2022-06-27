import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { BsCart2 } from "react-icons/bs";

function CartWidget() {
  const { getItemsQty } = useContext(CartContext);
  const items = getItemsQty();

  return (
    <>
        <Link to={"cart"} className="link-dark" style={{ textDecoration: 'none' }}>
          <h5><BsCart2 />{`(${items})`}</h5>
        </Link>
    </>
  );
}

export default CartWidget;
