import React,{ useState } from 'react';
import './sign-in.scss';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {Spinner2} from '../with-spinner/spinner';

import {
    googleSignInStart,
    emailSignInStart
  } from '../../reducer/user/user.actions';


  const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const[showSpinner,setShowSpinner]=useState(false);
    const [userCredentials, setCredentials] = useState({
      email: '',
      password: ''
    });
  
    const { email, password } = userCredentials;
  
    const handleSubmit = async event => {
      event.preventDefault();
  
      emailSignInStart(email, password);
      handleSignIn();
    };
  
    const handleChange = event => {
      const { value, name } = event.target;
  
      setCredentials({ ...userCredentials, [name]: value });
    };

    const handleSignIn=()=>{
      setShowSpinner(prevState =>!prevState);
    };
  
    return (
   <div className='sign-in'>
   <h2>To get discounts,<span className='h2Changer'>Login Now!</span> </h2>
   <span>Login to <span className='h2Changer'>Track Orders</span></span>

   <form onSubmit={handleSubmit}>
       <FormInput name='email'  label='Email' type='email' value={email}  handleChange={handleChange} required />
       
       <FormInput name='password' label='Password' type='password' value={password}  handleChange={handleChange} required />
    
      <div className='buttons'>
   {showSpinner ? (
    <Spinner2 />
   ) : (
<CustomButton type='submit' >Sign In</CustomButton>
   )}
      
   
      </div>
       
   </form>
   </div>
        );
    };


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password }))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(SignIn);