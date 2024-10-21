import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import AddToCartModel from './components/AddToCartModal';
import ThankYouPage from './components/pages/ThankYouPage';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [cartProducts, setCartProducts] = useState([]); // Initialize as an array
  const [showCart, setShowCart] = useState(false);

  const toggleCartModel = () => {
    setShowCart((prevState) => !prevState);
  };

  const addToCart = (product) => {
    setCartProducts((prevCart) => [...prevCart, product]); // Add the product to the cart array
    setShowCart(true);
  };

  const closeModal = () => {
    setShowCart(false);
  };
  const onDeleteItemCart = (index) => {
    setCartProducts((prevItems) => prevItems.filter((item ,i) => i !== index))
  }

  return (
    <Router>
      <Header toggleCartModel={toggleCartModel} />

      {showCart && (
        <AddToCartModel cartItems={cartProducts} onClose={closeModal} onDeleteItem={onDeleteItemCart} />
      )}

      <Routes>
        <Route path="/" element={<ProductCard addToCart={addToCart} />} />
        <Route path="/thank-you/:productName" element={<ThankYouPage />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;