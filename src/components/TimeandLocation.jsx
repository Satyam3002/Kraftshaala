import React from "react";


const TimeandLocation = ({
   weather: {formattedLocalTime, name,country},
}) => {
  return (
     <div>
         <div className="flex items-center justify-center my-5">
              <p className="text-2xl font-extralight ">
                {formattedLocalTime}
            </p>                                          
         </div>

         <div className="flex items-center justify-center my-5">
            <p className="text-4xl font-medium">
                 {`${name}, ${country}`}
            </p>
         </div>
     </div>

     
  );

};

export default TimeandLocation;
