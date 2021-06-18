// define an arrow function that return the maximum between 3 random numbers

    // use a conditional statement inside the function to understand wich number is the greatest one


// declare 3 variables and assign random numbers to them

// call the function passing the numbers as arguments
const greatestNumber = (number1, number2, number3) => {

}
if (number1 >= number2 && number1 > number3) {
    return number1;    
} else if (number2 < number1 && number2 > number3) {
    return number2;
} else {
    return number3;
}


let X = Math.ceil(Math.random()*100)
let y = Math.ceil(Math.random()*100)
let z = Math.ceil(Math.random()*100)

console.log(`${x} ${y} ${z} is the greatest number`)
console.log(`${greatestNumber(x, y, z)}`)

