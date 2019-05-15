
import React from 'react';

export default function TempConversion ({city,weather}) {
    let temp = weather.temp;
    console.log("temp conversion " + city);
    let celsiusTemp = Math.round(temp-273.15);
    return(
        <div>
            <span>
                Temp {celsiusTemp} c at {city}
            </span>
        </div>
    )
}
