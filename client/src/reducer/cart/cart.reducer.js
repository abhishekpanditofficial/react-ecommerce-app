import CartActionsTypes from './cart.types';
import CategoryActionsTypes from './../category/category.types';
import { addItemToCart,removeItemFromCart } from './cart.utils';
const INITIAL_STATE={
    hidden: true,
    cartItems: []
};


const cartReducer= (state= INITIAL_STATE,action)=>{
  switch(action.type){
    case CartActionsTypes.TOGGLE_CART_HIDDEN:
        return{
            ...state,
            hidden: !state.hidden
        };  

    case CartActionsTypes.ADD_ITEM:
        return{
            ...state,
            cartItems: addItemToCart(state.cartItems,action.payload)
        };
    case CartActionsTypes.CLEAR_ITEM_FROM_CART:
        return{
   ...state,
   cartItems: state.cartItems.filter(cartItem => cartItem.name !== action.payload.name)
        };
    case CartActionsTypes.REMOVE_ITEM:
        return{
            ...state,
            cartItems: removeItemFromCart(state.cartItems,action.payload)
        }
    case CartActionsTypes.CLEAR_CART:
            return {
              ...state,
              cartItems: []
            };
    case CategoryActionsTypes.UPDATE_CURRENT_CITY:
        return {
            ...state,
            cartItems: []
          };
    default:
      return state;
  }
};


export default cartReducer;