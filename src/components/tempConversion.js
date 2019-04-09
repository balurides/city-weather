
const TempConversion = (kevinTemp,tempTo) => {
    switch (tempTo) {
        case 'celsius':
            return kevinTemp - 273.15;
        case 'Fahrenheit':
            return ((300*kevinTemp)-273.15)*9/5 + 32;
        default:
            return kevinTemp;
    }
}

export default TempConversion();