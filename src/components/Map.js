import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import MyCustomControl from './MyCustomControl ';

const MyMap = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MyCustomControl />
    </MapContainer>
  );
};

export default MyMap;
