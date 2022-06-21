import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [valueCart, setValueCart] = useState();

  return (
    <>
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
          <Route
            path="/item/:id"
            element={<ItemDetailContainer/>}
          />          
          <Route
            path="/cart"
            element={<ItemDetailContainer/>}
          />          
        </Routes>{" "}
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
