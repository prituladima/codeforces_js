// let a = 'Test';
var b = 'Test';
console.log();

function scope2(print) {
    var insideIf;

    if (print) {
        insideIf = '12';
    }
    console.log(insideIf);
}

scope2(true);

var a = 1;

function four() {
    if (true) {
        var a = 4;
    }
    console.log(a); // prints '4'
}

four();


function scope3(print) {
    if (print) {
        let insideIf = '12';
    }
    // console.log(insideIf);
}

scope3(true); // prints ''


var is20 = false; // boolean
typeof is20; // boolean

var age = 19;
typeof age; // number

var lastName = "Bae";
typeof lastName; // string

var fruits = ["Apple", "Banana", "Kiwi"];
typeof fruits; // object

var me = {firstName: "Sammie", lastName: "Bae"};
typeof me; // object

var nullVar = null;
typeof nullVar; // object

var function1 = function () {
    console.log(1);
}
typeof function1 // function

var blank;
typeof blank; // undefined


console.log(
    [
        typeof is20,
        typeof age,
        typeof lastName,
        typeof fruits,
        typeof me,
        typeof nullVar,
        typeof function1,
        typeof blank,
        blank
    ]
);
