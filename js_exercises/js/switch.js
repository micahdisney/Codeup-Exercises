/**
 * Created by micahdisney on 4/10/17.
 */
"use strict";

var luckyNumber = Math.floor(Math.random()* 6);
var purchase = 60;
var total;

switch (luckyNumber) {
    case 1:
        console.log("You got a 10% discount");
        total = purchase - (purchase * 0.10);
        break;
    case 2:
        console.log("You got a 25% discount");
        total = purchase - (purchase * 0.25);
        break;
    case 4:
        console.log("You got a 50% discount");
        total = purchase - (purchase * 0.50);
        break;
    case 5:
        console.log("Free purchase!");
        total = 0;
        break;
    default:
        total = 60;
        console.log("No discount!");
}

console.log("Total: $" + total.toFixed(2));





var luckyNumber = Math.floor(Math.random()* 13)

switch (luckyNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("No month here");
}