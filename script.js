'use strict';

// function logger() {
//     console.log('Hello world!');
// }

// logger();


// function foodTray(mainDish, beverage) {
//     console.log(mainDish, beverage);
//     const tray = 'one ' + mainDish + ' and one ' + beverage + ' coming up!';
//     return tray;
// }

// const order1 = foodTray('pizza', 'soda');
// console.log(order1);
// console.log(foodTray('burger', 'juice'));


// // Anonymous function / func expression

// const counter = function(initialNum, increment) {
//     return initialNum + increment;
// }

// const result = counter(10, 5);
// console.log(result);

// arrow function
// const counter = currentNum => currentNum + 1;
// console.log(counter(10));

// const oddOrEven = num => {
//     if (num % 2 === 0) {
//         return 'even';
//     } else {
//         return 'odd';
//     }
// }

// console.log(oddOrEven(11));

// function itemQuantity(quantity) {
//     return quantity * 10
// }

// const endTotal = (order1, order2) => {
//     const total = itemQuantity(order1) + itemQuantity(order2);
//     return total;
// }

// console.log(endTotal(2, 3));


// const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// function checkWinner(avg1, avg2){
//     if (avg1 >= 2 * avg2){
//         return `dolphins win (${avg1} vs. ${avg2})`;
//     }
//     else if (avg2 >= 2 * avg1){
//         return `koalas win (${avg2} vs. ${avg1})`;
//     }
//     else {
//         return `no team wins`;
//     }

// }

// const dolphin1 = calcAvg(44, 23, 71);
// const koalas1 = calcAvg(65, 54, 49);

// const dolphin2 = calcAvg(85, 54, 41);
// const koalas2 = calcAvg(23, 34, 27);

// console.log(checkWinner(dolphin1, koalas1));
// console.log(checkWinner(dolphin2, koalas2));

/// array

const food = ['pizza', 'burger', 'soda', 'juice'];
console.log(food);
console.log(food[1]);

console.log(food.length);
food[2] = 'water';
console.log(food);

food.push('fries');
console.log(food);

food.unshift('bread');
console.log(food);

food.pop();
console.log(food);

food.shift();
console.log(food);

console.log(food.indexOf('burger'));
console.log(food.includes('water'));