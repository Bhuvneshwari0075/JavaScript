
//Type conversion and type coercion
//if we wnat to convert one  type of data  to another
//expilicit conversion

let num1=6
console.log(num1,typeof num1)

let num2=String(num1)
console.log(num2,typeof num2)

let num3=Number("123")
console.log(num3,typeof num3)

//type coercion
let x
console.log(x,typeof x)//here the data type of x is undefined
x=8   //changing type of x to Number
console.log(x,typeof x)

//x=x+" " //concatenation //again changing type of x to string
//console.log(x,typeof x)

x=x-2                 //data type of x gets converted into Number again
console.log(x,typeof x)

x=x+2 //if the type of x is still string it performs concatenation here but if it is number it adds 2 to x
console.log(x,typeof x)


x=+x+2   //unary operator
 //before performing operation convert data type to x to Number by putting + in front of X
console.log(x,typeof x)

//consensus


//To convert string to number

let mn=Number("Nelesh")
console.log(mn,typeof mn)//Nan,number

let mn1=parseInt("123 Nelesh")
console.log(mn1,typeof mn1)//123 number

let mn2=parseInt("a123 Nelesh")
console.log(mn2,typeof mn2)//NaN number


