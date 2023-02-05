//Constants in js::::>
let r=5
r=8
const pi=3.14

let area=pi*r*r
console.log(area)
//Data types in javascript
//1) Primitive data type--->number,string,boolean,undefined,null,symbol
//2)Object------>everything which is not primitive

//I) NUMBERS---->//Big int
let num1=4656872348732482479347478372n
console.log(num1)
let myName="Nelesh"
//to know the type of number..use the typeof operator
console.log(typeof myName)

//The  number data type can store other data types as well
//a) base 10(Decimal no. system 0-9)
//b)base 2(Binary no. system 0&1)
//c)base 8(Octal number system 0-7)
//d)base 16(hexadecimal number system(0-9 & A-F))


let num2=0xf //15
//let num2=0xff //f*f=255
console.log(num2)

//Exponential
let num3=15e12
let num4=13.4e6
//to seperate zeros but not changing actual value
let num5=100_000_000_00_000//you can't use commas as they have some specific significance
console.log(num5)
//we can work with infinity
let num6=-5/0
console.log(num6)
console.log(Number.MAX_VALUE*17)
console.log(Number.MIN_VALUE/10)

//you cannot mix different data type
let num7=23798458654694568905869058n
let num8=456n //let num8=456n
console.log(num7+num8)//error

//String....>
//concatenation
let first="Nelesh"
let last="Latawa"
console.log(first+" "+last)
let website="My Website \"s \ name"
console.log(website)

//Escape  characters
//new line \n
let x="My program is the \nfollowing"
console.log(x)
// tab      \t

//vertical    \v
//backspace    \b

let y="My \v bookk\b"
console.log(y)


//Boolean data type (true/false)

let bool=5>6     //true or false
console.log(bool)
console.log(typeof bool)

//null 
let user=null
console.log(typeof user)
//null represents an object
//it says it isn't an object
//it dosen't represent an object
//but it is an object


//undefined
let user1
console.log(user1)

console.log(typeof user1)

//NaN not a number

let num10=5
console.log(5/"Nelesh")
console.log(typeof (5/"Nelesh"))