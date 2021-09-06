import React from 'react';
import './modern-input.scss';


const ModernInput= ({handleChange,...othersprops}) =>{


    return(
    
        <div class="box">
        <div class="container-4">
          <input type="search" id="search" placeholder="Search..." onChange={e =>{handleChange(e.target.value)}} {...othersprops} />
          <button class="icon"><i class="fa fa-search"></i></button>
        </div>
      </div>
       
  
    );
};



export default ModernInput;