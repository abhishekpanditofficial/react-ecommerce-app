import React,{useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout';
import AccountPage from './pages/account/account';
import InfoPage from './pages/info/info';
import Covid from './pages/covid/covid';
import FeedbackPage from './pages/feedback/feedback';
import ContestPage from './pages/contest/contest';
import Participant from './pages/participant/participant';


import Header from './component/header/header';

import { selectCurrentCity } from './reducer/category/category.selectors';
import { selectCurrentUser } from './reducer/user/user.selectors';
/* import { addCollectionAndDocuments } from './firebase/firebase.utils';
import { selectCollectionsForPreview } from './reducer/shop/shop.selectors';
 */
import { checkUserSession } from './reducer/user/user.actions';

const App = ({ checkUserSession, currentUser,city }) => {
  
  useEffect(() => {
    checkUserSession();
 
    
  }, [checkUserSession]);




  return (
      <div>
        <Header /* currentUser={this.state.currentUser} *//>
        <Switch>
        <Route exact path='/' component={HomePage}/> 
        {city==='none' ? (
      <Route path='/shop' render={()=> city==='none' ? (<Redirect to='/'/>) : (<ShopPage />)}/>
        ) : (
      <Route path='/shop' component={ShopPage}/> 
        )}
         
    {/*  <Route exact path='/info' render={()=> city==='none' ? (<Redirect to='/'/>) : (<InfoPage />)}/>  */}
     <Route exact path='/feedback' render={()=> city==='none' ? (<Redirect to='/'/>) : (<FeedbackPage />)}/> 
    {/*  <Route  exact path='/contest' render={()=> city==='none' ? (<Redirect to='/'/>) : (<ContestPage />)}/> 
     <Route path='/contest/:participantId' component={Participant}/>  */}
        <Route exact path='/sign-in-and-sign-up' render={()=> currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp />)} />  
        <Route exact path='/account' render={()=> !currentUser ? (<Redirect to='/'/>) : (<AccountPage />)} />  
       <Route exact path='/checkout' render={()=> city==='none' ? (<Redirect to='/'/>) : (<CheckoutPage />)}/> 
       <Route exact path='/covid' render={()=> city==='none' ? (<Redirect to='/'/>) : (<Covid />)}/> 
       </Switch>
       
      </div>
    );
  
 
  };

  const mapStateToProps= createStructuredSelector({
    currentUser: selectCurrentUser,
    city: selectCurrentCity
    
    /* ,
    collectionArray: selectCollectionsForPreview */
  });

  const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
  });
export default connect(mapStateToProps,mapDispatchToProps)(App);
