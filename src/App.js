// src/App.js
import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FeedbackForm from './components/FeedbackForm';
import Menu from './pages/Menu';
import OrderCustomization from './pages/OrderCustomization';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);

    const onAddToCart = (cake) => {
        setCart((prevCart) => [...prevCart, cake]);
        alert(`${cake.name} has been added to your cart!`);
    };

    const onRemoveFromCart = (cakeId) => {
        setCart((prevCart) => prevCart.filter(cake => cake.id !== cakeId));
        alert(`Cake has been removed from your cart!`); 
    };

    return (
        <Router>
            <Header />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<LandingPage onAddToCart={onAddToCart} />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart cartItems={cart} onRemoveFromCart={onRemoveFromCart} />} />
                    <Route path="/order-customization" element={<OrderCustomization />} />
                    <Route path="/FeedbackForm" element={<FeedbackForm />} /> 
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;