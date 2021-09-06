import React,{useState} from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../component/collection-item/collection-item';
import { createStructuredSelector } from 'reselect';
import selectCurrentCategory from '../../reducer/category/category.selectors'

import { selectCollection } from '../../reducer/shop/shop.selectors';
import ModernInput from  '../../component/modern-input/modern-input';

import './collection.scss';

const CollectionPage = ({ collection }) => {
   const[searchValue,setSearchValue]=useState('');
   const filteredItems= collection.items.filter(itemName => 
    itemName.name.toLowerCase().includes(searchValue.toLowerCase()));

  const { title } =collection;
 
  
  const handleChange= (value) =>{
     setSearchValue(value);
  };

  return (
    <div className='collection-page'>
 
      <h2 className='title'>{title}{title==='Fish' ? '/Products' : '' }</h2>
      {title==='Fooditems' ? (
        <div className='title__info'>All the items are from PG FOOD PLAZA, so prices are set accordingly to their menu</div>
      ) : ('')}
      
      <ModernInput handleChange={handleChange} />
      <div className='colorInfo'>
            
         <div className='colorInfo__container'>
               <div className='colorInfo__container__color--red' ></div>
               <p>Sold-Out</p>
          </div>

          <div className='colorInfo__container'>
               <div className='colorInfo__container__color--blue' ></div>
               <p>Variation</p>
          </div>

          <div className='colorInfo__container'>
               <div className='colorInfo__container__color--grey' ></div>
               <p>No Variation</p>
          </div>


      </div>
      <div className='items'>
        {filteredItems.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
     
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

