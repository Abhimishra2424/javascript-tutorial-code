// 👉 object oriented Javascript

// Object literal is simply a key:value pair data structure.

// Storing variables and functions together in one container,
// we can refer this as an Objects.

// object = school bag

// How to create an Object?

// 1st way

//  let bioData = {
//      Myname : 'abhi',
//      Myage : 20,
//      getdata : ()=>{
//          console.log(`My name is ${bioData.Myname} and myage is ${bioData.Myage}`);
//      }
//  }
// bioData.getdata();

// 2nd way no need to write functions as well after es6

// let bioData = {
//     Myname : 'abhi',
//     Myage : 20,
//     getdata (){
//         console.log(`My name is ${bioData.Myname} and myage is ${bioData.Myage}`);
//     }
// }
// bioData.getdata();

// 👉 What if we want object as a value inside an Object

// let bioData = {
//   Myname: {
//     realName: "abhishek vinod mishra",
//     mybroName: "anurag",
//   },
//   Myage: 20,
//   getdata() {
//     console.log(`My name is ${bioData.Myname} and myage is ${bioData.Myage}`);
//   },
// };

// console.log(bioData.Myname.mybroName);

// bioData.getdata();


// 2️⃣ What is this Object?

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed. 

// for Example 1

// console.log(this.alert("hello"));
// it refers to the current context and that is window global object 


// // ex 2 

// function myName() {
//     console.log(this);
// }
// myName();

// ex 3

// var myNames = "abhi";
// function myName(){
//     console.log(this.myNames);
// }

// myName();

// ex 4

// const obj = {
//     myage :20,
//     myname(){
//         console.log(this.myage);
//     }
// }

// obj.myname();

// // ex 5 
// // this object will not work with arrow function bcz arrow function is bound to class.

// const obj = {
//     myage :20,
//     myname:() => {
//         console.log(this);
//     }
// }

// obj.myname();

// // ex 6

// let bioData = {
//     myName : {
//         realName : "Abhishek mishra",
//         channelName : 'clever developer'
//     },
//     // things to remember is that the myName is the key and the object is act like a value 
//     myAge : 26,
//     getData (){
//       console.log(`My name is ${this.myName.realName} and my age is ${this.myAge} `);
//     }
//   }

//   bioData.getData();
