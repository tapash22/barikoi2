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
  Tooltip,
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
  [23.834353934819745, 90.41425911995564],
  [23.833120172879497, 90.41472878566378],
  [23.832888841209144, 90.41470470024286],
  [23.83145677882932, 90.41541522016026],
  [23.829584057942153, 90.41595714215521],
  [23.82830618586907, 90.41645089328425],
  [23.82814094287159, 90.41819708630162],
  [23.828845978194103, 90.41920867398063],
  [23.830597533739237, 90.41887147808762],
  [23.832371097331137, 90.41859449574694],
  [23.835433466896678, 90.4181127872543],
  [23.83609440052573, 90.41831751329622],
  [23.835885105260516, 90.4163184233591],
  [23.835433466958428, 90.41505393876031],
];

// const center = [23.8326700001252, 90.42364774346298];
const center = [23.83231860424927, 90.41678760385615];
// [23.831082528393814, 90.42452189382446]

// const fillBlueOptions = { fillColor: 'blue' }
const blackOptions = { color: "red" };
// const purpleOptions = { color: "purple" };

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

const hexagonCoordinates = [
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
  [51.509, -0.02],
  [51.503, 0.0],
  [51.51, 0.03],
  [51.509, 0.06],
  [51.503, 0.08],
  [51.51, 0.047],
];

const pentagonCoordinates = [
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.02],
  [51.507, 0.03],
  [51.503, 0.08],
  [51.509, 0.06],
  [51.515, 0.03],
  [51.51, -0.02],
  [51.509, -0.08],
];

// use all shape for use
const shapes = [
  {
    type: "rectangle",
    name: "Plot1",
    color: "violet",
    coordinates: [
      [23.831044, 90.417058],
      [23.83125, 90.418619],
      [23.830259, 90.41878],
      [23.830043, 90.417229],
    ],
    details: "Details for Place 1",
  },
  {
    type: "rectangle",
    name: "Plot2",
    color: "green",
    coordinates: [
      [23.830874, 90.415831],
      [23.831038, 90.417011],
      [23.830028, 90.417184],
      [23.829877, 90.416246],
    ],
    details: "Details for Place 2",
  },
  {
    type: "rectangle",
    name: "Plot3",
    color: "green",
    coordinates: [
      [23.829841, 90.416252],
      [23.83004, 90.417707],
      [23.829707, 90.417783],
      [23.829521, 90.416367],
    ],
    details: "Details for Place 3",
  },
  {
    type: "rectangle",
    name: "Plot4",
    color: "yellow",
    coordinates: [
      [23.829521, 90.416367],
      [23.829707, 90.417783],
      [23.82917, 90.416501],
    ],
    details: "Details for Place 4",
  },
  {
    type: "rectangle",
    name: "Plot5",
    color: "green",
    coordinates: [
      [23.829159, 90.416495],
      [23.829707, 90.417783],
      [23.829019, 90.417956],
    ],
    details: "Details for Place 6",
  },
  {
    type: "rectangle",
    name: "Plot6",
    color: "red",
    coordinates: [
      [23.829159, 90.416495],
      [23.829019, 90.417956],
      [23.828832, 90.416648],
    ],
    details: "Details for Place 6",
  },
  {
    type: "rectangle",
    name: "Plot7",
    color: "black",
    coordinates: [
      [23.828832, 90.416648],
      [23.829019, 90.417956],
      [23.828669, 90.418],
      [23.828496, 90.416798],
    ],
    details: "Details for Place 7",
  },
  {
    type: "rectangle",
    name: "Plot8",
    color: "violet",
    coordinates: [
      [23.830061, 90.41775],
      [23.830219, 90.418789],
      [23.829852, 90.418871],
      [23.829718, 90.417815],
    ],
    details: "Details for Place 8",
  },
  {
    type: "rectangle",
    name: "Plot9",
    color: "yellow",
    coordinates: [
      [23.829718, 90.417815],
      [23.829852, 90.418871],
      [23.829518, 90.418918],
      [23.829377, 90.41789],
    ],
    details: "Details for Place 9",
  },
  {
    type: "rectangle",
    name: "Plot10",
    color: "green",
    coordinates: [
      [23.829377, 90.41789],
      [23.829518, 90.418918],
      [23.829167, 90.418993],
      [23.829036, 90.417944],
    ],
    details: "Details for Place 10",
  },
  {
    type: "rectangle",
    name: "Plot11",
    color: "yellow",
    coordinates: [
      [23.829036, 90.417944],
      [23.829167, 90.418993],
      [23.828833, 90.419057],
      [23.828679, 90.418033],
    ],
    details: "Details for Place 11",
  },
  {
    type: "rectangle",
    name: "Plot12",
    color: "green",
    coordinates: [
      [23.830874, 90.415831],
      [23.831038, 90.417011],
      [23.831414, 90.416967],
      [23.831228, 90.415722],
    ],
    details: "Details for Place 3",
  },
  {
    type: "rectangle",
    name: "Plot13",
    color: "green",
    coordinates: [
      [23.831228, 90.415722],
      [23.831414, 90.416967],
      [23.831758, 90.416897],
      [23.831581, 90.415583],
    ],
    details: "Details for Place 3",
  },
  {
    type: "rectangle",
    name: "Plot14",
    color: "green",
    coordinates: [
      [23.83158136246301, 90.41558332682352],
      [23.831758015497265, 90.41689760913162],
      [23.832101506837578, 90.41682250726359],
      [23.831919947251954, 90.41545458077967],
    ],
    details: "Details for Place 3",
  },
  {
    type: "rectangle",
    name: "Plot15",
    color: "green",
    coordinates: [
      [23.831919947251954, 90.41545458077967],
      [23.832101506837578, 90.41682250726359],
      [23.83247443924336, 90.41676886308774],
      [23.832268345151665, 90.41530974150488],
    ],
    details: "Details for Place 3",
  },
  {
    type: "rectangle",
    name: "Plot16",
    color: "green",
    coordinates: [
      [23.832268, 90.415309],
      [23.832474, 90.416768],
      [23.832881, 90.416731],
      [23.832626, 90.415164],
    ],
    details: "Details for Place 3",
  },
  {
    type: "rectangle",
    name: "Plot17",
    color: "green",
    coordinates: [
      [23.832626, 90.415164],
      [23.832881, 90.416731],
      [23.833239, 90.416666],
      [23.832999, 90.415009],
    ],
    details: "Details for Place 3",
  },
  {
    type: "rectangle",
    name: "Plot18",
    color: "green",
    coordinates: [
      [23.832999, 90.415009],
      [23.833239, 90.416666],
      [23.833603, 90.416597],
      [23.833333, 90.414885],
    ],
    details: "Details for Place 3",
  },
  {
    type: "rectangle",
    name: "Plot19",
    color: "green",
    coordinates: [
      [23.833333, 90.414885],
      [23.833603, 90.416597],
      [23.833951, 90.416554],
      [23.833686, 90.414751],
    ],
    details: "Details for Place 3",
  },
  {
    type: "rectangle",
    name: "Plot20",
    color: "green",
    coordinates: [
      [23.833686, 90.414751],
      [23.833951, 90.416554],
      [23.834304, 90.416484],
      [23.834039, 90.414617],
    ],
    details: "Details for Place 3",
  },
  {
    type: "rectangle",
    name: "Plot21",
    color: "green",
    coordinates: [
      [23.834039, 90.414617],
      [23.834304, 90.416484],
      [23.834653, 90.41642],
      [23.834368, 90.414451],
    ],
    details: "Details for Place 3",
  },
  {
    type: "rectangle",
    name: "Plot22",
    color: "green",
    coordinates: [
      [23.834368, 90.414451],
      [23.834653, 90.41642],
      [23.834991, 90.416371],
      [23.83478457743734, 90.41458786112179],
    ],
    details: "Details for Place 3",
  },
  {
    type: "rectangle",
    name: "Plot23",
    color: "green",
    coordinates: [
      [23.834991, 90.416371],
      [23.835246, 90.417959],
      [23.834889, 90.418023],
      [23.834653, 90.41642],
    ],
    details: "Details for Place 3",
  },
];

