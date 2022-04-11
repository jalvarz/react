import logo from './logo.svg';
import './App.css';
import './components/NavBar.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import ItemDetail from './components/ItemDetail';
import ItemListContainer from './components/ItemListContainer';
import SandBox from './components/SandBox.js';
import { useState } from 'react';
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';

import CartContext from './contexts/CartContext';

import ItemDetailContainer from './components/ItemDetailContainer';



function App() {

  const [cart, setCart] = useState([]);
  const [qnt, setQnt] = useState(0);


  const apellido='Alvarez';
 // console.log("se ejecuta app.js");
  
  return (
    <BrowserRouter>
      <div className="App">
        <CartContext.Provider value={{ cart, setCart, qnt, setQnt }}>
          <NavBar/>
          <SandBox/>
          <Routes>
            <Route path='/item/:detalleId' element={<ItemDetailContainer greeting='soy ItemDetailContainer'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer category =' soy category' />}/>
            <Route path='/' element={<ItemListContainer greeting='soy ItemListContainer'/>}/>
            <Route path='/*' element={<Navigate to = '/' replace />}/>
          </Routes>
          <Footer nombre='javier' apellido = { apellido } />
        </CartContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;

