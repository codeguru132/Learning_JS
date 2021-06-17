// this is my first javascript file
console.log("We love React in Uganda");
console.log("even in sudan");
//declaring a string
let name ='Martin';
console.log(name);
// variables cannot be reserved key words
// variables should have meaningful & descriptive names
// variables should not start with numbers
// they cannot contain a space or hyphem

let firstName; // this is camelCase
//also case sensitive
let FirstName;
//declaring mutiple variables
let myName = 'martin', lastName = 'Kubona';

//CONSTANTS
const interestRate = 0.3;
//interestRate = 2;
console.log(interestRate);

//TYPES
//PRIMITIVES
//Strings, numbers, undefined, null

let name1 = 'Kubona'; // String literal

let age = 34.45; // Number

let isApproved = true; //Boolean

let medianName; //undefined

let middleName = null; // null

name1 = 1

console.log(typeof(name1))

console.log(typeof(age))

console.log(typeof(isApproved))

console.log(typeof(medianName))

//OBJECTS
let person = {
    name: 'Martin',
    age: 30
}

console.log(person)
//accesssing objects prpperties
//dot-Notation
console.log(person.name)

// bracket notation
person["name"] = 'Kubona';

console.log(person.name);

//ARRAYS

let selectedColors = ["red","blue"];
selectedColors[2] = 2;
console.log(selectedColors)

console.log(typeof(selectedColors))

console.log(selectedColors.length)

//FUNCTION

function greet(name1,age) {
    console.log("Hello " + name1 + " You are " + age + " Years old");
}

//calling the function
greet('Martin',30); 
greet('Mary',20); 

function square(num){
    return num * num;
}

let number = square(3);
console.log(number)
// OBJECT LITERALS
const circle = {
    radius: 3,
    location: {
        x:1,
        y:4
    },
    draw : function(){
        console.log("Draw the circle");
    }

};

circle.draw()
console.log(circle.location.x)


// FACTORIES
//A way to duplicate an object with many methods(behaviour)

function createCircle(radius){
    return {
        radius,
        draw:function(){
            console.log("we are drawing the circle here");

        }
    }
}

const cir = createCircle(3);
cir.draw();
console.log(cir.radius);
