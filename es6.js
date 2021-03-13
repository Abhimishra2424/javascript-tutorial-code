 ************************  Modern javascript  ****************************//

LET and CONST //

 var => function scope
 let and const => block scope

 var myname = "abhsiehk"
 console.log(myname);

 myname = "mishra"
 console.log(myname);

let myname = "abhsiehk"
console.log(myname);

myname = "mishra"
console.log(myname);

const myname = "abhsiehk"
console.log(myname);

myname = "mishra"
console.log(myname);

function bio() {
  const myfirstname = "abhsiehk";
  console.log(myfirstname);

  if (true) {
    const mylastname = "mishar";
    console.log("inner " + mylastname);
    console.log("inner " + myfirstname);
  }
  console.log("innerouter " + mylastname);
}

bio();

template literals (temaplate strings)

let person = "abhi"
let age = "200"

function myTag( strings , personexp, ageexp ){
    let str0 = strings[0]; // "that"
    let str1 = strings[1];// " is a"
    let str2 = strings[2];//"."

    let agestr;
    if(ageexp > 99){
        agestr = "centenrian"

    }else{
        agestr = "youngster"
    }

    return `${str0} ${personexp}${str1}${agestr}${str2}`;
}

let output = myTag`That ${person} is a ${age}.`;

console.log(output);

default parameters
default function parameters allow named parameters to be 
initialized with default values if no value or undefined is passed 


function multi (a ,b){
  return a * b;
}

console.log(multi(2,3));


function test ( num = 1){
    console.log(typeof num)
}

test(); // "num" ( num is set to 1 )
test(undefined); // ""

function multi(a ,b=2){
    debugger;
    return a*b;
}
console.log(multi(3));

******************************** fat arror function ********************************////////

An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

Differences & Limitations:

Does not have its own bindings to this or super, and should not be used as methods.
Does not have arguments, or new.target keywords.
Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
Can not be used as constructors.
Can not use yield, within its body.



 const  sum = () => ` the sum of the two number is ${(a=5)+(b=3)} `;
console.log(sum())

const materials = [
    "abhi",
    "sachin",
    "hritik",
    "vikrant",
    "fiza",
    "anjali",
    "abhishekta",
    "diyali",
    "ankita"
]
console.log(materials.map(materials => materials.length));

************* arrays in javascripts *********************

when we are use var , we can stored only one valuse at a time

var myFriend1 ="hritik"
var myFriend1 ="sachin"
var myFriend1 ="vikrant"

it is not go  things that was implemented call many times var for one name 
so we have arrays for that

when we feel like storing multiple values in one variable then instead of var ,
we will use ARRAY

arrays is class in js



var myFriends = ["abhsihek", ' sachin', "hritik"];
console.log(myFriends.length)
console.log(myFriends.length -1)

myFriends.forEach(function(name, index) {
    console.log(name, index)
}



Topic in array

ARRAY traversal in array
navigate through an array
if we want to get  the single data at  a time and also
if we want to change the data ................

var array = ['abhi','mishra','sachin','singh'];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
if we want to check the length of elements of an array use length property
console.log(array.length);
last  value of array to check to use -1
console.log(array[array.length - 1]);
we use for loop to navigate
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}


AFter es6 we have for in and for of  loop to ******
var array = ['abhi','mishra','sachin','singh','Apple', 'Banana',"Orange","Strawberry", "Banana", "Mango"];
for(let elements in array) {
    console.log(elements);
}
for(let elements of array) {
    console.log(elements);
}


Array.prototype.foreach()
calls a  function for each element in the array

var array = ['abhi','mishra','sachin','singh','Apple',
 'Banana',"Orange","Strawberry", "Banana", "Mango"];

 foreach is combination of for in and for of
 array.forEach(function(element,index,array){
    console.log(element + " index :" + index )
 });

fat arrow function
 array.forEach((element,index,array) => {
    console.log(element + " index :" + index )
 });

 
