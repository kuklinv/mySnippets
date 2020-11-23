// whi factory better then object

//object:
class RocketShip {
    constructor(color){
        this.color = color;
    }
    fly(){
        console.log(`The ${this.color} rocketship is flying!`)
    }
    land(){
        console.log(`The ${this.color} rocketship has landed.`)
    }
}
const r1 = new RocketShip('blue');
r1.fly()
r1.land()
console.log(r1.color)
// #=> The blue rocketship is flying!
//     #=> The blue rocketship has landed.
//     #=> blue

//problem1: public properties
r1.color = 'sad'
console.log(r1.color)
r1.fly()
// #=> sad
// #=>The sad rocketship is flying!

// Problem 2: the “this” keyword


// ! Build a Factory-Based Rocket Ship///////////!!!!!!!!!!!!!!
const RocketShipFactory = (c) => {
    const color = c

    return {
        fly: () => console.log(`The ${color} rocketship has launched.`),
        land: () => console.log(`The ${color} rocketship has landed.`)
    }
}
const r2 = RocketShipFactory('pink')
r2.fly()
r2.land()
// #=> "The pink rocketship has launched."
// #=> "The pink rocketship has landed."

r2.color = 'purple'
r2.fly()
// #=> "The pink rocketship has launched."

//Easy peazy! No code smell at all here.
