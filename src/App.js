import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { FaGreaterThan, FaLessThan } from "react-icons/fa"
import { BsSearch } from "react-icons/bs"
import { Icon, divIcon, point } from "leaflet";
import { useState } from "react";

const customIcon = new Icon({
  iconUrl: require("./assets/placeholder.png"),
  iconSize: [38, 38]
});

const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

// markers
const markers = [
  {
    id: 1,
    geolocation: [23.830084, 90.418328],
    popup: 'this is new 1'
  },
  {
    id: 2,
    geolocation: [23.829922, 90.417158],
    popup: 'this is new 2'
  },
  {
    id: 3,
    geolocation: [23.831284, 90.418201],
    popup: 'this is new 3'
  },
];

export default function App() {

  const [name, setName] = useState('');
  const [show, setShow] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const addPosts = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    // Do something with the state
  };

  const changeValue = (e) => {
    setName(e.target.value);
  };

  const onView = () => {
    setShow(!show);
  };

  const hideView = () => {
    setShow(false);
  };

  return (
    <div className={`h-screen w-full relative flex `}>
      {
        show &&
        <div className="flex overflow-hidden ">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl h-screen w-1/2 px-4 py-5 text-${isDarkMode ? 'white' : 'bg-gray-800'}`}>
            <div className={`flex justify-between py-3 px-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`text-xl font-semibold text-${isDarkMode ? 'green-300' : 'green-400'}`}>
                BariKoi
              </h3>
              <FaLessThan className={`flex justify-center align-middle font-normal text-lg ${isDarkMode ? 'text-gray-300' : 'text-black'}`} onClick={hideView} />
            </div>
            <div className="flex justify-end my-2">
              <button className={`${isDarkMode ? 'bg-white' : 'bg-gray-800'} px-4 py-3 rounded-lg text-sm font-semibold ${isDarkMode ? 'text-black' : 'text-white'}`} onClick={toggleMode}> {isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
            </div>
            <div className={`py-3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <form onSubmit={addPosts}>
                <div className={`my-2 flex py-2 shadow-sm rounded-lg ${isDarkMode ? 'shadow-white' : 'shadow-gray-400'} px-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <input value={name} onChange={changeValue} placeholder="search" className={`text-lg font-medium w-full h-10 px-2 py-1 focus:outline-none ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${isDarkMode ? 'text-white' : 'text-black'}`} />
                  <BsSearch onClick={onView} className={`bg-green-500 px-2 font-bold text-3xl h-10 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2 h-screen ">
            <MapContainer center={[23.829712, 90.419669]} zoom={13}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />


              <MarkerClusterGroup
                chunkedLoading
                iconCreateFunction={createClusterCustomIcon}
              >
                {/* Mapping through the markers */}
                {markers.map((marker) => (
                  <Marker position={marker.geolocation} icon={customIcon}>
                    <Popup>{marker.popup}</Popup>
                  </Marker>
                ))}
              </MarkerClusterGroup>
            </MapContainer>
          </div>
        </div>
      }
      {
        !show &&
        <div className="w-full ">
          <FaGreaterThan onClick={onView} className="ml-4" />
          <MapContainer center={[23.829712, 90.419669]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup
              chunkedLoading
              iconCreateFunction={createClusterCustomIcon}
            >
              {/* Mapping through the markers */}
              {markers.map((marker) => (
                <Marker position={marker.geolocation} icon={customIcon}>
                  <Popup>{marker.popup}</Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </MapContainer>
        </div>
      }
    </div>
  );
}



