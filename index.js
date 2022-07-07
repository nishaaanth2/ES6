
//es 6 basics
`{
Use of learning ES6
    =>reduce LOC
    =>Modern Code
    =>Rich Syntax

Concepts
    =>
    =>

Fact
    =>If you know python previously, ES6 is complete joke to u.

}`
// LS 1: Template Literals
let word1 = "nishaanth"
let word2 = "ms"
let num1 = 2
let num2 = 3
let fullName = `${word1} ${word2} ${num1+num2}`


console.log(fullName)

//also easy new line
let example= `hi
hello`

console.log(example)

// LS 2: Destructing objects

const personalInformation = { 
    fistName: "name1",
    lastName: "name 2",
    city: "Chennai",
    state: "Tamil nade"
}

const {city,state} = personalInformation
console.log(`${city} ${state}`);

const {fistName:fn, lastName:ln} = personalInformation;
console.log(`${fn} ${ln}`);

// LS 3: Destructing Array

let [wrdx1,wrdx2] = ['demon','god','sane']
wrdx2 = 'godess'

console.log(`${wrdx1},${wrdx2}`);

// LS 4: Object Literals 
function addressMaker (city,state) {
    const newAddress = {city, state} 
    //automatically creates objects as the variable name
    console.log(newAddress);
}
addressMaker('sasd','dddf')

// Objects Literals Better Example

function shakeMaker(shake) {
    const {fruit,icecream} = shake //es6 play
    
    const newShake = {
        fruit,
        icecream,
        toppings: "choco sticks"
    }

    console.log(newShake)
}
shakeMaker({fruit: 'stawberry',icecream: 'vanilla'})

//LS 5: For Loop
let incomes = [62000,45600,12000]
let total = 0

for (let income of incomes) {
    console.log(income);
    total += income;
}

console.log(total);

// string vechiyum pannalam pathuko
for (const char of fullName){
    console.log(char)
}

//LS 6: Spread Operator

let example1 = [1,2,3,4,5,6]
let example2 = [example1]
let example3 = [...example1] //spread operator will unwrap
example3.push(true)
console.log(example3);

let example4 = {
    first: 'dhanie'
}
let example5 = {
    ...example4
}

console.log(example5);

//LS 7: Rest Operator

function add(...num){
    console.log(num);
}

add(4,5,6,7,8)

//LS 8: Arrow Function

function xadd(...num){
    let total=num.reduce((x,y) => x+y )
    return total
}

console.log( xadd(1,2,3,4,5,6,7,8,9,10));

//LS 9: Default Params

function sub(numArray=[]) // [] is the deafult param to elimate empty value error
{
    let total = 0;
    numArray.forEach((element) => total +=element)
    console.log(total);
}

sub()

//LS 10: Includes

let numArray = [1,2,3,4,5]

console.log(numArray.includes(0)); //false
console.log(numArray.includes(3)); //true

//LS 11: CONST

const setdaw = {}
setdaw.fistName = 'Dhanie'
console.log(setdaw);

//LS 12: Import and Export 

import { data } from "./example.js"
console.log(data);

`{                      
NOTE:
    Update For Node.js / NPM
    Add "type": "module" to your package.json file.

    {
    // ...
    "type": "module",
    // ...
    }

}`

//LS 13: Classes

import { Animal } from "./Animal.js"
let cat= new Animal("cat",'1')
cat.legs = 3
console.log(`${cat.type},${cat.legs}`);
cat.distrub('meow')
console.log(Animal.return10()); //secured function
console.log(cat.metaData);

import { Cat } from "./Animal.js"

let newCat = new Cat("batcat",3)
newCat.distrub()
console.log(newCat.metaData);

//LS 14: Trailing Commas

function coomma(param1,){
    const ex ={
        id :"dfsd",
    }

    console.log(ex);
}
coomma()

//LS 15: Async Function

import fetch from "node-fetch";


const apiUrl="https://syndication.twitter.com/settings?session_id=845e1cdfd255d46a404fcd36204c86b380388286"//"https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location"
function getToplooCampers() {
    fetch(apiUrl)
    .then((r) => r.json())
    .then((json) => { 
        console.log(json) 
    }).catch((error) =>{
        console.log('failed'); 
    });
}
getToplooCampers();


//this is async and await daw, kannu theriyala
async function asgetToplooCampers() {
    const response = await fetch(apiUrl); 
    const json = await response.json();
    console.log(json);
}
asgetToplooCampers();

// Note: Promises are a clean way to implement async programming

// Async Example

function resolveAfter3Seconds() {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve('resolved');
        },3000)
    })
}

//usual method 
              //--//
// resolveAfter3Seconds().then((data) => {
//     console.log(data);
// })         
              //--//

// The difference is that in an async function, 
// JavaScript will pause the function execution until the promise settles. 
// With then(), the rest of the function will continue to execute but 
// JavaScript won't execute the .then() callback until the promise settles.

// async method
async function getAsyncData() {
    const result = await resolveAfter3Seconds();
    console.log(result);
}

getAsyncData();

const exampleSet = new Set([1,1,1,1,1,2,2,2,2])
exampleSet.add(5)
 
console.log(exampleSet);