 
import React, { useState } from 'react'
const HOC = (WrappedComponent) => {
  class WithEnhancement extends React.Component {
    // Some additional logic here
    // ...

    render() {
      return <div className='border'>
        <WrappedComponent {...this.props} />
      </div>;
    }
  }

  return WithEnhancement;
};

export default HOC;