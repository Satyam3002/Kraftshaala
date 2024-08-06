import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Inputs = ({ setQuery, setUnits, toggleDarkMode, darkMode }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center mx-4 md:mx-20 py-8 md:py-16">
    
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 md:hidden px-4 py-2 mb-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center space-x-2 transition duration-300 ease-in-out transform hover:scale-110"
      >
        {darkMode ? (
          <>
            <MdLightMode size={20} className="text-yellow-500" />
            <span className="text-sm">Light</span>
          </>
        ) : (
          <>
            <MdDarkMode size={20} className="text-gray-800 dark:text-yellow-500" />
            <span className="text-sm">Dark</span>
          </>
        )}
      </button>

      {/* Search Input and Location Button */}
      <div className="flex flex-col md:flex-row w-full md:w-5/12 items-center space-y-4 md:space-y-0 md:space-x-4 mt-12   mb-4 md:my-0">
        <div className="flex flex-row items-center w-full space-x-4">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder="search by city.."
            className="text-gray-500 text-xl font-light p-4 md:p-5 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase rounded-full"
          />
          <div className="flex flex-row space-x-4">
            <BiSearch
              size={30}
              onClick={handleSearchClick}
              className="cursor-pointer transition ease-out hover:scale-125"
            />
            <BiCurrentLocation
              size={30}
              onClick={handleLocationClick}
              className="cursor-pointer transition ease-out hover:scale-125"
            />
          </div>
        </div>
      </div>

      {/* Units Toggle */}
      <div className="flex flex-row space-x-4 mb-4 md:mb-0">
        <button
          className="text-xl md:text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>

        <p className="text-xl md:text-2xl font-medium">|</p>

        <button
          className="text-xl md:text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>

      
      <button
        onClick={toggleDarkMode}
        className="hidden md:flex px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full  items-center justify-center space-x-2 ml-auto transition duration-300 ease-in-out transform hover:scale-110"
      >
        {darkMode ? (
          <>
            <MdLightMode size={24} className="text-yellow-500" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <MdDarkMode size={24} className="text-gray-800 dark:text-yellow-500" />
            <span>Dark Mode</span>
          </>
        )}
      </button>
    </div>
  );
};

export default Inputs;
