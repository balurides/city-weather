
import React from 'react';

export default function TempConversion ({unit,weather}) {
    let temp = weather.temp;
    let displayTemp,welcome;
    console.log("temp conversion " + unit);
    if(unit.includes('celisius')) {
        displayTemp = Math.round(temp-273.15);
        welcome = <div> Temp {displayTemp}c</div>;
    } else if(unit.includes('Fahrenheit')) 
        {
        displayTemp = Math.round((temp-273.15)*9/5+32);
        welcome= <div> Temp {displayTemp}F</div>
    }
    
    return(
        <div>
            {welcome}
        </div>
    )
        
}   
