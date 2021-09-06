import React from 'react';
import './menu-item.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCategory } from '../../reducer/category/category.actions'
 
const MenuItem = ({title,size,imageUrl,history,match,linkUrl,updateCategory}) =>{
  const menuClick= () =>{
    updateCategory(title);
    history.push(`${match.url}${linkUrl}`);
  };
  return(
    <div className={`${size} menu-item`} onClick={()=>menuClick()}>
        <div className='background-image'  
        style={{
        backgroundImage: `url(${imageUrl})`
    }}/>
    <div className='content'>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
  );
};

const mapDispatchToProps= dispatch =>({
  updateCategory: item => dispatch(updateCategory(item))
});

export default withRouter(connect(null,mapDispatchToProps)(MenuItem));


