import logo from './logo.svg';
import './App.css';
import './components/NavBar.js';
import NavBar from './components/NavBar.js';
import Test from './components/Test.js';
import './components/Test.js';
import ItemListContainer from './components/ItemListContainer';


function App() {

  const apellido='Alvarez';
  console.log("se ejecuta app.js");
  
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <Test nombre='javier' apellido = { apellido } />   
    </div>
  );
};

export default App;

