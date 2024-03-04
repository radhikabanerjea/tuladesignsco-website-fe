import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';

const cartStyles = {

    ShoppingCartStyle: {
        display : 'flex',
        flexDirection : 'column',
        fontSize : '20px',
        alignItems : 'center',
        width : '90%',
        marginLeft: '30px'

    },

    ShoppingCartTitle: {
        fontSize : '20px',
        fontWeight : 'bold',
        color : 'black',
        marginBottom : '20px'
    },

    CheckoutButton: {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#FFCECE', /* Change the background color as needed */
        color: '#FFEFEF', /* Change the text color as needed */
        border: 'none',
        borderRadius: '20px', /* Adjust the border radius to make the button more or less rounded */
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '16px',
    }

}

const ShoppingCart = () => {
    return (
        <div style={ShoppingCartStyle}>
            <h1>Shopping Cart</h1>
            <ShoppingCartItem/>
        </div>
    );
}