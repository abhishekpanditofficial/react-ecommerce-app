import React,{useState} from 'react';
import './feedback.scss';
import FormInput from '../../component/form-input/form-input';
import {Spinner2} from '../../component/with-spinner/spinner';
import CustomButton from '../../component/custom-button/custom-button';

const FeedbackPage= () =>{
    const[showSpinner,setShowSpinner]=useState(false);
    const[feedback,setFeedback]=useState('');
    const[feedbackText,setFeedbackText]= useState(false);

    const feedbackUpload= async (feedback)=>{
        
        const response= await  fetch(`https://orders-6e64d.firebaseio.com/feedback.json`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
               
               feedback
              })
        });
        
        const resData= await response.json();
        if(resData) {
            handleFeedback();
            setFeedbackText(true);
          
        }

    
    };

    const handleSubmit = async event => {
        event.preventDefault();
          feedbackUpload(feedback);
        handleFeedback();
      };
    
      const handleChange = event => {
        const { value } = event.target;
    
        setFeedback(value);
        setFeedbackText(false);

      };
  
      const handleFeedback=()=>{
        setShowSpinner(prevState =>!prevState);
      };

    return (
  <div className='feedbackPage'>
      <div className='feedbackPage__title'>Feedback To Feedforward</div>
    <div className='feedbackPage__container'>
        <div className='feedbackPage__container__des'>
        Agar aapko lagta hai there's a Pricing issue relating to any product or if you want to give us some advice or compliment. Write it down here in any Language you prefer.
<span>We are because You are!</span>
        </div>
        <form onSubmit={handleSubmit}>
            <FormInput name='feedback'  label='Feedback/Report' type='text' value={feedback}  handleChange={handleChange} required />
           {feedbackText ? (
               <div className='feedbackPage__container__successText'>Your Feedback/Report Was Submitted!</div>
           ) : (
''
           )} 
            <div className='feedbackPage__container__buttons'>
                        {showSpinner ? (
                            <Spinner2 />
                        ) : (
                        <CustomButton type='submit' >SUBMIT</CustomButton>
                        )}
                </div>
            
        </form>
   </div> 
  </div>
    );
};



export default FeedbackPage;