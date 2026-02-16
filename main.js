
const location_1 = 3;
const location_2 = 4;
const location_3 = 5;

const guess = 4;
// if (guess === location_1 || guess === location_2 || guess === location_3) {
//     alert("HIT!")
// } else {
//     alert("MISS!")
// }

// if(guess === location_1){
//     alert("HIT!")
// } else if (guess === location_2){
//     alert("HIT!")
// } else if (guess === location_3){
//     alert("HIT!")
// } else {
//     alert("MISS!")
// }


const inStock = true;
const onSale = false

// if(inStock === true){
//     if(onSale === true){
//         alert("Buy!!!")
//     }
// }

// if(inStock && onSale){
//     alert("Buy!!!")
// }

const price = 100;

if(inStock  && (onSale || price < 80)){
alert("Buy!!!")
}
//     alert("Buy!!!");


const temp = 83
const willRain = true;
const humid = (willRain && temp > 80);

console.log(humid);

// const buyIt = (onSale && inStock) // true

const buyIt =(onSale && inStock) // false



// let sum = +prompt("Укажите стартовую сумму", 1000 );
// const persent = 15;
// const result =2000;

// let count = 0;

// const depositTerm = +prompt("Укажите срок депозита" , 10) 

// while (count < depositTerm) {
// sum = sum + sum * (persent / 100)
// count = count + 1
// document.write(count + ": " + sum + "<br>")
// }


