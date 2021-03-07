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
not euqal
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