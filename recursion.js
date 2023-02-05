
//recursion in javascript

function show(){
    console.log("hi");
}
show();//we have to call a function always to make it perform some task.
//if we see we are calling the function show() and from this function we are calling log() function.
//here LIFO technique will be followed by the stack which will have all the function calls.
//show() function will wait for the log() function to complete its set of instructions.

function abc(){
    show();
}
abc();

//It makes sense that from a function we are calling some other function. 
//This will be executed only once here

//can we call a function from inside itself
function show2(){
    console.log("hi");
    show2();
    }

show2();
//the above code will print "hi" with an error "Maximum call stack size exceeded" as there is 
//no stopping here as we don't have any limit specified here.
//but the stack do have its size limit(memory size)
//you can check the breaking value or breaking point


//this concept is called recursion..we can have 
//breaking point in the code so that we don't get an error

let num=1;
function show1(){
    if(num<=10351){
    console.log("hi",num);
    num++;
    show1();
    }
}

show1();
