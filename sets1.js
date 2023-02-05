
//Javascript Sets

//Ways to create a javascript Set

//I) the new Set() method/constructor-->

//Pass an array to the new Set() constructor

let letters=new Set(["a","b","g","t"]);
console.log(letters);

//II) Create a new Set and use add() to add the values in the set

let numbers1=new Set();

numbers1.add(1);
numbers1.add(4);
numbers1.add("d");
numbers1.add("Alexa");
console.log(numbers1);

//III) create  a new set and add variables
//create variables
let student1="Raj";
let student2="Meena";
let student3="Rahul";

//create a set

let names2=new Set();
//add the variables
names2.add("student1");//it will treat this as a value itself if you use ""
names2.add(student2);
names2.add(student3);

console.log(names2);

//IV) Create an array and pass it to the Set() constructor while creating the set
//create an array

let myStudents=["Alexa","Sam","Nelesh"];
//pass the array to set() constructor
let name1=new Set(myStudents);
console.log(name1);