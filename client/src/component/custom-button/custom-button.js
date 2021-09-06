import React from 'react';
import './custom-button.scss';


const CustomButton= ({children,isGoogleSignIn,inverted,...otherProps}) =>{
  return(
 <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
     {children}

 </button>
  );
};

/* import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
); */
export default CustomButton;