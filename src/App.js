import { BrowserRouter, Router, Routes, Route } from "react-router-dom";import  Cart  from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './context/CartContext';

function App() {
  return (
  <div className="App">
  <CartProvider >
    <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route path='/' exact element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' exact element={<ItemListContainer/>} />
        <Route path='/detail/:productId' exact element={<ItemDetailContainer  />} />
        <Route path='/cart' exact element={<Cart/>} />
        {/* <Route path='/checkout' element={<Checkout/>} /> */}
      </Routes> 
      <Footer/>
     </BrowserRouter>
  </CartProvider>
  </div>
  );
}

export default App;
