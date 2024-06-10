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
    <div className="flex flex-row items-center mx-20 py-16">
      <div className="flex flex-row w-5/12 items-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="search by city.."
          className="text-gray-500 text-xl font-light p-5 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase rounded-full"
        />
        <BiSearch
          size={34}
          onClick={handleSearchClick}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
        <BiCurrentLocation
          size={34}
          onClick={handleLocationClick}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row space-x-4 ml-16">
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>

        <p className="text-2xl font-medium">|</p>

        <button
          className="text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>

      <button
  onClick={toggleDarkMode}
  className="dark-mode-toggle px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center space-x-2 ml-96 transition duration-300 ease-in-out transform hover:scale-110"
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
