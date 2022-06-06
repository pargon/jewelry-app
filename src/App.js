import './App.css';
import RBsNavBar from './components/RBsNavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import {useState} from 'react';

function App() {

  const [valueCart, setValueCart] = useState();

  const onAdd = (qtyReq)=>{
    setValueCart(qtyReq);
  };

  return (
    <>
    <RBsNavBar qtyReq={valueCart} />   
    <main className="mainGreeting">
    <ItemListContainer greeting={"Welcome to Jewelry"}/>
    </main> 
    <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  );
}

export default App;