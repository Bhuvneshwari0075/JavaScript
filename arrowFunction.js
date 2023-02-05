let greet=(num1,num2)=>
{if(num1>=0 && num2>=0)
    
    return num1+num2;
    else
    console.log("Enter numbers greater than 0");
    return ("can't solve")
}
let result=greet(-5,8);
console.log(result);