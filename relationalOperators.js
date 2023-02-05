

//relational operators are used to compare two values

//the output is in boolean form

console.log(5>6) ///false
console.log(7>6) //true
console.log(6<=6) //true
console.log(6>=6) //true

//if we compare two strings

let x="Pen"
let y="Book"

let data=x>y

console.log(data)  //  P>B  ...true

//ASCII values are compared... (A-65, Z-90, a=97,z=122)
//http://sticksandstones.kstrom.com/appen.html

let a="pen"
let b="Pencil"
let data1=a>b
console.log(data1)

//comparison of a number and string

let num1="2"
let num2=1

let compr=num1<num2

console.log(compr) //it converts "2" into number form //type coercion

let  num3="2"
let num4=2

let compr2=num3 == num4 //it compares the values after type corecion


console.log(compr2)


let compr1=num1===num2 //it doesn't change the data type of either 
                       //variable but compares it in the original form
console.log(compr1)

//when we say two variables are equal,they should be equal not only in terms of their values 
//but also their types should be same so use (===)

//one more case of (==)

let num7=" "
console.log(typeof num7) //string
let num8= false
console.log(typeof num8)  //boolean
let data3=num7 == num8 
console.log(data3)    //true   due to type coercion

let num9=" "
console.log(typeof num9)  //string
let num10= false
console.log(typeof num10) //boolean
let data4=num9 === num10 
console.log(data4)  //false....no type coercion