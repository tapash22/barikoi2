import { MapContainer, TileLayer, Polygon, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

const YourComponent = () => {
  const center = [23.83231860424927, 90.41678760385615];
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
  const [clickedPolygon, setClickedPolygon] = useState(null);

  const map = useMap();

  const handlePolygonClick = (index) => {
    setClickedPolygon(index);
    // Additional logic or actions after clicking the polygon
  };

  const handlePolygonMouseOver = (event, index) => {
    map.flyToBounds(shapes[index].coordinates); // Adjust flyToBounds parameters as needed
  };

  const handlePolygonMouseOut = () => {
    map.flyTo(center); // Return to the initial center when not hovering
  };

  return (
    <MapContainer center={center} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {shapes.map((shape, index) => (
        <Polygon
          key={index}
          positions={shape.coordinates}
          pathOptions={{
            color: clickedPolygon === index ? 'green' : 'blue',
            weight: 2,
          }}
          eventHandlers={{
            click: () => handlePolygonClick(index),
            mouseover: (event) => handlePolygonMouseOver(event, index),
            mouseout: handlePolygonMouseOut,
          }}
          className={clickedPolygon === index ? 'hide-border' : ''} // Apply the class to hide the border
        />
      ))}
    </MapContainer>
  );
};

export default YourComponent;
