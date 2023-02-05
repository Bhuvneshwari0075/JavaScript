
//Basic operations on Arrays

//1) Adding elements at the end of an array...//array can be empty also
//use push() method

let colors=['red','pink','blue']
console.log(colors);
colors.push("Black");
console.log(colors);

let emptyArray=[];
emptyArray.push(6);
//emptyArray.push(7);
console.log(emptyArray);

console.log(colors.length);//it prints the length of the array

//fetching a particular value

console.log(colors[1]);
console.log(colors[4]);//undefined

colors[1]="Green";
console.log(colors);

//2) Adding an element to the beginning of an array
// use unshift() method

let seas=['Black Sea','North Sea','Baltic Sea'];

//seas[0]="Red Sea";//It overwrites the element which is at the [o] index
//console.log(seas);
seas.unshift("Red Sea"); //unshift moves all the elements to the right side
console.log(seas);

//3)Removing an element from the end of an array
//use pop() method
//It will follow LIFO technique

let prime=[2,3,5,7];
const lastElement=prime.pop();

console.log(lastElement);//7
console.log(prime);

//4) Deleting an element from the beginning of an array
//It shifts all the elements to the left

prime[0]=null//this will replace 2 with null
console.log(prime);

const firstElement=prime.shift();

console.log(firstElement);
console.log(prime);


//5) finding an index of an element in the array
//use the indexOf() method

let index= prime.indexOf(5);//1
console.log(index);

let index1=seas.indexOf('North Sea');//2

console.log(index1);

//6) To check if a value is an array or not
//use Array.isArray() method..it returns true or false

console.log(Array.isArray(prime));
//7) To print the length of an array
//use .length

console.log(prime.length);

//8) Inserting elements in an array by using index no. but not push

let names=["Kajal","Maya","Dolly"]

names[3]="Kannu";

names[1]="Jacky";//it replaces Maya
console.log(names)

//9)To remove a particular element

//use splice() method

let data=[34,12,56,89,51,31,45]//if you want to delete 56 and its subsequent elements
data.splice(2);
//console.log(data.splice(2));//it deletes everything on and after [2] index position

console.log(data);//[ 34, 12 ]

//to delete a specific element

let data1=[14,47,12,78,90];//delete 12

console.log(data1.splice(2,1));// [ 12 ]
//it will delete [2] position element but only 1 element
//first parameter is the index position and second parameter is the number of elements to be deleted

console.log(data1); //[ 14, 47, 78, 90 ]

//Splice can also be used to replace /add values after deleting previous elements

let values=[45,67,12,90,15,67,69,13]

console.log(values.splice(3,2,10,100)); //[ 90, 15 ]

console.log(values);//[ 45, 67, 12, 10,100, 67, 69, 13 ]

console.log(values.splice(1,1,79,89,19));//[ 67 ]
console.log(values);//[45,  79, 89, 19, 12,10,100, 67, 69, 13]










