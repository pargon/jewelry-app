import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

function MyProvider({ children }) {
  const [cart, setCart] = useState([]);
console.log('entra');

  const addItem = (item, quantity) => {
    const index = isInCart(item);

    if (index === -1) {
      // no existe, agrega al final
      const newItem = { ...item, quantity };
      setCart([...cart, newItem]);
    } else {
      // existe, suma cantidad
      const newQty = cart[index].quantity + quantity;
      localStorage.setItem("cart", JSON.stringify(cart));

      if (newQty > item.stock) {
        alert("Max Stock Over");
      } else {
        cart[index].quantity = newQty;
        setCart(cart);
      }
    }
  };

  const removeItem = (itemId) => {
    setCart(
      cart.filter((ele) => {
        return ele.id !== itemId;
      })
    );
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (item) => {
    const c = cart.findIndex((ele) => ele.id === item.id);
    return c;
  };

  const getItemsQty = () => {
    const sum = cart.reduce((accumulator, object) => {
      return accumulator + object.quantity;
    }, 0);
    return sum;
  };

  const getTotal = () => {
    const sum = cart.reduce((accumulator, object) => {
      return accumulator + object.quantity * object.price;
    }, 0);
    return sum;
  };

  // console.log("getitem:" + JSON.parse(localStorage.getItem("cart")));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("setitem:" + JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart,
        getItemsQty,
        cart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default MyProvider;
