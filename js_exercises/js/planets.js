/**
 * Created by micahdisney on 4/12/17.
 */

(function(){
    "use strict";

        // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
        var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

        // function for logging the planets array
        function logPlanets() {
            console.log("Here is the list of planets:");
            console.log(planets);
            console.log("---- ---- ---- ----");
        }

        logPlanets();

        console.log('Adding "The Sun" to the beginning of the planets array.');
        planets.unshift("The Sun");
        // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        logPlanets();

        console.log('Adding "Pluto" to the end of the planets array.');
        planets.push("Pluto");
        // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        logPlanets();

        console.log('Removing "The Sun" from the beginning of the planets array.');
        planets.shift()
        // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        logPlanets();

        console.log('Removing "Pluto" from the end of the planets array.');
        planets.pop();
        // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        logPlanets();

        console.log('Finding and logging the index of "Earth" in the planets array.');
        var indexOfEarth = planets.indexOf("Earth");
        console.log(indexOfEarth);
        // TODO: Read the console.log() statement above. Write code to perform the step it describes.

        console.log('Using splice to remove the planet after "Earth".');
        var planetAfterEarth = planets.splice(indexOfEarth + 1, 1);
        logPlanets();
        // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        logPlanets();

        console.log('Using splice to add back the planet after "Earth".');
        planets.splice(indexOfEarth + 1, 0, planetAfterEarth[0]);
        // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        logPlanets();

        console.log("Reversing the order of the planets array.");
        planets.reverse();
        // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        logPlanets();

        console.log("Sorting the planets array.");
        planets.sort(),
            // TODO: Read the console.log() statement above. Write code to perform the step it describes.
            logPlanets();


})();