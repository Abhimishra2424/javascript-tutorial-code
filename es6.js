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

searching and fliter in an array ///

ARRAY prototype indexof() this is method of searching
returns the first (least) index of an element within the array equal
to  an element , or -1 not found it search the element from the 0th index number

var array =['abhi','sachin','singh','hritik']
console.log(array.indexOf("sachin",0))

arrry prototype lastindexof()
return the last (greatest) index of an element within the array equal to an element
or -1 if none is found it search the element last to first

var array =['abhi','sachin','singh','hritik']
console.log(array.lastIndexOf("hritik",))

array prototype includes()
determines whether the array contains a value,
returing true or flase as appropriate.
they was forward searching

var array =['hey','hello','haha','yes']

console.log(array.includes("haha",4));

Array.prototype.find()
rturns the found element in the array , if some element in the
array satisfies the testing function, or undefined if not found
only problem is that it return only one element

const prices =[100,200,300,400,500,800,900,1000]
price < 400
const findelement = prices.find((current)=>{
    return current > 600;
})
console.log(findelement)

this is sort way faster to write
console.log( prices.find((current ) => current < 400));

Array.prototype.findIndex()

The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
Otherwise, it returns -1, indicating that no element passed the test.

const prices =[100,200,300,400,500,800,900,1000]
console.log( prices.findIndex((current ) => current < 400));

Array.prototype.filter() ******/////
this method is very use in react and node.js
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const prices =[100,200,300,400,500,800,900,1000]

const pricetag = prices.filter((element ,index,array)=>{
    return index  ;
})

console.log(pricetag)

// The following example returns all prime numbers in the array:
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    debugger
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

how to sort and compare an array ***////

Array.prototype.sort()

The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending,
built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const months =['march','jan','feb','dec','nov','april']

console.log(months.sort())

const number =[2,34,5,6,5,43,2,32,45,4,332,3,23,1]
console.log(number.sort())

prototype.compare()

const enCollator = new Intl.Collator('en');
const deCollator = new Intl.Collator('de');
const svCollator = new Intl.Collator('sv');

console.log(enCollator.compare('z', 'a') > 0);
// expected output: true

console.log(deCollator.compare('z', 'ä') > 0);
// expected output: true

console.log(svCollator.compare('z', 'ä') > 0);
// expected output: false

**** how to insert add, replace , and delete elements in array (CRUD)

Array.prototype.push()
The push() method adds one or more elements to the
end of an array and returns the new length of the array.

const animals =['pigs','goats']
const count = animals.push('chicken','sheep') // yeh add hoga last main
console.log(animals);
console.log(count)

Array.prototype.unshift() // yeh hamko start main add karke deta hai elements
The unshift() method adds one or more elements to the beginning
 of an array and returns the new length of the array.

const animals =['pigs','goats']
const count = animals.unshift('chicken','sheep')
console.log(animals);
console.log(count)

let arr = [4, 5, 6]

arr.unshift(1, 2, 3)
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6] // resetting the array

arr.unshift(1)
arr.unshift(2)
arr.unshift(3)
arr.unshift(8)
arr.unshift(0)

console.log(arr)
// [3, 2, 1, 4, 5, 6]

Array.prototype.pop()
The pop() method removes the last element from an array and
returns that element. This method changes the length of the array.

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants)
console.log(plants.pop()); // tomato is remove
console.log(plants)

Array.prototype.shift()
The shift() method removes the first element from an array and returns
that removed element. This method changes the length of the array.

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants)
console.log(plants.shift()); // broccoli is remove
console.log(plants)

8: challenge time

start karna index of delete karna uske baad new elements ko add karna

Array.prototype.splice()

The splice() method changes the contents of an array by removing or
replacing existing elements and/or adding new elements

const months =['jan','march','april','june','july'];

const newMoth = months.splice(months.length,0,"dec");
console.log(months)
console.log(newMoth) // empty array mostly  watch delete elements

update march to March
const months =['jan','march','april','june','july'];

const indexofmonth = months.indexOf('june');

if( indexofmonth  !== -1 ){
    const updatemonth =  months.splice(indexofmonth,1,"June");
    console.log(months);
}else{
    console.log('no such data found')
}

june ko delete karo
const months =['jan','march','april','june','july'];

const indexofmonth = months.indexOf('march');

if( indexofmonth  !== -1 ){
    const updatemonth =  months.splice(indexofmonth, 2);
    console.log(months);
    console.log(updatemonth)
}else{
    console.log('no such data found')
}


const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
months.splice(3, 1, 'May'); // index . ek ko hi delete kar , may ko index 3 par insert kar
console.log(months);

Array subsection Map and reduce Methods
array.prototype.map()

The Map object holds key-value pairs and remembers the original insertion
order of the keys. Any value (both objects and primitive values)
may be used as either a key or a value.

const array1 = [1,2,3,4,5,43,66,77,44,]
let newarr = array1.map((currentelement, index ,array ) =>{
    return currentelement > 43
})
console.log(newarr)
console.log(array1)

