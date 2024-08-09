import React from 'react'
import './App.css';
import Nav from './component/navbar/Nav'
import Hero from './component/Hero/Hero'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="mens" />} />
        <Route path="women" element={<ShopCategory category="women" />} />
        <Route path="kids" element={<ShopCategory category="kids" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":ProductId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
