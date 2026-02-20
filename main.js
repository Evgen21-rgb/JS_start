// depsit
const depositAmount = 1000;
const yearlyRate = 15;
const depositTermInYears = 2;
//
 function wrapper() {
  function getDepositIncome(amount, rate, term) {
  let depositIncome = 0;
 let count = 0;

  while (count < term) {
    depositIncome = depositIncome + amount * (rate / 100);
    count = count + 1;
  }
  return depositIncome;
}
const income_1 = getDepositIncome(
  depositAmount,
  yearlyRate,
  depositTermInYears,)
 console.log(income_1);
 }
wrapper()

// const depositIncome_2 = getDepositIncome(1500, 16, 3);
// const totalIncome = depositIncome_1 + depositIncome_2;

// console.log(totalIncome);





// function makeTea(cups, tea) {
//     console.log("Brewing" + cups + " cups of " + tea);
// }

// // правильный вызов функции
// makeTea(3, "Earl Grey")

// // недостающие аргументы функции
// makeTea(3)

// //"лишние" аргументы функций
// makeTea(3, "Earl Grey", "hey ma!" , 42);

// // аргументы переданы в неверном порядке
// makeTea("Earl Grey" , 3)

// // функция без параметров
// function barkAThemoon() {
// console.log("Woooooooooooo");
// }
//  barkAThemoon();

// let dogName = "rover";
// let dogWeigt = 23;
// if(dogWeigt > 20) {
//     console.log(dogName + "says WOOF  WOOF");
// } else {
//     console.log(dogName + "says woof woof");
// }
// dogName = "spot";
// dogWeigt = 13;
// if(dogWeigt > 20) {
//     console.log(dogName + "says WOOF  WOOF");
// } else {
//     console.log(dogName + "says woof woof");
// }
// dogName = "spike";
// dogWeigt = 53;
// if(dogWeigt > 20) {
//     console.log(dogName + "says WOOF  WOOF");
// } else {
//     console.log(dogName + "says woof woof");
// }
// dogName = "lady";
// dogWeigt = 17;
// if(dogWeigt > 20) {
//     console.log(dogName + "says WOOF  WOOF");
// } else {
//     console.log(dogName + "says woof woof");
// }

// function bark (name, weigt) {
//     if(weigt > 20) {
//     console.log(name + "says WOOF  WOOF");
// } else {
//     console.log(name + "says woof woof");
// }
// }
// bark("rover", 23)
// bark("spot", 13)
// bark("spike", 53)
// bark("lady", 17)

// const location_1 = 3;
// const location_2 = 4;
// const location_3 = 5;

// const guess = 4;
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

// const inStock = true;
// const onSale = false

// if(inStock === true){
//     if(onSale === true){
//         alert("Buy!!!")
//     }
// }

// if(inStock && onSale){
//     alert("Buy!!!")
// }

// const price = 100;

// if(inStock  && (onSale || price < 80)){
// alert("Buy!!!")
// }
// //     alert("Buy!!!");

// const temp = 83
// const willRain = true;
// const humid = (willRain && temp > 80);

// console.log(humid);

// // const buyIt = (onSale && inStock) // true

// const buyIt =(onSale && inStock) // false

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
