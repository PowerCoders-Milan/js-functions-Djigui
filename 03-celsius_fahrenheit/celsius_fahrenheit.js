// define a function multiplyByNineFifths(number)
const multiplyByNineFifths = (X) => {
    //return number*(9/5)
    return X * (9 / 5)
    // define a function getFahrenheit(celsius)
}
const getFahrenheit = (p) => {
    // return multiplyByNineFifths(celsius) + 32;
    return multiplyByNineFifths(p) + 32;
}
console.log(getFahrenheit(40)); // call getFahrenheit();
// do the same thing starting from Fahrenheit to Celsius
//`°C = (°F − 32) × 5/9`
const celsiuConverssione = y => {
    return y-32;
}
const celsiUscon = risultato => {
    return celsiuConverssione(risultato) * 5/9 ;
}
console.log(Math.round(celsiUscon(273)));