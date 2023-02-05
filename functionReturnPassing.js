

//function return and passing

//if we don't want a function to do something but it returns something

function greet()
{
    console.log("Gm");
    return "Hello";//only one return
    //return "Hi";//will not execute
}
let str=greet();
console.log(str)

//function having more than one return statement

function greet1(num2){
    if(num2 === 1)
    {
        return "Good morning";
    }
else {
        return "Good Evening";
    }


}

let num1=2;
let str1=greet1(num1)
console.log(str1)

//passing a value

function greet2(user1)  //parameter
{

    return "Hello"
}

let user="Nelesh"
let str2=greet(user);//argument