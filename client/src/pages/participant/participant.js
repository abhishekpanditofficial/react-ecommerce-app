import React, { useState } from 'react';
import publicIP from 'react-native-public-ip';
import {Spinner2} from '../../component/with-spinner/spinner';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './participant.scss';
import { Redirect, useHistory, Link } from 'react-router-dom';


const Participant= (props)=>{
  const[ip,setIp]=useState('');
  const[participantId,setParticipantId]=useState(props.match.params.participantId);
  const[name,setName]=useState('');
  const[imageUrl,setImageUrl]=useState('');
  const[like,setLike]=useState(0);
  const[slike,setsLike]=useState(0);
  const[message,setMessage]=useState('');
 const[ukey,setUkey]=useState('');
 const[likeMessage,setLikeMessage]=useState(false);
 const[likeCheck,setLikeCheck]=useState(false);
 const[copied,setCopied]=useState(false);
const[redirectContest,setRedirectContest]=useState(false);

setTimeout(function(){ 
    setLikeCheck(true);
 }, 6000);





 publicIP()
    .then(ipadd => {
      setIp(ipadd);
      
      }).then(()=>ipCheck());


   
      const ipCheck= async ()=>{
        
            const response= await  fetch(`https://contest-32ef1.firebaseio.com/likes/${participantId}.json`);
            const resData= await response.json();
            if(resData) {
               for(const key in resData){
                   if(resData[key].ip==ip){
                       setLikeMessage(true);
    
                   }
                }
               
                }
        };




 
 const getData= async ()=>{
        const response= await  fetch(`https://contest-32ef1.firebaseio.com/models/${participantId}.json`);
         if(!response.ok){
            return  <Redirect to='/contest'/>
         }
        
        const resData= await response.json();
      
        if(resData) {
            
           for(const key in resData){
               setUkey(key);
              setName(resData[key].name);
              
              setImageUrl(resData[key].imageUrl);
              setLike(resData[key].like);
              setsLike(resData[key].like);
              setMessage(resData[key].message);
            }
            }
         };
 getData();

 

 const handleLike= async ()=>{
     if(name===''){
         return;
     }
      if(likeMessage){
        return;
    }else{
        setLikeMessage(true);
        setsLike(like+1);
        setLike(like+1);
       const response= await  fetch(`https://contest-32ef1.firebaseio.com/likes/${participantId}.json`,{
           method: 'POST',
           headers: {
               'Content-type': 'application/json'
           },
           body: JSON.stringify({
              ip
             })
       });
       const resData= await response.json();
       if(resData) {
          updateLike();
         
       }
    }
};

const updateLike= async ()=>{
    const updatedLike= like + 1;
    
    const response= await  fetch(`https://contest-32ef1.firebaseio.com/models/${participantId}/${ukey}.json`,{
       method: 'PATCH',
       headers: {
           'Content-type': 'application/json'
       },
       body: JSON.stringify({
          like: updatedLike
         })
   });

   if(response){
       setLikeMessage(true);
   }
   
};


   





const whatsappMessage=`http://foodball.in/contest/${participantId}`+' Your support means a lot to me. Share this Post as much as you can and help me WIN this one. #FoodballGoesPhotogenic';

    return(
        <div className='Participant__Page'>
           {ip==='' ? (
               <Spinner2 />
           ) : (
               <div className='Participant__Page'>
                   
                <div className='Participant__Page__title'>FOODSTAR</div>
                <div className='Participant__Page__container'>
               <img src={imageUrl} className='Participant__Page__container__image'></img>
               </div>
               
                <div className='Participant__Page__name'>{name}</div>
                <div className='share'>
                <a className='share__whatsapp' href={`whatsapp://send?text=${whatsappMessage}`} data-action="share/whatsapp/share">Share via Whatsapp</a>
                <a className='share__facebook' href={`https://www.facebook.com/sharer/sharer.php?u=foodball.in/contest/${participantId}`} target="_blank">
  Share on Facebook</a>
  <CopyToClipboard text={`http://foodball.in/contest/${participantId}`}
          onCopy={() => setCopied(true)}>
          <span className='share__clipboard'>Copy to clipboard</span>
        </CopyToClipboard>
                </div>
                {copied ? (
    <div className='clipboardText'> Linked Copied To Your Clipboard, You can now share this link to other platforms (Example: Add This To Your Insta Bio) </div>
) : (
    ''
)}
                <div className='Participant__Page__message'>{message}</div>
                

                {likeCheck ? (
                    <div className='Participant__Page__likeContainer' onClick={handleLike}>
                    <img src='https://img.icons8.com/flat_round/64/000000/filled-like.png' className={`${likeMessage ? `Participant__Page__likeContainer--likeshort` : `Participant__Page__likeContainer--like`}`}></img>
                </div>
                ) : (
                    <Spinner2/>
                )}
                
       {likeMessage ? (
      <div className='Participant__Page__likeContainer__message'>
          You Liked {name}
          </div>
       ) : (
           ''
       )
       }
      
                <div className='Participant__Page__total'>
              Total Likes: {slike}
                </div>
                <Link className='Participant__Page__registerContest' to='/contest'> Register For Foodstar</Link>

                    
                </div>
           )}
          </div>
    );
};



  
  export default Participant;

