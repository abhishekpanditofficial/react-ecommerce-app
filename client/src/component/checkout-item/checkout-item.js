import React from 'react';

import './checkout-item.scss';
import { connect } from 'react-redux';
import {
    clearItemFromCart,
    addItem,
    removeItem
  } from '../../reducer/cart/cart.actions';

const CheckoutItem = ({  cartItem, clearItem, addItem, removeItem  }) => {
    const { name, imageUrl, price, quantity,discount,mrp }= cartItem;
    return(
  <div className='checkout-item'>
    
    <div className='image-container'>
     
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}
    
   {discount ? (
      <div className='discount-container'>
      <div className={`discount-container__discount discount-container__discount--${discount>10 ? 'dplus' : 'dminus'}`}>{discount}{discount ? '% OFF' : ''}</div>
        
      </div>
   ): ('')}
      
    </span>
   
    <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
        &#8722;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
        &#43;
        </div>
      </span>
    <span className='price'>&#8377;{price}</span>
    <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
  </div>
);

};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
  });

export default connect(null,mapDispatchToProps)(CheckoutItem);