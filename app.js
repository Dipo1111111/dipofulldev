// alert("hello dipo how you de ");
//   document.body.style.backgroundColor = "black";
// what do we start leaning in Javascript or js

//   1) Syntax and Basic Constructs  Understand variables, data types, operators, control structures (if statements, loops), functions, and scope.

// understand variables + data types 
// three ways to start working with variabeles 
// let, const , var 
// dont use var   , use only let or const 


// make a simple task of making  variable of my name 

// task 1 
// let variabelename = something/value
// const variabelename = something/value
// note always use a goog variable name , dont use names , like p1,n2 ,rrm23 , use good names

/*
DATA TYPES IN JAVASCRIPT 

Primitive Data Types: below
1) Number ,
2) String,
3) Boolean, 
4) Null ,
5) Undefined,
6) Bigint, 
7) Symbol 

Reference Data Types:
1) Array 
2) Object 
3) Function 
*/
// let myname = "dipo";
// make another variabelename 
// let location = '12 dash road lagos way'
// console.log(myname)
/// before you start solving a problem you will start with a variabelename
// pamalcacal
// let myName = 'mayowa'
// let oddNumber = 3 
// let secertKey = 'q34343242'
// console.log(true) // this is boolean 
// console.log(121321) // this is a number data type 
// console.log('string') /// this is a string data type
// console.log(null)  /// this is a null  data type
// console.log(undefined)  // this is a undefined data type
// sK// this does not  make sense 
// if you use Let it means you might change the value later on  but if you use const you wont be able to change the value later on 
// let myname = 'mayowa';
// myname = 21313;
// console.log(myname)   /// i am  console logging the variabele name
// /// it better you use const most of the time  to avoid reassing of value      !!!!!!!!!!!!!!
// const surname = 'olalekan';
// // surname = 'dipo my guy ' // the broswer and javascript will shout at us  if we do this 
// console.log(surname)


// document.addEventListener('click', function(){
//     const container = document.querySelector('.notification');
//     container.remove()
// })

/// how to store infomation in javascript  and talk about functions 

// home work what is Reference Data Types 


//storing info in JS ......................

// Array [] , Object {} , Mutiple Object in Array [{}]

// Create a simple array , note array has some built in methods

// Note this  , methods are the same things as array 

// what is method or function , a method or function is something that perform a given task 

// note ... you can use in buiit methods or you can create you own functions 

// an  array in JavaScript is a special type of object used to store multiple values in a single variable. 

//  create an array of different names and console.log it 
const names = ['mayowa', 'dipo', 'blessing', 'shola', 'bus', 'bola', 'tunde']  //  you can store a single info or mutiple info  
// types of data you can store inside an array 
// string, object , number, boolean 

// console.log(names)

// let print on array value out on the browser 

// console.log(names[0])
// console.log(names[2])
//method or function in array 
// console.log(names.includes(2232))
// console.log(names.includes('mayowa'))
// home work find out the most used array method in javascipt 
// names.pop()  // takes away the last value in a array 
// names.shift()   // take away the first value in a array
// console.log(names)

/// pop , shift , unshif, concat , findIndex, map , map, filter , fill , slice  and many other more ,

// prop in array is called length

// all this method or function live inside of an array 

const arr1 = ['name 1 ', 'name 2 ', 'name 3 ', 'name 4']

const arr2 = ['london 1', 'london 1', 'london 2', 'london 3']

// const joinArray = arr1.concat(arr2)
// console.log(joinArray)

// console.log(arr2[3])
/// object , 
// object are key values pairs 

const person = {
    name: 'mayowa',
    age: 14,
    level: 3,
    location: 'london road lagos',
    name: 'dipo',
    age: 44
}

// object has props 
// console.log(person)
// console.log(person.name)
// console.log(person.level)
// console.log(person.location)


// operators, control structures (if statements, loops), functions
// operators Below 

// JavaScript Arithmetic Operators
// JavaScript Assignment Operators , === , ==
// JavaScript Comparison Operators
// JavaScript Logical Operators
// Type Operators


//  Arithmetic Operators   ======     + , - , % , * , / 
const num1 = 12
const num2 = 10;

// console.log(  num1 + num2  )
// console.log(num1 - num2)
// console.log(num1 % num2)
// console.log(num1 * num2)
// console.log(num1 / num2)




// control structures (if statements, switch ,  loops),

// we make decsion in javascript/application with   (  if statment , switch , loops  , Break , Continue) 


// if statwment , we have if , else if , else 
//note , you can add muitple else if to your if statement 

//a simple task check if the car is free for pickup 

// const myCar = 'benz';

