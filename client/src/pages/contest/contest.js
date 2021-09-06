import React,{useState} from 'react';
import './contest.scss';
import FormInput from '../../component/form-input/form-input';
import {Spinner2} from '../../component/with-spinner/spinner';
import CustomButton from '../../component/custom-button/custom-button';
import FileUploader from 'react-firebase-file-uploader';
import firebase from './../../firebase/firebase.utils';
import 'firebase/storage';
import { Redirect } from 'react-router-dom';


 

const ContestPage= ({match}) =>{
    const[showSpinner,setShowSpinner]=useState(false);
   const [showImage,setShowImage]=useState(true);

   const [image,setImage]= useState('');
   const [imageUrl,setImageUrl]= useState('blank');
   const [progress,setProgress]= useState(1);
   const[check,setCheck]=useState(false);

    const [userDetails, setuserDetails] = useState({
        name: '',
        billid: '',
        message: '',
        phone:''
      });

    const[contestText,setContestText]= useState(false);

    const contestUpload= async (name,billid,ukey)=>{
        const response= await  fetch(`https://contest-32ef1.firebaseio.com/models/${billid}.json`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
               
              name,
              billid,
              imageUrl,
              phone,
              message,
              like: 0
              })
        });
        const resData= await response.json();
        if(resData) {
           
            setCheck(true);
        }

};

const billUpdate= async (name,billid,ukey)=>{
    const response= await  fetch(`https://contest-32ef1.firebaseio.com/bills/${billid}/${ukey}.json`,{
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
           
        active: 1
          })
    });
    
    if(response) {
       contestUpload(name,billid);
    }

};
 
const billcheck= async (name,billid,phone,message)=>{
    const response= await  fetch(`https://contest-32ef1.firebaseio.com/bills/${billid}.json`);
    if(!response.ok){
        throw new Error('Something Went Wrong!');
    }
    const resData= await response.json();
    if(resData) {
       let billactive= 1;
       let ukey='key';
        for(const key in resData){
          ukey= key;
          billactive= resData[key].active;
        }
       if(billactive===0){
            billUpdate(name,billid,ukey);
        }else{
            setContestText(true);
            handleContest();
        }
      
        }
    };



    const { name, billid,phone,message}= userDetails;

    const handleSubmit = async event => {
        event.preventDefault();
          billcheck(name,billid,phone,message);
        handleContest();
      };
    
      const handleChange = event => {
        const { value, name } = event.target;
  
      setuserDetails({ ...userDetails, [name]: value });
        setContestText(false);

      };
  
      const handleContest=()=>{
        setShowSpinner(prevState =>!prevState);
      };

      const handleUploadStart=()=>{
    setProgress(0);
      };

      const handleUploadSuccess= (filename) =>{
        setImage(filename);
        setProgress(100);
     
        firebase.storage().ref('models').child(filename).getDownloadURL()
        .then(url => setImageUrl(url)).then(setShowImage(false));

         
        
      };

     

    return (
  <div className='feedbackPage'>
      <div className='feedbackPage__title'>Contest</div>
    <div className='feedbackPage__container'>
        
        {showImage ? (
       <div>
           {progress===0 ? (
               <div>
                  Please Wait We are Uploading Your image
                  <Spinner2/>
                   </div>
           ) : (
    <div className='contest'>
        <div className='contest__text'>Your support means a lot to me. Share this Post as much as you can and help me WIN this one.</div>
        <label className='contest__label'>   
        
   <FileUploader
   className='contest__button'
   accept="image/*"
   randomizeFilename
   name="image"
   storageRef={firebase.storage().ref("models")}
   onUploadStart={handleUploadStart}
   onUploadSuccess={handleUploadSuccess}
  />
  </label>
  </div>
           )}
       
      </div>
        ) : (
            
            <form onSubmit={handleSubmit}>
                {check ? (
                    <Redirect to={`/contest/${userDetails.billid}`}/>
                ) : (
                    ''
                )}
                <img src={imageUrl} className='feedbackPage__container__image' />
            <FormInput name='name'  label='Your Name' type='text' value={userDetails.name}  handleChange={handleChange} required />
            <FormInput name='billid'  label='Your Bill Id' type='text' value={userDetails.billid}  handleChange={handleChange} required />
            <FormInput name='phone'  label='Your Phone Number' type='text' value={userDetails.phone}  handleChange={handleChange} required />
            <FormInput name='message'  label='Message For Visitors' type='text' value={userDetails.message}  handleChange={handleChange} required />
           {contestText ? (
               <div className='feedbackPage__container__successText'>Error Bill Id or Bill Id In Use</div>
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
        )}
        
   </div> 
   
  </div>
 
    );
};



export default ContestPage;