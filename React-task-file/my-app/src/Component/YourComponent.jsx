import React from 'react';
import G from './Gird';

const YourComponent = ({ viewType }) => {
    console.log(viewType);
  switch ('grid') {
    case 'grid':
      return (
        <div>
          <G/>
        </div>
      );
    case 'list':
      return (
        <div>
          <p>list</p>
        </div>
      );
    default:
      return null;
  }

};

export default YourComponent;
