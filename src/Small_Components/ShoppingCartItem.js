import React from 'react';


 const styles = {

    cartItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        backgroundColor: 'white',
        height: '300px',
    },
    // cartItemInfo: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'space-between',
    //     alignItems: 'flex-start',
    //     padding: '0 10px',
    //     height: '100%',
    // },
    cartItemImg: {
        height: '100%',
    },
    cartItemName: {
        fontSize: '16px',
        padding: '0 10px',
    },
    cartItemPrice: {
        fontSize: '16px',
        padding: '0 10px',
    },
    cartItemRemove: {
        fontSize: '16px',
        padding: '0 10px',
    },
    cartItemAdd: {
        fontSize: '16px',
        padding: '0 10px',
    },
    cartItemSubtract: {
        fontSize: '16px',
        padding: '0 10px',
    },
    cartItemCount: {
        fontSize: '16px',
        padding: '0 10px',
    },

 }

 const ShoppingCartItem = () => {
    return (

        <div>style={styles.cartItem}
        
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <div> style={styles.cartItemImg}
                    <h2>Item Image</h2>
                </div>

                <div style={styles.cartItemName}>
                    <h1>Item Name</h1>
                </div>

                <div>style={styles.cartItemPrice}
                    <h3>Item Price</h3>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                
                    <div>style={styles.cartItemAdd}
                        <h4>+</h4>
                    </div>
                    
                    <div>style={styles.cartItemCount}
                        <h5>cartItemCount</h5>
                    </div>

                    <div>style={styles.cartItemSubtract}
                        <h6>-</h6>
                    </div>

                </div>

                <div>style={styles.cartItemPrice}
                    <h7>Item Total</h7>
                </div>

                <div>style={styles.cartItemRemove}
                    <h8>X</h8>
                </div>

            </div>

        </div>

    );
};
  
export default ShoppingCartItem;