// if(myCar === 'benz'){
//     console.log('this is a benz and if for no pick up')
// }
// else{
//     console.log('toyota is ready for pick up !!!!!')
// }



// const myName = 'mayowa';;
// // do a if statement to check if your name is dipo

// if (myName === 'mayowa'){
//     console.log('hello my name is mayowa')
// }else{
//     console.log('hello my name is dipo ')
// }

// const mycolor = 'blue dipo'

// if (mycolor === 'red') {
//     console.log('color is red')

// } else if (mycolor === 'green') {

//     console.log('color is green')

// } else if (mycolor === 'yellow') {

//     console.log('color is yellow')

// } else if (mycolor === 'blue') {

//     console.log('color is blue')
// }

// else {
//     console.log('sorry no color was chooson!!')
// }

/// note in some case your condition  ends with just if statement no else or else if 

// do a calulator with if statment 


// const number1 = 1;
// const number2 = 1;
// const sign  = 'ppp'
// // - , * , / , %  

// if (sign === '+'){
//     console.log(number1 + number2)
// }else if(sign === '-'){

//     console.log(number1 + number2 )
// }
// else{
//     console.log('sign is not correct')
// }

// a bit adavacned calulator with the promte method 
// there are some in buit method/function in javascript browser 
// always remember method/function are things tha performs a task!!!

// example of in buit method in javascript 
//  console.log(), prompt(), confirm(), alert(), 

// 
// const enterName = prompt('what your name ..')

// const sign = prompt('enter your sign ........')

// const number1 = parseInt( prompt('enter the first number ') ) 

// const number2 = parseInt(prompt('enter the second number ')) 

// let result;



// if (sign === '+') {
//     result = number1 + number2;
//     console.log(result)
// }   else if (sign === "-") {
//     result = number1 - number2;
//     console.log(result)
// }   else if (sign === "*") {
//     result = number1 * number2;
//     console.log(result)
// }   else if (sign === "/") {
//     result = number1 / number2;
//     console.log(result)
// }   else if (sign === "%") {
//     result = number1 % number2;
//     console.log(result)
// }   else {
//     console.log('sorry the sign you enter mr or mrs ' + enterName + 'is worng')
// }

// const enterName = prompt('what your name ..')

// const sign = prompt('enter your sign ........')

// const number1 = parseInt(prompt('enter the first number '))

// const number2 = parseInt(prompt('enter the second number '))

// let result;
// switch (sign) {
//     case '+':
//         result = number1 + number2;
//         console.log(result)
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log(result)
//         break;
//     case '/':
//         result = number1 / number2;
//         console.log(result)
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(result)
//         break;
//     case '%':
//         result = number1 % number2;
//         console.log(result)
//         break;
//     default: consol.log('sorry the sign you enter mr or mrs ' + enterName + 'is worng')
// }

// Age Verifier Chatgpt vsn
// var age = prompt("Please enter your age:");

// age = Number(age);


// if (age) {
//     alert("Please enter a valid number.");
// } else if (age < 18) {
//     console.log("Sorry, you are not old enough to drive.");
// } else {
//     console.log("You are old enough to drive!");
// }

// // Age verifier Dipo vsn

// const age = parseInt(prompt('Please enter your age:'))

// let result;

// if (age < 18) {
//     console.log('Sorry, you are not old enough to drive.')
// } else {
//     console.log('You are old enough to drive!')
// }

// Temperature Checker Chatgpt version 

// Prompt the user to enter a temperature in Celsius
// var temperature = prompt("Please enter the temperature in Celsius:");

// Convert the entered temperature to a number
// temperature = Number(temperature);

// Check if the entered temperature is a valid number
// if (isNaN(temperature)) {
//     alert("Please enter a valid number.");
// } else if (temperature > 30) {
//     alert("It's a hot day!");
// } else {
//     alert("It's not very hot today.");
// }

// Temperature Checker Dipo vsn

// const temperature = parseInt(prompt('Please enter the temperature'))

// let result;

// if (temperature > 30) {
//     console.log("It's a hot day!");
// } else {
//     console.log("It's not very hot today.")
// }

// Login system 

// const username = prompt('Please enter your username') 

// const password = prompt('Enter your Password')

// let result; 

// if (username === "" || password === "") {
//     console.log("Please fill in all fields.")
// } else {
//     console.log("Login successful")
// }

// Template LIterals
// in JavaScript, template literals are a feature that allows you to work
//  with strings more flexibly and powerfully than with traditional string literals. 
// They are enclosed by backticks (`) rather than single quotes (') or double quotes ("). 



