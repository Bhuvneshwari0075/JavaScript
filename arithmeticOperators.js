
//=,-,*,/,% (remainder)


//Arithmetic operations on booleans

let num1=true,num2=false

let result=num1+num2//1+0  ....due to type coercion

console.log(result)//1


//short hand opeartors

let num=4

//num=num+2

num+=2  ///num =num+2
console.log(num)

//increment and decrement operators

num++  //num=num+1  //post increment opeartor
num--  //num=num-1  //post decrement opeartor

++num  //num=num+1  //pre increment opeartor
--num  //num=num-1  //pre decrement opeartor

let num4=5
let x=++num4 //it incremments the value of num4 first and then assigns the value to x

//x=num4+1 // it only adds 1 to num4 and assigns it to x but doesn't update actual value of num4
console.log(x,num4)

let num5=5
let y=num5++////it assigns the value of num5 to y first and then increments the value of num5
console.log(y,num5)


//if you want to find the power of a number

//let num6=7
let result1=4 ** 3//Exponentiation 4*4*4
console.log(result1)
