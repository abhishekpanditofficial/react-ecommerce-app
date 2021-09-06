import React,{useState} from 'react';
import './collection-item.scss';
import CustomButton from '../custom-button/custom-button';
import {connect} from 'react-redux';
import { addItem } from '../../reducer/cart/cart.actions';
import { Redirect, Link } from 'react-router-dom';


const CollectionItem= ({item,addItem}) =>{
     const [customization,setCustomization]=useState(false);
    const {name,price,imageUrl,details,active,vary,variations,mrp}= item;
    const[cartConfirm,setCartConfirm]=useState(false);
  

     const checkVariation=()=>{
         if(vary===1){
             
             setCustomization(true);
         }else{
            setCartConfirm(true);
             addItem(item);
            
         }
     };

     const variationOverride= (property,price,name)=>{
         const itemNew= Object.assign({},item);
         /* itemNew.details=property; */
         itemNew.price=price;
         itemNew.name=name;
         setCartConfirm(false);
         setCustomization(false);
         setCartConfirm(true);
         addItem(itemNew);
         
         
     };
    



    return(
        <div>
            {cartConfirm ? (
            <div className='cartConfirm'>
   
        <div className='cartConfirm__image_container'>
        <div className='cartConfirm__image_container__text'>
        Item Added to Cart Succesfully
        </div>
            <img className='cartConfirm__image_container__image' src="https://i.ibb.co/XxcL3sn/pngkey-com-check-mark-png-215619.png"/>
        </div>
    
            <div onClick={(()=>setCartConfirm(false))} className='cartConfirm__button'>
                Continue Shopping
                </div>
               <Link to='/checkout' className='cartConfirm__button2'>
                Go To Checkout
                </Link>

                </div>
        ) : (
            <div className={`collection-item  ${mrp ? 'mrp' : ''}  ${vary ? 'variation-out' : ''}  ${active===0 ? 'sold-out' : ''} `}>
        
      
            {vary ? (
                <div className='Itemvariation'></div>
            ) : ('')}

           {mrp ? (
                <div className='mrp'>
                   <div className='mrp__real'>MRP:<span>&#8377;{mrp}</span></div>
                   <div className='mrp__price'>&#8377;{price}</div>
                </div>
            ) : ('')}
           
           
           {active===0 ? (
                <div className='sold-out-text'>SOLD-OUT</div>
            ) : ('')}
           
            <div className='image sold-out' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
     
                 <div className='collection-footer'>
                 
             <span className='name'>{name}</span>
             <span className='price'>&#8377;{price}</span>
             <span className='item-cart' onClick={checkVariation}><img  className='item-cart__image' src="https://img.icons8.com/dotty/64/000000/add-basket.png"/></span>
             </div>
             {customization ? (
          <div className='details details__variations'>
            {/*  {console.log(variations.map(variation => variation.id))}  */}
            {customization ? variations.map(variation =>(
              <div className='customization__variation' onClick={()=>variationOverride(variation.property,variation.price,variation.name)} key={variation.id}>{variation.property}=&#8377;{variation.price}</div>
              )) : ('')}
            </div>
             ) : (
                 <div className='details'>{details==='blah' ? ' If the product you have selected is not available with us then we will try our best to fetch that product for you (even from the stars) or else we will try to get you an alternative for that product right at your doorstep.' : details}</div>
             )}
            
          
     
           
             <CustomButton inverted onClick={checkVariation}>Add to Cart</CustomButton>
           
                 </div>
        )}
  
            
            </div>
    );
};

const mapDispatchToProps= dispatch =>({
    addItem: item => dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);