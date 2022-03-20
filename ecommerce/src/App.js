import logo from './logo.svg';
import './App.css';
import './components/NavBar.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import ItemListContainer from './components/ItemListContainer';
import SandBox from './components/SandBox.js';





function App() {

  const apellido='Alvarez';
  console.log("se ejecuta app.js");
  
  return (
    <div className="App">
      <NavBar/>
      <SandBox/>
      <ItemListContainer/>
      <Footer nombre='javier' apellido = { apellido } />

    </div>
  );
};

export default App;

