import React,{useState,useEffect} from 'react';

import './homepage.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentCity } from './../../reducer/category/category.selectors';
import { updateCity } from './../../reducer/category/category.actions';
import ImageSlider from '../../component/image-slider/image-slider';
import LocationSuggest from '../../component/geo-suggest/geo-suggest';

import Directory from '../../component/directory/directory';
import CollectionsOverviewContainer from '../../component/collections-overview/collection-overview.container';

/* const HomePage = () => (
  <div className='homepage'>
   <Directory/>
  </div>
);

export default HomePage; */

import { HomePageContainer } from './homepage.styles';
import { Link } from 'react-router-dom';
import { selectCurrentUser } from '../../reducer/user/user.selectors';

const HomePage = ({city,updateCity,currentUser}) => {
  
const[teamup,setTeamup]=useState(false);
return(
  <HomePageContainer>

<ImageSlider/>
   {/*  {city!=='none' ? (
      <div className='select-city__button' onClick={()=>updateCity('none')}>
      Change City {city==='collections' ? 'tinsukia' : city}
    </div>
    ) : ('')} */}

    {/* <LocationSuggest /> */}
   {/*  {city==='none' ? (
      <div className='select-city'>
   <div className='select-city__header'>Please Select Your City</div>
   <div className='select-city__button' onClick={()=>updateCity('collections')}>Tinsukia</div>
   <div className='select-city__button' onClick={()=>updateCity('moran')}>Moran</div>
      </div>
    ) : (
   <Directory />
    )} */}
    {currentUser ? (
      ''
    ) : (
 <div className='select-city__button'><Link to='/sign-in-and-sign-up' className='linkText'> Create Your Account With Us</Link> </div>
    )}
  
    <Directory />
    <div className='footer'>
   {/*  <div className='footer-item team-text' onClick={()=>setTeamup(prevState => !prevState)}>TEAM</div> */}
    <div className='footer-item footer-text'>&copy; Foodball</div>
    <div className='footer-item footer-text'><Link  className='footerLink' to='/info'>Checkout our Team &rarr;</Link></div>
   
   {/* {teamup ? (
     <div className='team'>
     <div className='team__header'>Team</div>
     <div className='team__box'>
    <div className='team__box__member'>
     <img src='https://i.ibb.co/wcPZ86C/abhishek.jpg' className='team__box__member__photo'></img>
     <h1 className='team__box__member__name'>Abhishek Pandit</h1>
     <img src="https://i.ibb.co/SmcnV4P/Rr-Rx-Mp-Bk-JTQs8w-WYcer9-Id-Zs-Qp-FOdq-r-LYIEx-CSNJf1h7-FBk-SXOe-Xq-Plrw5q-Mbv-WY9-C-Ce-A2c4d-L9dtgvr2-XX6-Sset-H9w-Jh-C9-X0-X-3-KH0-MMD6-Hg-Ujy-QUWHCk-C84-OIVWh-C9-K0g-VVi-Bx-F-c-PQyh-EBys-CW9sb-JC.png" className='team__box__member__instagram'></img>
     <a href='https://instagram.com/' className='team__box__member__instagram--text'>Checkout My Instagram</a>
    </div>
    <div className='team__box__member'>
     <img src='https://i.ibb.co/nDK6dJq/subhankar.jpg' className='team__box__member__photo'></img>
     <h1 className='team__box__member__name'>Subhankar Mukharjee</h1>
     <img src="https://i.ibb.co/SmcnV4P/Rr-Rx-Mp-Bk-JTQs8w-WYcer9-Id-Zs-Qp-FOdq-r-LYIEx-CSNJf1h7-FBk-SXOe-Xq-Plrw5q-Mbv-WY9-C-Ce-A2c4d-L9dtgvr2-XX6-Sset-H9w-Jh-C9-X0-X-3-KH0-MMD6-Hg-Ujy-QUWHCk-C84-OIVWh-C9-K0g-VVi-Bx-F-c-PQyh-EBys-CW9sb-JC.png" className='team__box__member__instagram'></img>
     <a href='https://instagram.com/' className='team__box__member__instagram--text'>Checkout My Instagram</a>
    </div>


     </div>
   </div>
  
   ) : (<div></div>)} */}
    
    </div>
  </HomePageContainer>
);
};
const mapStateToProps= createStructuredSelector({
     city: selectCurrentCity,
     currentUser: selectCurrentUser
  });

const mapDispatchToProps = dispatch => ({
  
  updateCity: item => dispatch(updateCity(item))
});
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);

