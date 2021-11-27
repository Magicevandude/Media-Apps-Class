
let x = 10;
let y = 10;
let xVel = 1;
let yVel = 1;


let car1 = {
    make: "Mercedes Benz",
    model: "E55 AMG",
    year: 2006,
    topspeed: 200,
    horsepower: 500,
    engine: "M113K",
    capacity: "5 Passengers",
    zeroto60time: 4.3,
    miles: 0,


};

console.log(car1.year,car1.make,car1.model);

function findmileage() {
    car1.miles = 46500;
    console.log(car1.miles);


}

