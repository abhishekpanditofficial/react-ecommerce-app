import React from 'react';
import './info.scss';

const InfoPage =() =>{
  
    return(
  <div className='infoPage'>
      <div className='infoPage__infoTitle'>
          Our Team
      </div>

        <div className='infoPage__card'>
        <img src='https://i.ibb.co/bJcdVTn/abhishek.jpg' className='infoPage__card__image'></img>
        <div className='infoPage__card__container'>
        <div className='infoPage__card__container__name'>
            Abhishek Pandit
        </div>
        <div className='infoPage__card__container__designation'>
            CEO,Founder
        </div>
        <div className='infoPage__card__container__call'>
            +917002314337
        </div>
             </div>
        </div>
        

        <div className='infoPage__card'>
        <img src='https://i.ibb.co/8sB9cXB/biswaroop.jpg' className='infoPage__card__image'></img>
        <div className='infoPage__card__container'>
        <div className='infoPage__card__container__name'>
            Biswaroop Goswami
        </div>
        <div className='infoPage__card__container__designation'>
            Marketing Director
        </div>
        <div className='infoPage__card__container__call'>
            +919365250034
        </div>
             </div>
        </div>
        

        <div className='infoPage__card'>
        <img src='https://i.ibb.co/k6ByxhJ/ankur.jpg' className='infoPage__card__image'></img>
        <div className='infoPage__card__container'>
        <div className='infoPage__card__container__name'>
            Ankur Chaudhary
        </div>
        <div className='infoPage__card__container__designation'>
            Coordinator
        </div>
        <div className='infoPage__card__container__call'>
            +917002658216
        </div>
             </div>
        </div>


  </div>
);


};



export default InfoPage;