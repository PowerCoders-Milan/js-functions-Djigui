// define a function that will check if I can vote or not
const canIVote = Age => {
    // define a variable legalAge
const legalAge = 18;
    // create if else statement that console.log() if you can vote or not
    if (Age >= legalAge) {
        console.log("you can Vote!!");
    } else {
        console.log("you can not vote!!");
}
}
        canIVote(28);
        console.log("******");
    
        canIVote(12);


let elezione = Age => {
    let bestAge = 18
    if (Age > bestAge) {
        console.log("can eat a apple");

    } if ( Age >= bestAge) {
        console.log( " can eat a apple and a mango ");

    } else {
        console.log( " can't eat apple not mango");

    }
}
elezione(18)
console.log("     ")
elezione(22);

const viaggiare = andare => {
    let viaggio = napoli
    if (viaggio = andare) {
        console.log("andiamo a napoli ")
    }
    else {
        console.log( "non si va a napoli");

    }

}
  

const mamma = papa => {
    let salif = 19;
if ( salif >= papa) {
console.log("allora salif e troppo grande ");

}else  {
    console.log( "altrimenti papa e molto grande di salif");

}

}
mamma(20);



let me =19
let medam = 29;
if (me >= medam) {
    console.log("allora adama deve pagare ");

} else {
    console.log("allora dovro pagare io perche ho detto una cosa sbagliato ");

}

let x = 20;
let z = 201;
if ( x >= z ) {
    console.log( "allora x è un numero più fortunato in ");
   
    } else if( z > x  ) {
        console.log("allora z è davvero quello che bisognava  ");
    } 
let g1 = 200;
for(let i = g1; i--;) { 
console.log(i);
}
let array2 = ['HHH', 'GGG', 'FFF',  'GEGG',  ];

array2.forEach(element =>{
    console.log(element)});
  
const reverse = array2.reverse(" ");

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
//ject esecitazione
const persona = {
    nome: 'salif',
    cognome: 'adama',
    interessi: ['viaggi', 'feste', 'cene', 'uscite', 'danza'],
} 
console.log(persona);


let i = 20;
for ( let z = i; z++;) {
  
}    while( z >= 100) {
    console.log(z);
}
