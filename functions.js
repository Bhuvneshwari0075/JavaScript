
//functions in js
//difference between for loop and function 

function greet(){
    console.log("Hi")
}

for( let i=1;i<=10;i++){
    greet();
    console.log(i);
}


let num1=673256
let result1
function check(result){

    if(result%2===0)
    {
        console.log(`${result}: is even`)
    }
else 
{console.log(`${result} :is odd`)
}
}

while(num1>0){
    
result1=num1%10;
num1=parseInt(num1/10);
check(result1); //calling the function
}