let newArr = array1.map((currentelement, index ,array)=>{
    return `index no =${index } and the value is ${currentelement} belonging to ${array}  `
})
console.log(newArr) // give new array and element

it return new array without mutating the orignal array
let newArrfor = array1.forEach((currentelement, index ,array)=>{
    return `index no =${index } and the value is ${currentelement} belonging to ${array}  `
})
console.log(newArrfor) // undefined

11.  challenge time

1 . find the square root of each element in the array

let arr = [25,36,49,64,81];
// 5*5=25
let arrsqr = arr.map(( currentelement )=> Math.sqrt(currentelement))
console.log(arrsqr)

2 . multiple each element by 2  and return only those
elements which are greater then 10

let arr = [2,3,4,6,8]

let arr2 = arr.map((currentelement)=> currentelement * 2)
.filter((currentelement)=> currentelement > 10)
.reduce((accumulator , currentelement)=> {
    return accumulator += currentelement
});
console.log(arr2)

reduce method
Array.prototype.reduce()

flatten an array means to convert the 3d and 2d array into
a single dimensional array

The reduce() method executes a reducer function
(that you provide) on each element of the array,
 resulting in single output value.

Accumulator // ek sath jama karna
Current Value
Current Index
Source Array

Your reducer function's returned value is assigned to the accumulator,
whose value is remembered across each iteration throughout the array,
and ultimately becomes the final, single resulting value

let arr = [2,3,5]

let sum = arr.reduce((accumulator , currentelement , index , array)=>{
    return accumulator += currentelement
})

console.log(sum);

let arr = [2,3,4,6,8]

let arr2 = arr.map((currentelement)=> currentelement * 2)
.filter((currentelement)=> currentelement > 10)
.reduce((accumulator , currentelement)=> {
    return accumulator *= currentelement
});
console.log(arr2)

initials values
let arr = [1,3,5]

let sum = arr.reduce((accumulator , currentelement)=>{
    debugger
  return accumulator += currentelement
},9)

console.log(sum)

converting 2d and 3d array into one dimensional  array

const arr =[['zone1','zone2'],
            ['zone3','zone4'],
            ['zone5','zone5'],
            ['zone7','zone8'],
            ['zone9','zone10'],

];

let flatarr = arr.reduce((accumulator , currentelement)=>{
      return accumulator.concat(currentelement);
})
console.log(flatarr)

STRINGS IN JAVASCRIPT ***/////////

what we will do

Escape character  *******
finding a string in a string *****
searching for a string in a string  ***** 
Extracting string parts ******
replacing string  content ****** 
Extracting string character  ****** 
other useful methods ******

section 7
a javascript string is zero or more characters wri inside quotes
javascript strings are used for storing and manipulating text
you can use single or double quotes
strings can be created as primitives
using the string() constructor

let MyName = "abhishek mishra"
console.log(MyName.length) //15

Escape character

let anysen = "we are the so-called \"vikings\" from the  north.";
console.log(anysen);

if you dont want to mess , simply use the alternate quotes

let anysen = 'we are the so-called "vikings" from the  north.';
console.log(anysen);

finding a string in a string

string.prototype.indexof(searchvalue[, formIndexof])
the indexof() mothod returns the index of (the postion of) the first
occurrence of a specified text in a string

const myBio =  'i am abhishek mishra';
console.log(myBio.indexOf("m",6));// 14

javascript counts postions from zero
0  is the first postion in a string , 1 is the  second , 2 is the third

string.prototype.lastIndexof (searchValue [, fromIndex])
returns the  index within  the  calling string object of the
last occurrence of searchvalue, or  -1 if not found.

const myBio =  'i am abhishek mishra';
console.log(myBio.lastIndexOf("mishra",3));

searching for a string in a string
string.protoype.search(regexp)
the search() method searches a string for a specified
value and returns the position of the match

Extracting string parts

there are 3 methods for extracting a part of a string

slice(start, end) *********
subsring (start, end) ******
substr (strat , length )******

the slice() method
slice () extracts a part of a string and returns the extracted part
in a new  string

the method takes 2 parameters : the start position,
and the end position ( end not included)

var str = "apple, banana, kiwi";

let res = str.slice(0, 4)
console.log(res) // appl

var str = "apple, banana, kiwi,  mongo";

let res = str.slice(7, -2)
console.log(res) //  end tak jayega and mongo ke -2 last ke word karega

var str = "apple, banana, kiwi,  mongo";

let res = str.slice(7)
console.log(res) //  7 index se sabkuch degA

 ? the slice() method selects the elements starting at teh
given start  argument , and endds at , but does not includes,
the given end arguments

 note : the original array will not changed.

   Q : Display only 280 chars of string like the one used in Twitter

let myword = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
   
let Mywords = myword.slice(0 , 280)
console.log(Mywords);
console.log(Mywords.length); // 280 

The substring() method
substring is  similar to slice()
 the diffrence is that substring () cannot accpet negative  indexs

var str = "apple, banana, kiwi,  mongo";

