// function statement  is aka function declaration

// function a(){
//     console.log("hello");
// }
// a();

//  function Expression  
//  in here funcation act like a value

// var b = function () {
//     console.log('hello world');
// }
// b();

// Anonymous Function

// function (){

// }

// Named function Expression

// var b = function xyz (){
//     console.log('hello');
//    console.log(xyz);
// }
// b();

// Diff between Parameter And arguments?

// var b = function(para1, para2){ // this is parameter
//   console.log("this is parameter");
// };
// b(1,2); //arguments


// First class functions

// first class citizens

// For example, in such a language, a function can be 
// passed as an argument to other functions, can be returned
//  by another 
// function and can be assigned as a value to a variable.

// const foo = function (){
//     console.log("hello");
// }

// // invoke it using the variable
// foo();

// function sayhello(){
//     return "hello";
// }
// function greeting(hello, name){
//     console.log(hello() + name);
// }
// greeting(sayhello, "javascript")

// function hello (){
//     return  function () {
//            console.log("hello");
//     }
// }

// const mynewfun = hello ()
// console.log(mynewfun);

// Arrow functions


// const a = () => {console.log("hello");}
// a();

// callback function 
// debugger
// setTimeout(function(){
//     console.log("timer");
// }, 1000);

// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// });