/**
 * Created by micahdisney on 4/11/17.
 */
"use strict";




var random = Math.floor((Math.random()*50)+1);

console.log("Random odd number to skip is: " + random);

for (var i = 1; i < 100; i++) {

    if (i % 2 === 0) {
        //Skip the even numbers.
        continue;
    }

    if (random === i) {
        console.log("Yikes! Skipping number: " + i);
    } else {
        console.log("odd number: " + i);
    }

    if (i >= 49) {
        break;
    }

}