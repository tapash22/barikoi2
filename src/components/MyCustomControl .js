import React from 'react';
import { useMap } from 'react-leaflet';

const MyCustomControl = () => {
  const map = useMap();

  const handleClick = () => {
    // Do something when the control is clicked
    alert('Custom Control Clicked!');
  };

  return (
    <div className="custom-control" onClick={handleClick}>
      Custom Control
    </div>
  );
};

export default MyCustomControl;
