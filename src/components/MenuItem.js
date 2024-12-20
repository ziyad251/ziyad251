// src/components/MenuItem.js
import React from 'react';

const MenuItem = ({ item, onAddToCart }) => {
    return (
        <div className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="cake-price">${item.price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(item)}>Add to Cart</button>
        </div>
    );
};

export default MenuItem;