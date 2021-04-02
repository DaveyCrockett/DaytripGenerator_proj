"use strict";

let destinations = ["California", "Hawaii", "Virginia", "Florida"];

function RandomDestination(selectDestination){
    let randoDestination = selectDestination[Math.floor(Math.random() * selectDestination.length)];
    console.log(randoDestination)
}

RandomDestination(destinations);