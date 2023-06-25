import React from 'react'

import {LoaderWrapper,Spinner} from './style'

const Loader: React.FC = () => {
    return (
      <LoaderWrapper>
        <Spinner />
      </LoaderWrapper>
    );
  };
  
  export default Loader; 