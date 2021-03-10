1--> variable and values in js

var myname = 'abhishek mishra';
console.log(myname)

var mylist ="mongo, banna, samosa";
var myAge =28;
console.log(mylist , myAge)

var $myname = 'abhiiii'
console.log($myname)

2--> DATA TYPES IN JS

var myname ='abhishek mishra ';
console.log(typeof(myname));

var myage =24;
console.log(typeof(myage))

var iamabhi =  true;
console.log(typeof(iamabhi));

var num ="abhi";
console.log(num);
console.log(typeof(num));

var num =   'abhi' + 'mishra';
console.log( 2 - '6');
console.log(typeof(num));

interview question//////////////////////////////////////////
Difference between null vs undefined ?

var iamuseless =null;
console.log(null);
console.log(typeof(iamuseless));

var iamstandby;
console.log(iamstandby);

undefiend also knows as datatypes
interview question

what is Nan ??
console.log('abhi' - 'mishra');

var mynumber =36782687;
var myname= 'abhi'
console.log(isNaN(myname));
console.log(isNaN(mynumber));

console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(isNaN(NaN));
console.log(Number.isNaN(NaN));

--> expression and operators
5 is called operand
+ is called operator
// combination of both is called expression
var x = 5;
var y = 5;
console.log(x == y);

console.log(5+20);

////////////////////// Arithimatic operators /////////////////

console.log(3+5);
console.log(3-5);
console.log(3*5);
console.log(3/5);

// % is called moduls operator
console.log("Remainder Operator "+ 27%4);

incremenet and decrement operator/////////////////////////////
postfix , if used postfix , with operator after operand for expamle , x++
var num = 15;
var newNum = num++ + 5 ;
console.log(num);
console.log(newNum);

prefix
var num = 15;
var newNum = ++num + 5;
console.log(num);
console.log(newNum);

postfix decrement
var num = 15;
var newNum = num-- + 5;
console.log(num);
console.log(newNum);

// pretfix decrement
var num = 15;
var newNum = --num + 5;
console.log(num);
console.log(newNum);

////////comparison operators////////////

var a= 90;
var b=100;
equal
console.log(a == b);
not equal
console.log(a !== b);
greater than
console.log(a > b);
greater than equal
console.log(a >= b);
less then
console.log(a < b);
less than equal
console.log(a <= b);

/////// logical operators//////
AND (&&)
t and t = t
f and t = f
t and f  = f
var a = 10;
var b = -30;
console.log (a > b && b < 0);
OR ( || )
t or f = t
f or f = f
f or t = t
console.log ( (a < b) || ( b < -30 ) );
console.log(!false);

string operators ///////////

console.log("hello " + "world");

var myname = "abhishek"
console.log(myname + " mishra");
console.log(myname + " thapa");
console.log(myname + " kohli");

console.log(3**3);

console.log(78 - "abhi");

var a =10;
var b = 20;
// // c = b;
// // b = a;
// // a = c;
// // console.log(a);
// // console.log(b);

a = a + b ; // a = 30
b = a - b; // b = 10
a = a - b; // a = 10
console.log(a);
console.log(b);

interview question
what is Difference between == and ===
var num1 = 5
var num2 = '5';
console.log(num1);
console.log(num2);
console.log(num1 === num2);

******* Control Statement */
var tomr = 'sunny';

if(tomr == 'rain'){
  console.log('take raincoat');
}else{
  console.log("no take raincoat");
}

var year = 2020;
debugger;
if(year % 4 === 0){
  if(year % 100 === 0){
     if(year % 400 === 0){
         console.log("the year"+ year + " is a leap year")
     }else{
        console.log("the year"+ year + "is not a leap year")
     }
  }else{
       console.log("the year" + year + "is a leap year")
  }
}else{
    console.log("the year "+ year + "is not a leap year")
}

what is the truthy and falsy value in javascript
 we have 5 total falsy values in javascript
0 , "" ,  undefined , null , NaN false ,

if (NaN){
    console.log("ya we won the game")
}else{
    console.log("we loss the game")
}

condition ( ternary) operators //////
the conditional ternary is the only javascript operator
that takes three operands

var age = 18;

if(age >= 18){
    console.log("you are eligible to vote");
}else{
    console.log("you are not eligible to vote");
}
this is called ternary
var age = 17;
console.log((age > 18) ? "you can eligible to vote" : "you are not eligible to vote");

            switch Statement /////////////////
evaluates an  expression matching the expression value to a
case clause and exexutes statements associated with that case.

find the area of circle triangle and rectangles

var area = "circle";
var PI = 3.142,
  l = 5,
  b = 4,
  r = 3;
if (area == "circle") {
  console.log("the area of the circle is :" + PI * r ** 2);
} else if (area == "triangle") {
  console.log("the area of the triangle is :" + (l * b) / 2);
} else if (area == "rectangle") {
  console.log("the area of the rectangle is :" + l * b);
} else {
  console.log("please enter valid data");
}
thisisme ko This_is_me karo aisa kuch hai yeh
var input = "ThisISMe";
console.log(input.substring(0,4).toLowerCase()+"_"+input.substring(2,4).toLowerCase()+"_"+input.substring(6,8).toLowerCase());

var area = "circle";
var PI = 3.142,
  l = 5,
  b = 4,
  r = 3;
switch (area) {
  case "circle":
    console.log("the area of the circle is :" + PI * r ** 2);
    break;
  case "trianlge":
    console.log("the area of the triangle is :" + (l * b) / 2);
    break;
  case "rectangle":
    console.log("the area of the rectangle is :" + l * b);
    break;
  default:
    console.log("please enter valid data");
}

we have break statement matlab khatm
Terminates the current loop , switch , or label
statement and transfers
program control to the statement following the break statement


            while loop statement////////////////////
the while loop statement creates a loop that executes a specified statement
as long as the test condition evaluates to true

var num =0;
// block scope
while(num <= 10){
    console.log(num); // infinite loop this is called
    num++;
}

Do-while loop statement

var num = 0;
debugger;
do{
    console.log(num);
    num++; 
}while(num <= 10);

*******for loop*******////////

for(intilizer; condition ; iteration)
{

}

Statement 1 sets a variable before the loop starts (var num = 0).

Statement 2 defines the condition for the loop to run (i must be less than 10).

Statement 3 increases a value (num++) each time the code block in the loop has been executed.

for(var num = 0; num < 10; num++){
    debugger;
 console.log(num);
}

for (var i = 0; i < 5; i++) {
 console.log(i)
  }

for ( var int = 0 ; int <= 10; int++)
{
    console.log(int)
}

for(var num=1; num<= 10; num++)
{
    var table = 15;
    console.log(table + " * " + num + " =" + (table*num));
// }
// * javascript functions *///////////////////////

& what we will see in function
~function definition

* JavaScript functions are defined with the function keyword.
* A javascript function is a block of code that designed to perform a particular taks.
* You can use a function declaration or a function expression.

var a = 10;
var b = 20;
var sum = a + b;
console.log(sum)

function sum(){
    var a = 290, b = 29289289;
    var total = a + b;
    console.log(total); 
}
~Calling a function
calling the  function
defining fun does not work it
a javascript fun is executed when "something invokes it (calls it)"
sum();
~function parameter
! function parameters are  the names listed in the functions definition
~function Arguments
! function arguments are the real values passed to the function

//    ^ fun parameter vs fun arguments
function sum(a , b){  //!parameter
    var total = a + b;
    console.log(total); 
}
sum(28998,88779898); //!arguments
sum(23,4); //!arguments
// ~function expressions
// ~return keyword
// ~Anonymons function