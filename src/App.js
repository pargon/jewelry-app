import './App.css';
import RBsNavBar from './components/RBsNavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <RBsNavBar />   
    <main className="mainGreeting">
    <ItemListContainer greeting={"Hola Mundo"}/>
    </main> 
    </>
  );
}

export default App;