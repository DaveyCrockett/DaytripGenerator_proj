"use strict";
let destinations = ["California", "Hawaii", "Virginia", "Florida"];

    function RandomDestination(selectDestination){
        let randoDestination = selectDestination[Math.floor(Math.random() * selectDestination.length)];
        console.log(randoDestination);
    }

    RandomDestination(destinations);

    let restaurant = ["Taco Bell", "Lazy Dog", "Waffle House", "Burger King"];

    function RandomRestaurant(selectRestaurant){
        let randoRestaurant = selectRestaurant[Math.floor(Math.random() * selectRestaurant.length)];
        console.log(randoRestaurant);
    }

    RandomRestaurant(restaurant);

    let transportation = ["Sedan", "SUV", "Truck", "Bus", "Train"];

    function RandomTransportation(selectTransportation){
        let randoTransportation = selectTransportation[Math.floor(Math.random() * selectTransportation.length)];
        console.log(randoTransportation);
    }

    RandomTransportation(transportation);

    let entertainment = ["Watch a Movie", "See a Play", "Go Rock Climbing", "Go skateboarding", "Go Snowboarding"];

    function RandomEntertainment(selectEntertainment){
        let randoEntertainment = selectEntertainment[Math.floor(Math.random() * selectEntertainment.length)];
        console.log(randoEntertainment);
    }

for(let index = 0; index < 3; index++){
let userInput = prompt("Are you Happy or Sad with choices.")
    
if(userInput == "Happy"){
    console.log("Day Trip is complete")
    break;
}else if(userInput == "Sad"){
    
    RandomDestination(destinations);

    RandomRestaurant(restaurant);

    RandomTransportation(transportation);

    RandomEntertainment(entertainment);
    
}
}