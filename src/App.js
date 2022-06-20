import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCount from "./components/ItemCount";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./context/CartContext";

function App() {
  const [valueCart, setValueCart] = useState();
  const onAdd = (qtyReq) => {
    setValueCart(qtyReq);
  };

  return (
    <>
    <CartContext>
      <BrowserRouter>
        <NavBar qtyReq={valueCart} />{" "}
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Welcome to Jewelry"} />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer greeting={"Welcome to Jewelry"} />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>{" "}
      </BrowserRouter>{" "}
      {/* <ItemCount initial={1} stock={10} onAdd={onAdd} />{" "} */}
    </CartContext>
    </>
  );
}

export default App;