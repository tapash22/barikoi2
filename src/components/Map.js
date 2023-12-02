import { useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Rectangle,
  CircleMarker,
  SVGOverlay,
  Polygon,
  Tooltip 
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";
// import LocationMarker from './LocationMarker'

// create custom icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("../assets/placeholder.png"),
  iconSize: [38, 38], // size of the icon
});

const customIcon1 = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("../assets/home.png"),
  iconSize: [42, 42], // size of the icon
});

const rectangle = [
  [23.83, -0.04],
  [23.82, -0.02],
];

const bounds = [
  [23.831126672142275, 90.42474623462705],
  [23.829551292122613, 90.4240742263061],
];

// const center = [23.8326700001252, 90.42364774346298];
const center = [51.51, -0.1]
// [23.831082528393814, 90.42452189382446]

// const fillBlueOptions = { fillColor: 'blue' }
const blackOptions = { color: "red" };
const purpleOptions = { color: "purple" };

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

const polygon = [
  [23.8326700001252, 90.42364774346298],
  [23.82901975437455, 90.42373878065332],
  [23.829047513284955, 90.42757751551262],
];

// const hexagonCoordinates = [
//   [51.509, -0.08],
//   [51.503, -0.06],
//   [51.51, -0.047],
//   [51.509, -0.02],
//   [51.503, 0.0],
//   [51.51, 0.03],
//   [51.509, 0.06],
//   [51.503, 0.08],
//   [51.51, 0.047],
// ];

// const pentagonCoordinates = [
//   [51.509, -0.08],
//   [51.503, -0.06],
//   [51.51, -0.02],
//   [51.507, 0.03],
//   [51.503, 0.08],
//   [51.509, 0.06],
//   [51.515, 0.03],
//   [51.51, -0.02],
//   [51.509, -0.08],
// ];

// use all shape for use
const shapes = [
  {
    name: 'Place A',
    type: 'triangle',
    coordinates: [
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
    ],
    color: 'blue',
    details: 'Details for Place A',
  },
  {
    name: 'Place B',
    type: 'rectangle',
    coordinates: [
      [51.51, -0.1],
      [51.51, -0.05],
      [51.515, -0.05],
      [51.515, -0.1],
    ],
    color: 'green',
    details: 'Details for Place B',
  },
  {
    name: 'Place C',
    type: 'pentagon',
    coordinates: [
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.02],
      [51.507, 0.03],
      [51.503, 0.08],
    ],
    color: 'red',
    details: 'Details for Place C',
  },
  {
    name: 'Place D',
    type: 'hexagon',
    coordinates: [
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
      [51.509, -0.02],
      [51.503, 0.0],
      [51.51, 0.03],
    ],
    color: 'purple',
    details: 'Details for Place D',
  },
  // Add more shapes as needed
];

// markers
const markers = [
  {
    geocode: [23.79394065259921, 90.40658328041452],
    popUp: "Hello, I am pop up 1",
  },
  {
    geocode: [23.790720666256483, 90.40641161904219],
    popUp: "Hello, I am pop up 2",
  },
  {
    geocode: [23.78765767838045, 90.41044566129226],
    popUp: "Hello, I am pop up 3",
  },
  {
    geocode: [23.78860014387656, 90.40340754502617],
    popUp: "Hello, I am pop up 4",
  },
  {
    geocode: [23.78702936425326, 90.40615412698365],
    popUp: "Hello, I am pop up 5",
  },
  {
    geocode: [23.79574695146757, 90.41722628549984],
    popUp: "Hello, I am pop up 6",
  },
];

export default function Map() {
  return (
    <MapContainer center={center} zoom={13}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* WATERCOLOR CUSTOM TILES */}
      {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      /> */}
      {/* GOOGLE MAPS TILES */}
      {/* <TileLayer
        attribution="Google Maps"
        // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
        // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
        url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      /> */}

{shapes.map((shape, index) => (
        <Polygon key={index} positions={shape.coordinates} color={shape.color}>
          <Tooltip>{shape.name}</Tooltip>
          <Popup>
            <div>
              <strong>{shape.name}</strong>
              <br />
              {shape.details}
            </div>
          </Popup>
        </Polygon>
      ))}

      <SVGOverlay attributes={{ stroke: "red" }} bounds={bounds}>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          stroke="red"
          stroke-width="5"
          fill="green"
        />
        <text x="40%" y="50%" stroke="white">
          text
        </text>
      </SVGOverlay>

      <Polygon pathOptions={purpleOptions} positions={polygon} />
      {/* <Polygon positions={hexagonCoordinates} color="blue" />
      <Polygon positions={pentagonCoordinates} color="red" /> */}
      <CircleMarker
        center={[23.831082528393814, 90.42452189382446]}
        pathOptions={blackOptions}
        radius={20}
      >
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      <LocationMarker />
      <Rectangle bounds={rectangle} pathOptions={blackOptions} />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the markers */}
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}

        {/* Hard coded markers */}
        {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>This is popup 1</Popup>
        </Marker>
        <Marker position={[51.504, -0.1]} icon={customIcon}>
          <Popup>This is popup 2</Popup>
        </Marker>
        <Marker position={[51.5, -0.09]} icon={customIcon}>
          <Popup>This is popup 3</Popup>
        </Marker>
       */}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
