import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

function MyProvider({ children }) {
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : []);

  const addItem = (item, quantity) => {
    const index = isInCart(item);
    console.log("addItem " + quantity);

    if (index === -1) {
      // no existe, agrega al final
      const newItem = { ...item, quantity };
      setCart([...cart, newItem]);
    } else {
      // existe, suma cantidad
      const newQty = cart[index].quantity + quantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log("update " + JSON.stringify(cart));

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
    let itemIndex = -1;
    if (cart) {
      itemIndex = cart.findIndex((ele) => ele.id === item.id);
    }
    return itemIndex;
  };

  const getItemsQty = () => {
    let sum = 0;
    if (cart) {
      sum = cart.reduce((accumulator, object) => {
        return accumulator + object.quantity;
      }, 0);
    }
    return sum;
  };

  const getTotal = () => {
    let sum = 0;
    if (cart) {
      sum = cart.reduce((accumulator, object) => {
        return accumulator + object.quantity * object.price;
      }, 0);
    }
    return sum;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
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
