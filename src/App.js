import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [valueCart, setValueCart] = useState();
  const onAdd = (qtyReq) => {
    setValueCart(qtyReq);
  };

  return (
    <>
      <main className="mainGreeting">
        <ItemListContainer greeting={"Welcome to Jewelry"} />{" "}
        <ItemDetailContainer greeting={"Welcome2 to Jewelry"} />{" "}
      </main>{" "}
      <ItemCount initial={1} stock={10} onAdd={onAdd} />{" "}
      <BrowserRouter>
        <NavBar qtyReq={valueCart} />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Welcome to Jewelry"} />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer greeting={"Catalog"} />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />{" "}
        </Routes>{" "}
        <ItemCount initial={1} stock={10} onAdd={onAdd} />{" "}
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
