/**
 * Created by micahdisney on 4/12/17.
 */


(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['Jim', 'Kim', 'Joe', 'Boe', 'Micah'];

    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log("there are " + names.length + " names in the names array");





    // TODO: Create log statements that will print each of the names array elements individually.
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log(names[4]);



    console.log("For loop:");

    for (var i = 0; i < names.length; i++ ) {
        console.log("Name at index: " + i + " is " + names [i]);
    }

    console.log("ForEach loop:");

    names.forEach(function (element, index, array) {
        console.log("Name at index: " + index + " is " + element);
    });




})();