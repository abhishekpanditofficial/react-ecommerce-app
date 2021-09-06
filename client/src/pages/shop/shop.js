import React,{useEffect} from 'react';
import './shop.scss';
import { Route, Redirect,useHistory } from 'react-router-dom';

import { createStructuredSelector } from 'reselect'; 
import { selectCurrentCategory } from '../../reducer/category/category.selectors';
import { connect } from 'react-redux';
import { updateCategory } from '../../reducer/category/category.actions';

import { fetchCollectionsStart } from '../../reducer/shop/shop.actions';

import CollectionsOverviewContainer from '../../component/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ fetchCollectionsStart, match, currentCategory,updateCategory }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
let history= useHistory();
  


  const categoryOnclick= (name,url)=>{
   
   history.push(`${match.url}${url}`);
   updateCategory(name);
   };


  return (
      <div className='shop-page'>

        
        <p className='intro-text'>Choose Your <span className='intro-text__edited'>Best Product!</span></p>
    
       
    <div className='categories__container'>
        <div onClick={()=>categoryOnclick('Fruits','/fruits')}   className={`categories__container__imgBox ${currentCategory==='Fruits' ? 'categories__container__activeBox' : ''}`}> <img  className={`categories__container__img`} src="https://img.icons8.com/pastel-glyph/64/000000/citrus.png"/></div>
        <div onClick={()=>categoryOnclick('Vegetables','/vegetables')}  className={`categories__container__imgBox ${currentCategory==='Vegetables' ? 'categories__container__activeBox' : ''}`}><img  className={`categories__container__img`} src="https://img.icons8.com/wired/80/000000/raspberry.png"/></div>
        <div onClick={()=>categoryOnclick('Grocery','/grocery')}  className={`categories__container__imgBox ${currentCategory==='Grocery' ? 'categories__container__activeBox' : ''}`}><img  className={`categories__container__img`} src="https://img.icons8.com/ios-glyphs/30/000000/grocery-bag.png"/></div>
        <div onClick={()=>categoryOnclick('Fooditems','/fooditems')} className={`categories__container__imgBox ${currentCategory==='Fooditems' ? 'categories__container__activeBox' : ''}`}> <img  className={`categories__container__img`} src="https://img.icons8.com/ios/50/000000/street-food.png"/></div>
        <div onClick={()=>categoryOnclick('Dryfruits','/dryfruits')} className={`categories__container__imgBox ${currentCategory==='Dryfruits' ? 'categories__container__activeBox' : ''}`}><img  className={`categories__container__img`} src="https://img.icons8.com/wired/64/000000/nut.png"/> </div>
    </div>
    
  


       {/* <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        /> */}
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  updateCategory: item => dispatch(updateCategory(item))
});


const mapStateToProps = createStructuredSelector({
  currentCategory: selectCurrentCategory
});



export default connect(
 mapStateToProps,
  mapDispatchToProps
)(ShopPage);