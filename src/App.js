import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./context/CartContext";

function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar qtyReq={0} />{" "}
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
      </CartContext>
    </>
  );
}

export default App;
