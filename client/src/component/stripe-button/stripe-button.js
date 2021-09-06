import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) =>{
  const priceForStripe= price*100;
  const publishableKey= 'pk_test_SapSGt80JGjnB1gqaGSTVJHd00TrOQeyXf';

  const onToken = token => {
    axios({
      url: 'http://localhost:5000/payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token: token,
        description: "Just A Payment Test"
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
      

  };
  return(
  <StripeCheckout
  label='Pay Now'
  name='Abhishek Clothing Ltd'
  billingAddress
  shippingAddress
  image='https://svgshare.com/i/CUz.svg'
  description={`Your Total is $${price}`}
  amount={priceForStripe}
  panelLabel='Pay Now'
  token={onToken}
  stripeKey={publishableKey} 
  
  />
  );

};


export default StripeCheckoutButton;