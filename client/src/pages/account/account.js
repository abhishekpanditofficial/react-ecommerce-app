import React, { useEffect, useState } from 'react';
import './account.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../reducer/user/user.selectors';
import { signOutStart } from '../../reducer/user/user.actions';
import {Spinner} from '../../component/with-spinner/spinner';
import Order from '../../models/order';


const AccountPage = ({ currentUser ,signOutStart}) =>{
const[orders,setOrders]=useState([]);

useEffect(()=>{
    const fetchFunc= async () =>{
        try{
            const response= await  fetch(`https://orders-6e64d.firebaseio.com/userorders/${currentUser.id}.json`);
             
            if(!response.ok){
                throw new Error('Something Went Wrong!');
            }
            const resData= await response.json();
            const loadedOrders=[];
    
            for(const key in resData){
                loadedOrders.push(
                    new Order(
                  key,
                  resData[key].cartItems,
                  resData[key].totalAmount,
                  new Date(resData[key].date)
                ));
            }
       setOrders(loadedOrders);
        }catch(err){
     throw err;
        }
    };

    fetchFunc();


},[currentUser]);



    return(
        <div className='account'>
             <div className='account_signOut' onClick={signOutStart}>
          SIGN OUT
        </div>
              <div className='account__title'>MY ORDERS</div>
        {orders&&orders.length ? (
            <div className='account__containers'>

              

              {
                 orders.map(order =>(
                     <div className='account__containers__orders'>
                         <div className='account__containers__orders--date'>
                               {order.readableDate}
                             </div>

                             {
                                 order.items.map(item => (
                                     <div className='account__containers__orders__item'>
                                      
                                          <div>{item.name}</div>
                                          <div>{item.quantity} x</div>
                                          <div>&#8377;{item.price}</div>
                                        </div>
                                    
                                 ))
                             }

                          <div className='account__containers__orders--total'>
                              <span className='account__containers__orders--total__price'>&#8377;</span> {order.totalAmount}
                             </div>
              
                </div>
                 ))
             }      
    
    </div>
        ) : (
            <div className='orders-loading'>
              {/*  <Spinner/> */}

              We are currently processing your orders, it will be visible soon as we process it.
            </div>
        )}

   </div>
    );
};



const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });
  
  const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
  });
  
  export default connect(
   mapStateToProps,mapDispatchToProps
  )(AccountPage);

