import { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Polygon,
  Tooltip
} from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
// import { ScaleControl } from 'react-leaflet' 

import { Icon, divIcon, point } from "leaflet";
import markers from "../Marks";
import bounds from '../bounds';
import shapes from "../shapes";
// import LocationMarker from './LocationMarker'

// create custom icon
const customIcon = new Icon({
  iconUrl: require("../assets/placeholder.png"),
  iconSize: [12, 12], // size of the icon
});

const customIcon1 = new Icon({
  iconUrl: require("../assets/home.png"),
  iconSize: [28, 28], // size of the icon
});

const rectangle = [
  [23.83, -0.04],
  [23.82, -0.02],
];

const center = [23.83231860424927, 90.41678760385615];

const blackOptions = { color: "red" };

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={customIcon1}>
      <Popup>This is your home location !</Popup>
    </Marker>
  );
}

// calculate for center positon
// const calculatePolygonCenter = (coordinates) => {
//     const bounds = L.polygon(coordinates).getBounds();
//     const center = bounds.getCenter();
//     return [center.lat, center.lng];
//   };


export default function Map() {
  const [hoveredPolygon, setHoveredPolygon] = useState(null);

  return (
    <MapContainer
      center={center}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* zooming scale for finding map zoom */}
      {/* <ScaleControl position="topleft" /> */}
      <Polygon positions={bounds} fillColor="yellow" color="red" />

      {shapes.map((shape, index) => (
        <Polygon
          key={index}
          positions={shape.coordinates}
          color={shape.color}
          stroke="none"
          pathOptions={{
            color: hoveredPolygon === index ? 'red' : shape.color,
            weight: 2,
          }}
          eventHandlers={{
            mouseover: () => setHoveredPolygon(index),
            mouseout: () => setHoveredPolygon(null),
          }}
        >
             <Tooltip>{shape.name}</Tooltip>
          <Popup>
            <div>
              <strong>{shape.name}</strong>
              <br />
              {shape.details}
            </div>
          </Popup>
          {/* <Marker position={calculatePolygonCenter(shape.coordinates)} icon={L.divIcon({ className: 'custom-icon', html: shape.name })} /> */}
        </Polygon>
      ))}

      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
