import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { BsCart2 } from "react-icons/bs";

function CartWidget() {
  let items = 0;

  const { getItemsQty } = useContext(CartContext);
  items = getItemsQty();

  if (items > 0) {
    return (
      <>
        <Link
          to={"cart"}
          className="link-dark"
          style={{ textDecoration: "none" }}
        >
          <h5>
            <BsCart2 />
            {`(${items})`}
          </h5>
        </Link>
      </>
    );
  } else {
    return <></>;
  }
}

export default CartWidget;
