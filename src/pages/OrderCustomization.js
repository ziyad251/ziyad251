import React from 'react';

const OrderCustomization = ({ item, onAddToCart }) => {
    return (
        <div>
            <h2>Customize Your Order</h2>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
           
            <button onClick={() => onAddToCart(item)}>Add to Cart</button>
        </div>
    );
};

export default OrderCustomization;