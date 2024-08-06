import './App.css';
import Inputs from './components/Inputs';
import TempandDetails from './components/TempandDetails';
import TimeandLocation from './components/TimeandLocation';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './Services/weatherservice';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState({ q: "delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const getWeather = async () => {
    const message = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${message.toUpperCase()}`);

    try {
      const data = await getFormattedWeatherData({ ...query, units });
      if (data) {
        toast.success(`Fetched weather data for ${data.name},${data.country}`);
        setWeather(data);
      } else {
        toast.error("Failed to fetch weather data. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while fetching weather data. Please try again.");
    }
  };

  useEffect(() => {
    getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, units]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''} `}>
      <Inputs setQuery={setQuery} setUnits={setUnits} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      {weather && (
        <>
          <TimeandLocation weather={weather} />
          <TempandDetails weather={weather} />
          <Forecast title="3 hour step forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}
      <ToastContainer
        autoClose={2500}
        hideProgressBar={true}
        theme="colored"
        className="toast-container"  
      />
    </div>
  );
}

export default App;
