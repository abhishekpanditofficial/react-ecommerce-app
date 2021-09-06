import React,{useState} from 'react';
import './sign-up.scss';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signUpStart } from '../../reducer/user/user.actions';
import {Spinner2} from '../with-spinner/spinner';

const SignUp = ({ signUpStart }) => {
  const[showSpinner,setShowSpinner]=useState(false);
    const [userCredentials, setUserCredentials] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      address: ''
    });
  
    const { displayName, email, password, confirmPassword,phone,address } = userCredentials;
  
    const handleSubmit = async event => {
      event.preventDefault();
  
      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }
  
      signUpStart({ displayName, email, password ,phone,address});
      handleSignUp();
    };
  
    const handleChange = event => {
      const { name, value } = event.target;
  
      setUserCredentials({ ...userCredentials, [name]: value });
    };

    const handleSignUp=()=>{
      setShowSpinner(prevState => !prevState);
    }
  
    return (
     <div className='sign-up'>
         <h2>Register to get <span className='h2Changer'>Exciting Offers!</span></h2>
         <span>Register with your email</span>
         <form  className='sign-up-form' onSubmit={handleSubmit}>

         <FormInput name='displayName'  label='Enter Your Name' type='text' value={displayName}  
         handleChange={handleChange} required />

         <FormInput name='email'  label='Email' type='email' value={email}  
         handleChange={handleChange} required />

       <FormInput name='phone'  label='Phone' type='number' value={phone}  
         handleChange={handleChange} required />
  
       <FormInput name='address'  label='Address' type='text' value={address}  
         handleChange={handleChange} required />
            
          <FormInput name='password'  label='Password' type='password' value={password}  
         handleChange={handleChange} required /> 

          <FormInput name='confirmPassword'  label='Confirm Password' type='password' value={confirmPassword}  
         handleChange={handleChange} required />
      
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
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(SignUp);