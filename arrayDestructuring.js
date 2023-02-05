
//Array Destructuring in Javascript

//Destructuring assignment
let nums=[12,45,134,678,34];

console.log(nums);
//to print one element at a time
console.log(nums[1]);

//consider a scenario where we want to break this 
//array and assign the elements to different variables

let a=nums[0];
let b=nums[1];
let c=nums[2];

console.log(a);

//the other way to do this is-->
//Destructuring assignment
let[d,e,f,g,h]=nums;//unpacking the array 
//d,e,f,g,h are five different variables which will contain the values
// of the elements starting from [o] index respectively

console.log(d);//12

//if you don't want to collect 134 we can skip 'f' with extra comma

let[k,l,,m,n]=nums;//12,45,678,34

//if you don't put an extra comma then it will not serve last element

let[j,q,p,i]=nums//12,45,134,678

//use of destructuring

//Write a program to swap two numbers

let x=100;
let y=200;

[x,y]=[y,x];
console.log(x,y)//200,100


//to  create array of strings

let words="My name is Rahul Dravid Sharma";

//to split this string into array based on empty spaces

let wordsSplit=words.split(' ');
console.log(wordsSplit);

//can we separate these words into variables

let [z,o,v,r,t]=wordsSplit;
console.log(r,t);//Rahul Dravid
//Drawback... we have to take two separate variables to save the full  name
//solution...if we want a single variable to hold the full name


let [z1,o1,v1,,t1]=wordsSplit
//The array elements can be skipped as well using a comma separator.
// A single comma can be used to skip a single array element

console.log(t1)//it doesn't work as it skips "Rahul"

//final solution use of 3 dots operator(...) It means rest of the elements


let [z11,o11,v11,...t11]=wordsSplit;

console.log(t11);
