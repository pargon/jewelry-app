import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart";

import FirebaseQuery from "./firebase/FirebaseQuery";

function App() {
  return (
    <>
      <p>entrando</p>
      <FirebaseQuery></FirebaseQuery>

      {/* <BrowserRouter>
        <CartContext>
          <NavBar />{" "} 
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
            <Route path="/cart" element={<Cart />} />
          </Routes>{" "}
        </CartContext>
      </BrowserRouter>{" "} */}
    </>
  );
}

export default App;
