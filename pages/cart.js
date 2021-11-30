import React from 'react';
import CartHeader from '../components/cartpage.js/CartHeader';
import CartItems from '../components/cartpage.js/CartItems';

const cart = () => {
    return (
        <div>
            <CartHeader />
            <CartItems />
        </div>
    );
};

export default cart;