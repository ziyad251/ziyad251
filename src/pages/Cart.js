import React from 'react';
import PropTypes from 'prop-types'; 

const Cart = ({ cartItems = [], onRemoveFromCart }) => { 
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cartItems.length === 0 ? ( 
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>${item.price.toFixed(2)}</p>
                            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <button>Checkout</button>
        </div>
    );
};


Cart.propTypes = {
    cartItems: PropTypes.array,
    onRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;