import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

function MyProvider({ children }) {
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : []);

  const addItem = (item, quantity) => {
    const index = isInCart(item);
    let newQty = quantity;

    if (index !== -1) {
      // existe, suma cantidad
      newQty += cart[index].quantity;
      cart.splice(index, 1);
    }

    if (newQty > item.stock) {
      alert("Max Stock Over");
    } else {
      // agrega al final
      const newItem = { ...item, quantity: newQty };
      setCart([...cart, newItem]);
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
