import React from 'react';
import CheckoutDetails from '../components/checkoutpage.js/CheckoutDetails';
import CheckoutHeader from '../components/checkoutpage.js/CheckoutHeader';

const checkout = () => {
    return (
        <div>
            <CheckoutHeader />
            <CheckoutDetails />
        </div>
    );
};

export default checkout;