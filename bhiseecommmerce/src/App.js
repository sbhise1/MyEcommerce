import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProvider from './Context/Context';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import AllProducts from './Pages/AllProducts';
import Tshirts from './Pages/Tshirts';
import About from './Pages/About';
import Contact from './Pages/Contact';
import MyAccount from './Pages/MyAccount';
import Cart from './Pages/Cart';
import SingleProduct from './Components/SingleProduct/Singleproduct';
import Mugs from './Pages/Mugs';

function App() {
  return (
    <Router>
      <MyProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/tshirts" element={<Tshirts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/jewelery" element={<Mugs />}>
          </Route>
        </Routes>
        <Footer />
      </MyProvider>
    </Router>
  );
}

export default App;
