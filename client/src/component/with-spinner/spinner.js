import React from 'react';

import { SpinnerContainer, SpinnerOverlay,SpinnerOverlay2 } from './with-spinner.styles';


 export  const Spinner = () => {
    return (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    );
  };


 export const Spinner2 = () => {
    return (
        <SpinnerOverlay2>
        <SpinnerContainer />
      </SpinnerOverlay2>
    );
  };


