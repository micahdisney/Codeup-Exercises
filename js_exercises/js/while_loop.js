/**
 * Created by micahdisney on 4/10/17.
 */
"use strict";

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This is how you get a random number between 1 and 5
var cones = Math.floor(Math.random() * 5) + 1;



// generate number of cones to sell
var conesInventory = Math.floor(Math.random() * 50) + 50;

console.log("I have " + conesInventory + " ice cream cones in my store.")

var conesRequested;
var conesSold;

//do while loop that continues to take orders until inventory is sold out.

do {


//generate random number of cones ordered
var cones = Math.floor(Math.random() * 5) + 1;
//how to sell last few cones
if (conesInventory < conesRequested && conesInventory !== 0) {
    console.log("I cannot sell you " + conesRequested + ". I only have " + conesInventory + " left.");
    conesSold = conesInventory; // selling out inventory
} else {
    conesSold = conesRequested;
}

console.log(conesSold + " were just sold...")
console.log)"I have" + conesInventory + " left.");

//decrement inventory by cones sold
conesInventory -= conesSold;
{ while}   (conesInventory)










var i = 1;

while (i < 65536) {
    i = i * 2
    console.log(i);

}