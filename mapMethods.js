

//Methods of a map in javascript


//I) get() method..it is used to get the value of a key in a map

let fruits= new Map();
fruits.set("apple",50);
fruits.set("guava",20);
fruits.set("banana",50);

console.log(fruits.get("guava"));

//II) size property
//it returns the number of elements in the map

console.log(fruits.size);

//III)delete() 
//it is used to remove a particular map element
fruits.set("banana1",40)
fruits.delete("banana");
console.log(fruits);

//IV) clear() method
//removes all the elements from the map

//fruits.clear();
console.log(fruits);

//v) has()
//it returns true if a particular key exists in a map and returns false if it does not

console.log(fruits.has("banana1"));

//Maps are also objects
//use typeof

console.log(typeof fruits);

//VI)foreach() method
//it invokes a callback for each key/value pair in a map

//eg. list all entries
let text="";

fruits.forEach(function(value,key){  //sequence is same as in arrays
    text+=key+"="+value+",";
    
})
console.log(text);

fruits.forEach(function(value,key){
    console.log(key,"=>",value);
    
})

//VII) use of for of loop 
//if you want to get all the keys and values of a map

for(let [k,v] of fruits){
    console.log("My Key is:"+k+",It's values is:"+v*2);
}

//VIII) entries()  method

//returns an iterator object with the [key,value] of a map

for(let x of fruits.entries())
{

    console.log(x);
}

//IX) keys() method
//it returns an iterator object with  only the keys in a map

for(const y of fruits.keys()){

    console.log("These are the keys of my map:"+y);
}

//X) values() method
//It returns an iterator object with the values in  map

for(let val of fruits.values()){
    console.log(val*2);
}

//we can also use values() method to sum all the values in a map

let sum=0;

for(let x of fruits.values())
{
    sum+=x;
}

console.log(sum);

//Javascript Object vs Maps
//keys in case of object can be strings or symbols whereas in case 
//of Map keys any be of any data type

let laptop={

    cpu:'i09',
    100:16,
    brand:'HP'
}

laptop.cost=7874372;
console.log(laptop[100]);

let students=new Map();
students.set("Nelesh",98);
students.set("Divya",89);
students.set("Mahi",78);
students.set("Charu",90);
students.set("Vivaan",98);
students.set(100,20);

console.log(students.get(100));


//Objects as keys of Map
//being able to use objects as keys is an important map feature

//create objects

const apples={name1:"Apples"};//apples.name1=Apples
const bananas={name1:"Bananas"};
const oranges={name2:"Oranges",name1:"myoranges"
};
console.log(apples.name1);

//create a Map

const fruits1=new Map();

fruits1.set(apples,500);
fruits1.set(bananas,300);
fruits1.set(oranges,400);

console.log(fruits1.get(apples));

for(let val of fruits1.keys())
{
    console.log(val);//apples.name1//bananas.name1//oranges.name1
    console.log(val.name1);
    
}

console.log(fruits1.get("apples"));//undefined
//remember...the key is an object(apples) and not a string("apples")

//Use of for of loop
//if you want to get all the keys and values of the map

for(let [k,v] of fruits1){
    console.log("keys are: "+ k +" Values are: "+v);
}

//why do we use set instead of add

let mymap=new Map();
mymap.set("Fiona","Java");
mymap.set("Michelle","JS");
mymap.set("Chirag","Python");

mymap.set("Fiona","Maths");//it replaces the previous value and does not add a new element
console.log(mymap);





