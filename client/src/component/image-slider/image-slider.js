import React from 'react';
import './image-slider.scss';

const ImageSlider= ()=>{
     return(
<div id="homepage-slider" className="st-slider">

<input type="radio" className="cs_anchor radio" name="slider" id="slide1"/>
<input type="radio" className="cs_anchor radio" name="slider" id="slide2"/>
<input type="radio" className="cs_anchor radio" name="slider" id="slide3"/>
<input type="radio" className="cs_anchor radio" name="slider" id="play1" checked=""/>


<div className="images">
   <div className="images-inner">
    <div className="image-slide">
      <div className="image2 bg-yellow" ></div>
    </div>
    <div className="image-slide">
      <div className="image2 bg-blue" ></div>
    </div>
    <div className="image-slide">
      <div className="image2 bg-red" ></div>
    </div>
  </div>
</div>



</div>
    );
};



export default ImageSlider;