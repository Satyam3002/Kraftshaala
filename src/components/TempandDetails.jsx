import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const TempandDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} km/h`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowDown,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowUp,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <div className="flex flex-col md:gap-y-4 p-4 md:p-6">
      {/* Weather Description */}
      <div className="flex items-center justify-center py-4 text-xl md:text-2xl font-light">
        <p>{details}</p>
      </div>

      {/* Main Weather Info */}
      <div className="flex flex-col md:flex-row items-center justify-center py-4 space-y-3 md:space-y-0 md:space-x-80">
        <div className="flex-shrink-0">
          <img
            src={icon}
            alt="weather icon"
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>

        <div className="text-center">
          <p className="text-4xl md:text-5xl font-medium">{`${temp.toFixed()}°`}</p>
        </div>

        <div className="flex flex-col space-y-4 md:space-y-8 items-center md:items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm md:text-base items-center justify-center"
            >
              <Icon size={24} className="mr-1" />
              {`${title}: `}
              <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Details */}
      <div className="flex mt-3 md:mt-0 flex-row items-center justify-start text-sm md:text-base py-4 md:items-center md:justify-center md:py-6 space-x-4 overflow-x-auto">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex items-center space-x-2">
            <Icon size={24} className="text-gray-700" />
            <p className="text-center">
              {`${title}: `}
              <span className="font-medium">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempandDetails;
