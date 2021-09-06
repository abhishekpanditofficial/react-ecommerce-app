import React from 'react';
import './cart-dropdown.scss';
import CustomButton  from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import {connect} from 'react-redux';
import { withRouter  } from 'react-router-dom';
import { selectCartItems } from '../../reducer/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartDropdown } from '../../reducer/cart/cart.actions';


const CartDropdown =({cartItems,history,dispatch})=>{
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.length ? (
        cartItems.map(cartItem => {
            return(
        <CartItem id={cartItem.id} item={cartItem}/>
            );
   
        })) : 
        (
            <span className='empty-message'>Your cart is empty</span>
        )
            }
    </div>
    <CustomButton onClick={()=> {
        history.push('/checkout');
        dispatch(toggleCartDropdown())
    }}>GO TO CHECKOUT</CustomButton>
            
        </div>
    );
};

const mapStateToProps= createStructuredSelector({
  cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));