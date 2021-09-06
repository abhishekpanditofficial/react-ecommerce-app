import React,{useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './sign-in-and-sign-up.scss';
import SignIn from '../../component/sign-in/sign-in';
import SignUp from '../../component/sign-up/sign-up';
import { selectError,selectCurrentUser } from './../../reducer/user/user.selectors';

const SignInAndSignUp= ({error}) =>{
  const[checkComponent,setCheckComponent]= useState(true);
  const[componentText,setComponentText]=useState(`Don't have a account? Register Now`);
  const componentChangeHandler=()=>{
    setCheckComponent(prevState => !prevState);
    if(componentText===`Don't have a account? Register Now`){
      setComponentText(`Have a account ? Login Now`);
    }else{
      setComponentText(`Don't have a account? Register Now`);
    }
    
  };
  return(
 <div className='sign-in-and-sign-up'> 
 
   <div className={`signinComp ${checkComponent  ? 'active' : ''}`}><SignIn /></div>
 <div className={`signupComp  ${!checkComponent  ? 'active' : ''}`}><SignUp /></div>

<div className='checkComponentChange' onClick={()=>componentChangeHandler()}>{componentText}</div>

 </div>
  );
};




const mapStateToProps = createStructuredSelector({
  error: selectError
});

export default connect(mapStateToProps)(SignInAndSignUp);



