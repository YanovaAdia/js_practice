'use strict';

function logger() {
    console.log('Hello world!');
}

logger();


function foodTray(mainDish, beverage) {
    console.log(mainDish, beverage);
    const tray = 'one ' + mainDish + ' and one ' + beverage + ' coming up!';
    return tray;
}

const order1 = foodTray('pizza', 'soda');
console.log(order1);
console.log(foodTray('burger', 'juice'));
