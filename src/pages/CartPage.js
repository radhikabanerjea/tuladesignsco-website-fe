import React from 'react';

//import ShoppingCartItem from './Small_Components/ShoppingCartItem';

const cartStyles = {

    ShoppingCartStyle: {
        display : 'flex',
        //fontSize : '15px',
        alignItems : 'center',
        width : '90%',
        marginLeft: '30px'

    },

    ShoppingCartTitle: {
        textDecoration: 'none',
        display : 'flex',
        fontSize : '15px',
        alignItems : 'center',
        color : 'black',
        width : '90%',
        marginLeft: '30px'
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

function CartPage() {
  return (

    <div style={cartStyles.ShoppingCartTitle}>
            <h1>Shopping Cart</h1>
            {/* <ShoppingCartItem/> */}
    </div>

  );
}

export default CartPage;