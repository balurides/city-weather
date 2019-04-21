
import React from 'react';

export default function TempConversion ({weather}) {
    let temp = weather.temp;
    let celsiusTemp = Math.round(temp-273.15);
    return(
        <div>
            <span>
                Temp {celsiusTemp} c
            </span>
        </div>
    )
}
