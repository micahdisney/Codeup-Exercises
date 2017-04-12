/**
 * Created by micahdisney on 4/12/17.
 */
"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var userName = "";

while (userName === "") {
    userName = prompt("Hi, what is your name?")
}

// TODO: Show an alert message that welcomes the user based on their input.

alert("Greeting, " + userName + "!");

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var response = confirm("Do you like pizza, " + userName + "?????");

if (response) {
    alert("Woohooo!");
} else {
    alert("too bad");
}




