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

let userInput = prompt("Are you Happy or Sad with choices.")
    
if(userInput == "Happy"){
    console.log("Day Trip is complete")
}else if(userInput == "Sad"){
    
    destinations = ["California", "Hawaii", "Virginia", "Florida"];

    function RandomDestination(selectDestination){
        let randoDestination = selectDestination[Math.floor(Math.random() * selectDestination.length)];
        console.log(randoDestination);
    }

    RandomDestination(destinations);

    restaurant = ["Taco Bell", "Lazy Dog", "Waffle House", "Burger King"];

    function RandomRestaurant(selectRestaurant){
        let randoRestaurant = selectRestaurant[Math.floor(Math.random() * selectRestaurant.length)];
        console.log(randoRestaurant);
    }

    RandomRestaurant(restaurant);

    transportation = ["Sedan", "SUV", "Truck", "Bus", "Train"];

    function RandomTransportation(selectTransportation){
        let randoTransportation = selectTransportation[Math.floor(Math.random() * selectTransportation.length)];
        console.log(randoTransportation);
    }

    RandomTransportation(transportation);

    entertainment = ["Watch a Movie", "See a Play", "Go Rock Climbing", "Go skateboarding", "Go Snowboarding"];

    function RandomEntertainment(selectEntertainment){
        let randoEntertainment = selectEntertainment[Math.floor(Math.random() * selectEntertainment.length)];
        console.log(randoEntertainment);
    }

    RandomEntertainment(entertainment);
}