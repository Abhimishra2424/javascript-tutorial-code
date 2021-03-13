//  ************************  Modern javascript  ****************************//

//LET and CONST //

//  var => function scope
//  let and const => block scope

//  var myname = "abhsiehk"
//  console.log(myname);

//  myname = "mishra"
//  console.log(myname);

// let myname = "abhsiehk"
// console.log(myname);

// myname = "mishra"
// console.log(myname);

// const myname = "abhsiehk"
// console.log(myname);

// myname = "mishra"
// console.log(myname);

// function bio() {
//   const myfirstname = "abhsiehk";
//   console.log(myfirstname);

//   if (true) {
//     const mylastname = "mishar";
//     console.log("inner " + mylastname);
//     console.log("inner " + myfirstname);
//   }
//   console.log("innerouter " + mylastname);
// }

// bio();

// template literals (temaplate strings)

// let person = "abhi"
// let age = "200"

// function myTag( strings , personexp, ageexp ){
//     let str0 = strings[0]; // "that"
//     let str1 = strings[1];// " is a"
//     let str2 = strings[2];//"."

//     let agestr;
//     if(ageexp > 99){
//         agestr = "centenrian"

//     }else{
//         agestr = "youngster"
//     }

//     return `${str0} ${personexp}${str1}${agestr}${str2}`;
// }

// let output = myTag`That ${person} is a ${age}.`;

// console.log(output);

// default parameters
// default function parameters allow named parameters to be 
// initialized with default values if no value or undefined is passed 


// function multi (a ,b){
//   return a * b;
// }

// console.log(multi(2,3));


// function test ( num = 1){
//     console.log(typeof num)
// }

// test(); // "num" ( num is set to 1 )
// test(undefined); // ""

// function multi(a ,b=2){
//     debugger;
//     return a*b;
// }
// console.log(multi(3));

// ******************************** fat arror function ********************************////////

// An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

// Differences & Limitations:

// Does not have its own bindings to this or super, and should not be used as methods.
// Does not have arguments, or new.target keywords.
// Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Can not be used as constructors.
// Can not use yield, within its body.



//  const  sum = () => ` the sum of the two number is ${(a=5)+(b=3)} `;
// console.log(sum())

// const materials = [
//     "abhi",
//     "sachin",
//     "hritik",
//     "vikrant",
//     "fiza",
//     "anjali",
//     "abhishekta",
//     "diyali",
//     "ankita"
// ]
// console.log(materials.map(materials => materials.length));

