let obj = {};
let obj1 = new Object();

let javaScriptObject = {};
let testArray = [1, 2, 3, 4];

javaScriptObject.array = testArray;
console.log(javaScriptObject); // {array: [1,2,3,4]}

javaScriptObject.title = 'Algorithms';
console.log(javaScriptObject); // {array: [1,2,3,4], title:'Algorithms'}


class ExampleClass {
    name = "JavaScript";
    sayName = function () {
        console.log(this.name);
    }
}

let example1 = new ExampleClass();

example1.sayName(); //"JavaScript"


function ExampleClass1() {
    this.name = "JavaScript";
    this.sayName = function () {
        console.log(this.name);
    }
}

//Real usage of it?
ExampleClass1.prototype.sayName = function () {
    console.log(this.name + " - > Changed");
}

//new object
let example2 = new ExampleClass1();
example2.sayName(); //"JavaScript"


function ExampleClass2(name, size) {
    var privateName = name;
    var privateSize = size;

    this.getName = function () {
        return privateName;
    }
    this.setName = function (name) {
        privateName = name;
    }

    this.getSize = function () {
        return privateSize;
    }
    this.setSize = function (size) {
        privateSize = size;
    }
}

var example3 = new ExampleClass2("Sammie", 3);
example3.setSize(12);
console.log(example3.privateName); // undefined
console.log(example3.getName()); // "Sammie"
console.log(example3.size); // undefined
console.log(example3.getSize()); // 3

//Inheritance in JS is weird
function Animal(name, animalType) {
    this.name = name;
    this.animalType = animalType;
}

Animal.prototype.sayName = function () {
    console.log(this.name);
}
Animal.prototype.sayAnimalType = function () {
    console.log(this.animalType);
}

function Dog(name) {
    Animal.call(this, name, "Dog");
}

// copy over the methods
Dog.prototype = Object.create(Animal.prototype);
var myAnimal = new Animal("ditto", "pokemon");
myAnimal.sayName(); // "ditto"
myAnimal.sayAnimalType(); // "pokemon"

var myDog = new Dog("candy", "dog");
myDog.sayName(); // "candy"
myDog.sayAnimalType(); // "dog"