// 8/19/2024 
// if statement , switch , functions 
//  1  aissignment find out types of loops in javascript 

//Today will be about Functions.................

// with JavaScript we can make our page funtional
///note one thing ... built in functions and custom functions 
/* 

Built in function are functions that live in the  browsers  for a particular purpose 

While custom functions are created by developer to use for a purpose

*/


//Note there are three types of functions 
// working on functions 
// make a function to say mutiple names  
function sayname() {
    ///  you put your function logic inside here 
    ///  note alway use return keyword inside your function 
}
// call your function to make your function work 
function sayHello(name, age) {   //   parameters are used inside your functions parenteless 
    return `Hello my name is   ${name} and i am ${age} years old`
}
// console.log(sayHello('Mayowa', 34))  // while agurement are used outside your functions parentless
// console.log(sayHello('Dipo', 24))
// console.log(sayHello('Mayowa',34))  // while agurement are used outside your functions parentless
// console.log(sayHello('Dipo',24))

function sayState(countryName) {
    return `The name of this counrtry is ${countryName}`
}
// console.log(sayState('Nigiera'))
// console.log(sayState('Ghana'))
// console.log(sayState('USA'))

// make a function to turn the  page to color of choice
function changePageBlack() {
    document.body.style.backgroundColor = 'green'
}
changePageBlack()




/// build an app for state in  9ja ... make a function to check if the state selected existed 

function myState(searchState) {
    if (searchState === 'Lagos') {
        return 'You are welcome to Lagos '
    } else if (searchState === 'Oyo') {
        return 'You are welcome to Oyo'
    } else if (searchState === 'Ekiti') {
        return 'You  are welcome to Ekiti'
    }
    else {
        return 'Ha you did not pick any state please choose one'
    }
}

// console.log( myState(  'Ekiti'  )  )  /// this funtions as been called 
//note ajuement and prameter are working hand to hand 



// // working with funtions and array's 
// const studentNames = ['dipo', 'shola', 'admend', 'funke', 'sara']
// function workArray(foundname){
//     if(foundname === studentNames[0] ||  )
// }

// Logical operator && , ||  !=
// &&  means if somethig is true 
// || means if something is not really true just pick one 

const color = 'red'
const secondColor = 'green'
const thirdColor = 'yellow'
// && And  note all must be correct 
// if(color === 'red' &&  secondColor === 'green' && thirdColor === 'yellow'){
//     console.log('these color are correct.................')
// }else{
//     console.log('sorry no color match ')
// }

// //  || or  note , one must be correct 
if (color === 'dipo' || secondColor === 'house' || thirdColor === 'yellow') {
    console.log('these color are correct.................')
} else {
    console.log('sorry no color match ')
}

// working with funtions and array's 
const studentNames = ['dipo', 'shola', 'admend', 'funke', 'sara']
function workArray(foundname) {
    /// longer code 
    if (foundname === studentNames[0]) {
        return `You choose name ${foundname}`
    } else if (foundname === studentNames[1]) {
        return `You choose name ${foundname}`
    } else {
        return 'No name was choosen '
    }

    /// more shorter code 
    // if (foundname === studentNames[0] || foundname === studentNames[1]  || foundname === studentNames[2]) {
    //     return `You choose the name ${foundname}`
    // } else {
    //     return 'You didnt choose any name '
    // }

}
console.log(workArray('admend'))

// classwork  const studentNames = ['dipo', 'shola', 'admend', 'funke', 'sara']
// chnage to an object 

const groupStudent ={
    name1:'dipo',
    name2:'shola',
    name3:'admend',
    name4:'funke',
    name5:'sara'
}

function checkName(checkmyname){
    if(checkmyname === groupStudent.name1 || checkmyname === groupStudent.name2){

    }else{
           return 'No name was choosen '
    }
}
    
changePageBlack()  // call the function to work 

// Note you  use if statement , switch , loop, and other things inside function for what you wanna produce or make in your web app or even mobile app 

// let if statment pluse function 


function calulatorApp(sign, digitone, digittwo) {
    //logic 
    
    if (sign === '+') {
        return digitone + digittwo
    } else {
        return ' no sign was choosen'
    }

}


console.log(calulatorApp('+', 10 , 10 ))

console.log(calulatorApp('%' , 3, 10))


// Comparison Operators  ,  === , ==
//  == is use in array or object 
// ===  is use is string to string  , number to number , boolean to boolean 

// // example 
// const x = ['dipo', 'mayowa', 'sara']
// // console.log(  x[2]    )
// const y = ['dipo']

// if (x[0] == y[0]) {
//     console.log('working')
// }else{
//     console.log('not working')
// }
