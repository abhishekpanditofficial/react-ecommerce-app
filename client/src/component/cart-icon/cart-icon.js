import React from 'react';
import './cart-icon.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../reducer/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg.svg';
import { selectCartItemsCount } from '../../reducer/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


const CartIcon =({ toggleCartDropdown,itemCount })=>{
 
return(
 <div className='cart-icon' onClick={toggleCartDropdown}>
     <ShoppingIcon className='shopping-icon'/>
     <span className='item-count'>{itemCount}</span>
 </div>
);

};

const mapDispatchToProps= dispatch =>({
  toggleCartDropdown: ()=> dispatch(toggleCartDropdown())
});

const mapStateToProps= createStructuredSelector({
   itemCount: selectCartItemsCount
});


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);