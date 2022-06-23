import { createContext, useState } from "react";
export const MyContext = createContext({});

function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {

    const index = isInCart(item)
    if (index === -1) {
      // existe, suma cantidad
      cart[index].quantity += quantity;
      setCart(cart);
    }else{
      // no existe, agrega al final
      const newItem = [...item, quantity]
      setCart([...cart], newItem);
    }
  };

  const removeItem = (itemId) => {
    setCart(
      cart.filter((ele) => {
        return ele.item.id !== itemId;
      })
    );
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (item) => {
    return cart.some((ele) => ele.item.id === item.id);
  };
  return (
    <>
      <MyContext.Provider value={{addItem, removeItem, clear}}>
        {children}
      </MyContext.Provider>
    </>
  );
}

export default CartContext;
