import React from "react";

const TimeandLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-center my-3 md:my-5">
        <p className="text-xl md:text-2xl font-extralight">
          {formattedLocalTime}
        </p>
      </div>

      <div className="flex items-center justify-center my-3 md:my-5">
        <p className="text-2xl md:text-4xl font-medium">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
};

export default TimeandLocation;
