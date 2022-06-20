import { createContext } from "react";

export const CardContext = createContext({});

function CartContext({ children }) {
  return (
    <>
      <CardContext.Provider value={{ title: "algo", desc: "hola" }}>
        <div>{children}</div>
      </CardContext.Provider>
    </>
  );
}

export default CartContext;
