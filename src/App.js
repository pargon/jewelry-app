import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from './components/ItemCount';
import {useState} from 'react';


function App() {

  const [valueCart, setValueCart] = useState();

  const onAdd = (qtyReq)=>{
    setValueCart(qtyReq);
  };

  return (
    <>
    <NavBar qtyReq={valueCart} />   
    
    <main className="mainGreeting">
    <ItemListContainer greeting={"Welcome to Jewelry"}/>
    <ItemDetailContainer greeting={"Welcome2 to Jewelry"}/>
    </main> 
    <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  );
}

export default App;