let res = str.substring(8, -2)
console.log(res)

 if we give negative value then the char are 
coutend from the 0th position

The substr() Method
substr () is similar to slice().

 the diff is the second parameter spcifiens the 
length of  the extracted part.

var str = "apple, banana, kiwi,  mongo";

let res = str.substr( -5)
console.log(res)// mongo


replacing string  content ****** 

String.prototype.replace ( searchFor , replacewith)

The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 
The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. 
If pattern is a string, only the first occurrence will be replaced.


const myBio = "I  am Abhishek Mishra ";

const repalcedata = myBio.replace("Mishra", "mishra");
console.log(repalcedata);


points to Remember 
1. the replace() method dose not change the string
it is called on . it returns a new string
2 . By default , the replace method replaces only the first match


3. by default, the replace () method is case sensitive 
writing MISHRA ( with upper case ) will not work

const myBio = "I  am Abhishek Mishra ";
const repalcedata = myBio.replace("mishra", "MISHRA");
console.log(repalcedata);


Extracting string character  ******  ////////

There are 3 Method for extracting string characters

charAt (position) ******
charCodeAt(position)  ******
Property access [] ******

the charAt () method
 the charAt method returns the character at a 
specified index ( postion) in a string

let str = "HELLO WORLD";
console.log(str.charAt(0)); // H


String.prototype.charCodeAt()
The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.


let str = "ABCD";
console.log(str.charCodeAt(2)); 

Q : return the unicode of the last char in a string

let str =  "HELLO WORLD"
let lastchar = str.length -1;
console.log(str.charCodeAt(lastchar)); // 68

Property access [] 
ecmascript 5 (2009) allows property access [] string

let str =  "HELLO WORLD";
console.log(str[0]);

other useful methods ******

let  MYname  = "Abhishek Mishra"
console.log(MYname.toUpperCase()); //ABHISHEK MISHRA
console.log(MYname.toLowerCase()); // abhishek mishra


the concat () method
 concat join two or more strings

let fname =  "abhishek"
let lname = "mishra"
// console.log(fname.concat(lname)); // abhishekmishra
console.log(fname.concat( " " , lname)); // abhishek  mishra give space
console.log(`${fname}  ${lname} `);

String.prototype.trim()
The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

var str = "           abhishek              "
console.log(str.trim());

coverting a  string to an Array
A string can be converted to an array with the 
split( ) method

The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  

var txt = "a,b,  |  c,d"  
console.log(txt.split(","));
console.log(txt.split(" | "));


====================================================================

      section 8        Date and time in javascript            //// 


 what we will see
Date methods ( get  and set)
Time methods ( get and set)


 javascipt date  objects reperesent a single moment in time in a
platfrom-independent format > Date objects contain a number
that represents millisecond since 1 january 1970 UTC

creating date bojets
there are 4 ways to create a new date objects

new Date()
new Date(year, month , day , hours, minutes, sec , millisec)
it takes 7 arguments
new Date(millisec)
we cannot avoid month section
new Date(date string)

new Date ()
date objects  are created with the new date () constructor

let currDate = new Date();
console.log(currDate);

console.log(new Date());

console.log(new Date().toLocaleString()); // 3/21/2021 , 3:21:10 PM

console.log(new Date().toString()); // sun mar 21  2021 15:22:51 GMT+0530 (india standard time)

Date now ()
returns the numeric value corresponding to the  current time the number
if millisec elapsed since january 1 , 1970 00:00:00 UTc

console.log(Date.now());

new Date ( year , month)
7 numbers specify year , month , day , hours , minute, second
and millisecond( in that order)
Note : javascript couts months from 0 to 11
january is  0 and december 11

var d = new Date()
console.log(d.toLocaleString());

new Date(datestring)
creates a new date objects from a date strinng

var d =  new Date("october 13, 2021 11:34:56")
console.log(d.toLocaleString()); //10/13/2021, 11:34:56 AM

millisecond()

var d = new Date (1235675765226)
console.log(d.toLocaleString()); 

Dates methods

const curDate = new Date();

// how to get the indivisual date 
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth());
console.log(curDate.getSeconds());
console.log(curDate.getDate());
console.log(curDate.getDay());


// how to set the indivisual date

const curDate = new Date();
console.log(curDate.setFullYear(2020 , 10 , 7));
console.log(curDate.setHours(6));
console.log(curDate.setMonth(2));
console.log(curDate.setTime(5));

Time methods

const curtime = new Date ();

console.log(curtime.getTime());
console.log(curtime.getHours());
console.log(curtime.getMinutes());
console.log(curtime.getSeconds());
console.log(curtime.getMilliseconds());


// how to set the indivisual time

const curtime = new Date ();

console.log(curtime.setTime(3));
console.log(curtime.setHours(7));
console.log(curtime.setMinutes(45));
console.log(curtime.setSeconds(32));
console.log(curtime.setMilliseconds(212314142));

Practice time

const time = new Date().toLocaleTimeString();
console.log(time);
const date = new Date().toLocaleDateString();
console.log(date);
