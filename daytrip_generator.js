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