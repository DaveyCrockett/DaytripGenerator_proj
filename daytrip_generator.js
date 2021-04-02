"use strict";
let destinations = ["California", "Hawaii", "Virginia", "Florida"];
let restaurant = ["Taco Bell", "Lazy Dog", "Waffle House", "Burger King"];
let transportation = ["Sedan", "SUV", "Truck", "Bus", "Train"];
let entertainment = ["Watch a Movie", "See a Play", "Go Rock Climbing", "Go skateboarding", "Go Snowboarding"];

function RandomSelection(selectChoices){
    let randoChoices = selectChoices[Math.floor(Math.random() * selectChoices.length)];
    return randoChoices;
}
let randomDestination = RandomSelection(destinations);
let randomRestaurant = RandomSelection(restaurant);
let randomTransportation = RandomSelection(transportation);
let randomEntertainment = RandomSelection(entertainment);
console.log(randomDestination);
console.log(randomRestaurant);
console.log(randomTransportation);
console.log(randomEntertainment);

for(let index = 0; index < 10; index++){
let userInput = prompt("Are you Happy or Sad with choices.")
    
if(userInput == "Happy"){
    console.log("Day Trip is complete")
    break;
}else if(userInput == "Sad"){
    
    randomDestination = RandomSelection(destinations);

    randomRestaurant = RandomSelection(restaurant);

    randomTransportation = RandomSelection(transportation);

    randomEntertainment = RandomSelection(entertainment);

    console.log(randomDestination);
    console.log(randomRestaurant);
    console.log(randomTransportation);
    console.log(randomEntertainment);
    
}
}
