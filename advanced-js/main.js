//  2️⃣: Higher Order Function
// function which takes another function as an arguments is called HOF
//  wo function jo dusre function ko as an argument accept krta hai use HOF

//   3️⃣: Callback Function
//   function which get passed as an argument to another function is called CBF
//   A callback function is a function that is passed as an argument to
//   another function, to be “called back” at a later time.

// we need to create a calculator
//  yeh jo add and sub , mult hai isko ham bolenge callback fun
// const add = (a,b) =>{
//     return a + b;
// }

// const sub = (a,b) =>{
//     return Math.abs(a-b);
// }

// const mult = (a,b) =>{
//     return a * b;
// }

// const calculator = (num1 , num2 , operator) =>{
//     return operator(num1,num2);
// }
// calculator(9,5,add) // HOF
// or jo calculator wala function hai wo  higher order function hai
// bec yeh jo fun hai dusre fun ko as a argument accept kar raha hai

// console.log(calculator(5,9,mult));

//  Jis bhi function ko hum kisi or function ke under as an arguments passed
//  krte hai then usko hum CallBack fun bolte hai

// // 🏁🏁Asynchronous JavaScript

// 1 : Hoisting in JavaScript

//  we have a creation phase and execution phase.

//  Hoisting in Javascript is a mechanism where variables and functions
// declarations are moved to the top of their scope before the code execute.

// For Example 👇

// console.log(myName);
// var myName;
// myName = "abhi";

// How it will be in output during creation phase

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = "abhi";

// 😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword
// instead of var. (The other difference is that variables declared
// with let are local to the surrounding block, not the entire function.)

//  2 : What is Scope Chain and Lexical Scoping in JavaScript?

//  The scope chain is used to resolve the value of variable names
//  in JS.

//  scope chain in js is lexically defined, which means that we can
// see what the scope chain will be by looking at the code.

// At the top, we have the Global Scope, which is the window Object
// in the browser.

// Lexical Scoping means Now, the inner function can get access to
// their parent functions variables But the vice-versa is not true.

//  let a = "hello"; // global scope

//  const first = () =>{
//      let b  = "how are you";

//      const second = () =>{
//          let c  = "i am good"
//         //  console.log(`${a+b+c}`);
//      }
//      second();
//      console.log(a+b+c);
//  }
//  first();

// // 3   :  What is Closures in JavaScript 🤔

// // A closure is the combination of a function bundled together (enclosed) with references
// // to its surrounding state (the lexical environment).

// // In other words, a closure gives you
// // access to an outer function’s scope from an inner function.

// // In JavaScript, closures are created every time a function is created, at function creation time.
// debugger;
// function x () {
//     var a = 24 ;

//     function y () {
//         console.log(a);
//     }
//     y();
// }
// x();

// // For Example 👇

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//       let sum = a+b;
//       console.log(`the sum of the two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);

// // it same like lexical scoping

// // One more Example 👇

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`the sum of the two no is ${sum}`);
//   }
//   return innerFun;
// }
// let checkClousure = outerFun(5);
// console.dir(checkClousure);

// function x () {
//     var a = 5;
//     return function y (){
//         console.log(a);
//     }
// }
// var z = x();
// console.log(z);
// z();

// here we are trying to  call the z(); outside and a variable not in the global scope
// function is very beautiful when they returned the function they still maintain their lexical scope
// they remember actual reference variable a and they still remember enclosed lexical value

// function outest () {
//     var c = 10;
//     function outer (b){

//         function inner (){
//         console.log(a , b , c);
//         }
//         let a= 30
//         return inner;
//     }
//     return outer;
// }
// var close = outest()("hello");
// close();

// data privacy using closure
// function counter() {
//   var conut = 0;

//    return function incrementconunetr() {
//     conut++;
//   }
// }
// var conut1 = counter()
