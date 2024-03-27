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

// const food = ['pizza', 'burger', 'soda', 'juice'];
// console.log(food);
// console.log(food[1]);

// console.log(food.length);
// food[2] = 'water';
// console.log(food);

// food.push('fries');
// console.log(food);

// food.unshift('bread');
// console.log(food);

// food.pop();
// console.log(food);

// food.shift();
// console.log(food);

// console.log(food.indexOf('burger'));
// console.log(food.includes('water'));

// challenge 2

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(calcTip(100));

// const bills = [125, 55, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]

// console.log(bills)
// console.log(tips)
// console.log(total)

// const objCar = {
//     model : 'Trueno AE86',
//     manufacturer : 'Toyota',
//     color : ['White', 'Black'],
//     year : 1977
// }

// console.log(objCar.model)
// console.log(objCar['year'])

// objCar.secondHand = true;
// objCar['accident'] = false;

// console.log(objCar)

// const foods = {
//     food_list : ['burger 🍔', 'pizza 🍕', 'noodle 🍜'],
//     favorite: 'pizza 🍕'
// }

// console.log(`i have ${foods['food_list'].length} foods in my table, and my favorite is ${foods.favorite}`)

const objCar = {
    model : 'Trueno AE86',
    manufacturer : 'Toyota',
    color : ['White', 'Black'],
    year : 1977,
    secondHand : true,
    accident : false,


    calcYear: function() {
        this.age = 2024 - this.year;
        return this.age
    },

    summary: function () {
        return `The car ${this.model} is ${this.calcYear()} years old and ${this.isAccident ? 'never been in a' : 'has been in an'} accident`
    }
}

console.log(objCar.summary())