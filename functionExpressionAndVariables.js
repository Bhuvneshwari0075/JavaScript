
//Function Expression in javascript

//javascript treats functions as objects
// expression..means...------>evaluate-------->assigned to a variable

let a=5+6 
let b=a
console.log(a,b)

let add=function (num1,num2)//only function....it is anonymous function with no name
 //add..variable is basically name of the function
{
    return num1+num2;
}

let result=add(5,7)

console.log(result)

let sum=add //assigning "add" variable to "sum" variable 
let result1=sum(5,9);
console.log(result1)

console.log(sum)

// Hoisting
let user="Nelesh";
let str=greet(user);
console.log(str);

//interpreter

function greet(x){
    //x and user are different variables
    //can we access 'user' variable inside the function...yes
    console.log(user)//works fine
    //how? is a vriable being accessed before it is being declared....because of "Hoisting"
    return `Hello ${x}`
    
}

//Local-global variables and default values in javascript

let user1="David" //global variable //declared outside the function

function greet1(u){//u and num both are local variables ..can be created and used only inside the function

    let num=5;
    console.log(num);//5

    console.log(user1);//David //using global variable inside a function
    return `Hello ${u}!!`;

}
let str1=greet1(user1);//using global variable outside a function
console.log(str1);//Hello David

//console.log(num);//throws an error..num is not defined.. cannot access local variable

//Parameters and arguments

function add1(num1,num2,num3) //Parameters

{
    return num1+num2+num3
}

let addition=add1(5,7,12);  //Arguments
console.log(addition)

//if we don't pass correct no. of arguments //Default value in JS

function add2(num1,num2,num3) //Parameters

{
    return num1+num2+num3
}

let addition1=add1(5,7);  //Arguments
console.log(addition1) //NaN

//how to solve this problem
function add3(num1,num2,num3=4) //Parameters

{
    return num1+num2+num3
}

let addition2=add3(5,7);  //Arguments//16
console.log(addition2) 
//if we pass the value also
//it does not picks the default value but uses the value from the argument
function add4(num1,num2,num3=4) //Parameters

{
    return num1+num2+num3
}

let addition3=add3(5,7,9);  //Arguments
console.log(addition3) //21


