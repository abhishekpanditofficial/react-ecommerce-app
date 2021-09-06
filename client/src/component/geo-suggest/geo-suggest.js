import React from 'react';
import Geosuggest from 'react-geosuggest';
import './geo-suggest.scss';

const LocationSuggest=()=> {


const onSuggestSelect= (Suggest)=>{
console.log(Suggest);
};

  


    return(
    <div>
        <Geosuggest
        /* ref={geosuggestEl} */
        placeholder="Start typing!"
        initialValue="Tinsukia"
        
        onSuggestSelect={onSuggestSelect}
   
        radius="20" />
    </div>
    );
   };

export default LocationSuggest;