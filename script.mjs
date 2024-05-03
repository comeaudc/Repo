// Data Types

// Numbers: int & float
let num = 1; // Int
let num2 = 13.23; //Float

// Strings
let string = `Hello World`;
let string1 = 'Hello World';
let string2 = 'Hello World';

//Booleans
let boolean = true;
let bool = false;
let falseBool = 0; // Considered False
let trueBool = 1; // Considered True

// Null
let nullValue = null;

// Undefined
let notHere;

// Objects
let obj = {
  data: 123,
  data2: 'a;sdfkja',
  bool: true,
  arr: [1, 2, 3, 4],
};

// console.log(typeof 24);
// console.log(typeof 'hello');

//Arthmetic Operators
let x = 16;
let newNumber = 9;
newNumber -= 3; // newNumber is now equal to 6
newNumber /= 3; // newNumber is now equal to 2
newNumber *= 3; // newNumber is now equal to 6
newNumber %= 3; // newNumber is now equal to 0

let thisLogic = 3 > 2 || 6 == 7;
// console.log( "This Logic", thisLogic)

let thatLogic = !(3 > 2 && 6 == 6);
// console.log("That logic", thatLogic)

// console.log(true || false && true || false )

// String Concatentation
console.log(`Hello` + `World`); // outputs: Hello World
console.log(`This is ` + `a String`); // outputs: This is a String
console.log(`The number is ` + 5); // outputs: The number is 5

const example = "Baby's first string";

console.log('Hey' == 'hey');

const frost = `Nature’s first green is gold,
Her hardest hue to hold.
Her early leaf’s a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.`;

console.log(frost);

const a = 5;
const b = 10;

console.log(`'a' is assigned a value of "${a}", and 'b' is assigned a value of "${b}"."
"Therefore, 'a' plus 'b' is equal to "${a + b}".`);

console.log("'a' is assigned a value of \"" + a + ",\" and 'b' is assigned a value of \"" + b + ".\"\n" +
"Therefore, 'a' plus 'b' is equal to " + (a + b) + ".");

let moneyIWishIHad = 10000000000;
console.log(`Bank Account $${moneyIWishIHad}`)

console.log(typeof null)


let num5 = 1
num5 = num5**3
console.log(num5)