

//Arrow function expression

let greet=function(){
    console.log("Hello World");

    return 1;
}

let num=greet();
console.log(num * 5);

console.log(greet());

//Arrow function
//just to remove the function keyword and keep the flow of the code going.. it is often used
let greet1=() => {  //==> specifies it is a function 
    console.log("Hello World Arrow");
}
greet1();

//if we have parameters

let greet2=(user) => {

    console.log("Hello "+ user);
    return 1;
}

console.log(greet2("Nelesh"))

// features of Arrow Function expression

//1) you don't need to enclose your statement inside  curly brackets {} if only 1 statement

let greet3=(user) => console.log("Hello "+ user)

    greet3("Pulkit")

//2) you don't need to write return keyword
    let greet4=(user1) =>  user1 //it will return user1

    console.log(greet4(6))

// 3) They don't have their own bindings to this,super, etc. and should not be used as methods
//4) they cannot be used as constructor functions