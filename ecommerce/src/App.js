import './App.css';
import './components/NavBar.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import CartContext from './contexts/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';

function App() {

  const [cart, setCart] = useState([]);
  const [qnt, setQnt] = useState(0);
  const lastNameVar ='Alvarez';

  return (
    <BrowserRouter>
      <div className="App">
        <CartContext.Provider value={{ cart, setCart, qnt, setQnt }}>
          <NavBar/>
          <Routes>
            <Route path='/item/:detailId' element={<ItemDetailContainer greeting='soy ItemDetailContainer'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer category =' soy category' />}/>
            <Route path='/cart' element ={<Cart/> }/>
            <Route path='/checkout' element ={<Checkout/> }/>
            <Route path='/' element={<ItemListContainer category='all'/>}/>
            <Route path='/*' element={<Navigate to = '/' replace />}/>
          </Routes>
          <Footer name = 'javier' lastName = { lastNameVar } />
        </CartContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;

