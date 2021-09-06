import React,{useState} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../component/checkout-item/checkout-item';

import CustomButton from '../../component/custom-button/custom-button';
import FormInput from '../../component/form-input/form-input';
import { clearCart } from '../../reducer/cart/cart.actions';
import { selectCurrentUser } from '../../reducer/user/user.selectors';
import {Spinner2} from '../../component/with-spinner/spinner';


import {
  selectCartItems,
  selectCartTotal
} from '../../reducer/cart/cart.selectors';

import './checkout.scss';
import { Link } from 'react-router-dom';

const CheckoutPage = ({ cartItems, total,clearCart,currentUser,orders }) => {
  const min = 1000;
const max = 100000;
const rand = min + Math.random() * (max - min);

const[showSpinner,setShowSpinner]=useState(false);
const[buttonText,setButtonText]=useState('Order');
const[popup,setPopup]=useState(false);
const[preset,setPreset]= useState(true);
const[presetText,setPresetText]= useState('Change details');

const [userCredentials, setCredentials] = useState({
  phone: '',
  address:  ''
});
const [ordered,setOrdered]= useState(false);
const [orderTotal,setOrderTotal]=useState(0);
const [checkLimit,setCheckLimit]= useState(false);
const [roundRand,setRoundRand]=useState(Math.round(rand));
const [ordercartItems,setOrderCartItems]=useState({});
const { phone, address } = userCredentials;



console.log(roundRand);






const handleCheckout=()=>{
  setShowSpinner(prevState =>!prevState);
}

const handleSubmit = async event => {
  event.preventDefault();
  
  const response= await  fetch(`https://orders-6e64d.firebaseio.com/orders.json`,{
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        phone,
        address,
        orderTotal,
        ordercartItems,
      })
});
const resData= await response.json();
if(resData) {
  setOrdered(true);
  
}

};

const generateBill = async () => {
  
  
  const response= await  fetch(`https://contest-32ef1.firebaseio.com/bills/${roundRand}.json`,{
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        billid: roundRand,
        active:0
      })
});
const resData= await response.json();
if(resData) {
 console.log(resData);
  
}

};

const userOrder = async (userOrderTotal,userOrderItems) => {
 
  const date= new Date();
  const response= await  fetch(`https://orders-6e64d.firebaseio.com/userorders/${currentUser.id}.json`,{
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        
        totalAmount:userOrderTotal,
        cartItems:userOrderItems,
        date: date.toISOString()   
      })
});

};


const orderTotalHandler= (ordertotal,orderItems)=>{

  setButtonText('Placing Your Order....');
  generateBill();
  setOrderTotal(ordertotal);
  setOrderCartItems(orderItems);
  clearCart();
  
}

const orderTotalHandler2= (ordertotal,orderItems)=>{
  
 setButtonText('Placing Your Order....');
 generateBill();
  setOrderTotal(ordertotal);
  setOrderCartItems(orderItems);
  userOrder(ordertotal,orderItems);
  setCredentials({
    phone: currentUser.phone,
    address: currentUser.address
  });

  clearCart();
 
}

const handleChange = event => {
  const { value, name } = event.target;

  setCredentials({ ...userCredentials, [name]: value });
};



const order= (total) =>{
  if(total < 200){
    setCheckLimit(true);
  }else{
    setPopup(true);
    setCheckLimit(false);
  }
};

 const presetHandler=()=>{
  setPreset(prevState => !prevState);
  setCredentials({
    phone: '',
    address: ''
  });
  if(presetText==='Change details'){
    setPresetText('Use default details');
  }else{
    setPresetText('Change details');
  }
};





return(
  <div className='checkout-page'>
     
       {popup ? (
    <div className='checkout-title'>Place-Order
    
    </div>
       ) : (
        <div className='checkout-title'>Cart-Items</div>
       )}
       
       {popup ?  (
         
      <div className='order-popup'>
     
      {!ordered ? (
      
<div>
   
      <form onSubmit={handleSubmit}>
 
      {currentUser ? (
        <div>
          {preset ? (
            <div>
              
           <FormInput name='phone'  label='Phone' type='text' value={currentUser.phone}  handleChange={handleChange} required />
      
           <FormInput name='address' label='Address(Near,building No./flat No.)' type='text' value={currentUser.address}  handleChange={handleChange} required />
           <div className='custom-button'>
            
<CustomButton type='submit' onClick={()=>orderTotalHandler2(total,cartItems)}>{buttonText}</CustomButton>
             
     
     </div>
        </div> 
          ): (
            <div>
            <FormInput name='phone'  label='Phone' type='text' value={phone}  handleChange={handleChange} required />
          
            <FormInput name='address' label='Address(Near,building No./flat No.)' type='text' value={address}  handleChange={handleChange} required />
            <div className='custom-button'>
           
<CustomButton type='submit' onClick={()=>orderTotalHandler(total,cartItems)}>{buttonText}</CustomButton>
             
     </div>
            </div>
          )}
           <div  className='presetText' onClick={()=>presetHandler()}>{presetText}</div> 
   
        </div>
      ) : (
        <div>
        <FormInput name='phone'  label='Phone' type='text' value={phone}  handleChange={handleChange} required />
    
        <FormInput name='address' label='Address(Near,building No./flat No.)' type='text' value={address}  handleChange={handleChange} required />
        <div className='custom-button'>
       
<CustomButton type='submit' onClick={()=>orderTotalHandler(total,cartItems)}>{buttonText}</CustomButton>
             
     </div>
        </div>
      )}

     
   
     
  </form>
  </div>
      )
    : (<div className='success-box'>
     <div className='success-box__header'>Ordered !</div>
     <div className='success-box__detail'>Expect Us in less than 2 hours into your door</div>
     <div className='success-box__price'>&#8377;{orderTotal}
     <div className='success-box__price--text'>Keep Your Cash Ready</div>
      <div className='success-box__price--text'>BILL ID- {roundRand}</div>
     </div>
   
    </div>)}
   <div className='bottom-skew'>Enjoy Contact-less delivery</div>
   <div className='back-arrow' onClick={()=>setPopup(false)}>&#8672;</div>
   <div className='back-to-cart-text' onClick={()=>setPopup(false)}>Back To Cart</div>
 </div>
    ) : (<div></div>)}

  
   {!popup ? (
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
   ): (
  <div></div>
   )}
      <div className='endText'>[Currently Not Accepting Orders]</div>
    {!popup ? cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    )) : ''}
     {checkLimit ? (
 <div className='alert-text'> You Have To Shop For Atleast &#8377;200  {/* Delivery Closed!, Check Again Tommorow */}</div>
   ): (
<div></div>
   )} 
   {!popup ? (
 <div className='total'>TOTAL <span className='total__price'>&#8377;{total}</span> </div>
   ): (
<div></div>
   )} 
   

  {!popup ? (
  <div className='cbutton-container'> <CustomButton className='custom-button' onClick={()=>order(total)}>Place Order</CustomButton></div>
  ): (
  <div> </div> 
  )} 
   
 
  <Link to='/feedback' className='feedbackText'>Feedback/Report &rarr;</Link>
   
  </div>
);
    };
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrentUser

});

const mapDispatchToProps = dispatch => ({
  
  clearCart: ()=> dispatch(clearCart())
});

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);