// markers
const markers = [
  {
    geocode: [23.83125, 90.418619],
    popUp: "Hello, I am pop up 1",
  },
  {
    geocode: [23.831038, 90.417011],
    popUp: "Hello, I am pop up 2",
  },
  {
    geocode: [23.83004, 90.417707],
    popUp: "Hello, I am pop up 3",
  },
  {
    geocode: [23.829707, 90.417783],
    popUp: "Hello, I am pop up 4",
  },
  {
    geocode: [23.829707, 90.417783],
    popUp: "Hello, I am pop up 5",
  },
  {
    geocode: [23.829019, 90.417956],
    popUp: "Hello, I am pop up 6",
  },
  {
    geocode: [23.829019, 90.417956],
    popUp: "Hello, I am pop up 6",
  },
  {
    geocode: [23.830219, 90.418789],
    popUp: "Hello, I am pop up 6",
  },
  {
    geocode: [23.829852, 90.418871],
    popUp: "Hello, I am pop up 6",
  },
  {
    geocode: [23.829518, 90.418918],
    popUp: "Hello, I am pop up 6",
  },
  {
    geocode: [23.829167, 90.418993],
    popUp: "Hello, I am pop up 6",
  },
];

export default function Map() {
  const [hoveredPolygon, setHoveredPolygon] = useState(null);
  const [selectedPolygon, setSelectedPolygon] = useState(null);

  return (
    <MapContainer
      center={center}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%" }}
    >
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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
        </Polygon>
      ))}

      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
      {/* <LocationMarker /> */}
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

      {/* {bounds.map((shape, index) => (
        <Polygon key={index} positions={shape} color="blue" />
      ))} */}

      {/* <SVGOverlay attributes={{ stroke: "red" }} bounds={bounds}>
        <rect
        
          width="100%"
          height="100%"
          stroke="red"
          stroke-width="5"
          fill="none"
        />
        <text x="40%" y="50%" stroke="white">
          text
        </text>
      </SVGOverlay> */}

      {/* <Polygon pathOptions={purpleOptions} positions={polygon} /> */}
      {/* <Polygon positions={hexagonCoordinates} color="blue" />
      <Polygon positions={pentagonCoordinates} color="red" /> */}
      {/* <CircleMarker
        center={[23.831082528393814, 90.42452189382446]}
        pathOptions={blackOptions}
        radius={20}
      >
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker> */}

      {/* <Rectangle bounds={rectangle} pathOptions={blackOptions} /> */}
      {/* <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        Mapping through the markers
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}

        Hard coded markers
        <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>This is popup 1</Popup>
        </Marker>
        <Marker position={[51.504, -0.1]} icon={customIcon}>
          <Popup>This is popup 2</Popup>
        </Marker>
        <Marker position={[51.5, -0.09]} icon={customIcon}>
          <Popup>This is popup 3</Popup>
        </Marker>
      
      </MarkerClusterGroup> */}
    </MapContainer>
  );
}
