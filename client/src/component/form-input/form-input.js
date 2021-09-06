import React from 'react';
import './form-input.scss';


const FormInput= ({handleChange,label,...othersprops}) =>{


    return(
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...othersprops} />
        {
            label?
            (<label className={`${othersprops.value.length ? 'shrink' : ''} form-input-label`}>
              {label}
            </label>): null
        }
    </div>
    );
};



export default FormInput;