import { createContext, useState } from "react";
export const CartContext = createContext();

function MyProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const index = isInCart(item);
    if (index === -1) {
      // no existe, agrega al final
      const newItem = { ...item, quantity };
      setCart([...cart, newItem]);
    } else {
      // existe, suma cantidad
      const newQty = cart[index].quantity + quantity;

      if (newQty > item.stock) {
        alert("Max Stock Over");
      } else {
        cart[index].quantity = newQty;
        setCart(cart);
      }
    }
    console.log(cart);
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
    console.log(c);
    return c;
  };

  const getItemsQty = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, clear, isInCart, getItemsQty, cart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default MyProvider;
