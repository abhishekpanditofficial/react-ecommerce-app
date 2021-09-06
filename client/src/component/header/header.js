import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../reducer/cart/cart.selectors';
import { selectCurrentUser } from '../../reducer/user/user.selectors';


import { ReactComponent as Logo } from '../../assets/crown.svg.svg';

import './header.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
   
    <Link className='logo-container' to='/'>
    <img src="https://i.ibb.co/zmY7Zbx/food-ballddd-removebg-preview.png" className='logo-container__logo' ></img>
      
    </Link>
    <div className='logo-text'>
  {/*   FoodStore */}
    </div>
    
    <div className='options'>
    {currentUser ? (
        <Link className='option' to='/account'>
        My Account
      </Link>
        
      ) : (
        <Link className='option' to='/sign-in-and-sign-up'>
          SIGN IN
        </Link>
      )}
    
     {/*  <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      */}
      <CartIcon />
      
    </div>
    {hidden ? null : <CartDropdown />}
    </div>

    
  
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);