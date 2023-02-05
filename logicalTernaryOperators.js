
//Logical operators in javascript (&&,||,!)

let x=7,y=8,z=9

let result= x > y || x > z
console.log(!result)

//conditional statement/control flow statements (if-Else):

let num1=12
let num2=10

let result1=num1>num2

if(result1)
{console.log("num1 is greater");
console.log("hi");
}
else
{console.log("num2 is greater");
console.log("bye");
}

//To find the greatest of three numbers

//ternary operators(? :)
//syntax------>    condition ? expression1 : expression2

//to find if the no. is even or odd

let num3=15
let result2
// if(num3%2 === 0)
// result2="Even"
// else 
// result2="Odd"

// console.log("The number is:"+result2)

result2= num3%2 === 0 ? "Even" : "Odd"
console.log("The number is:"+result2)

//nested ternary operator
//Program to check if the no. is positive,negative or 0

let a=-9
let result3= (a>=0) ? ( a === 0 ?"zero": "positive") : "negative"

console.log(result3)







