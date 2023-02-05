
//Javascript Maps

//How to create a map-----
//we have two ways
//I) passing an array to a map() constructor--->

const fruits=new Map([
    ["apples",5],
    ["guava",2],
    ["oranges",5],
    ["bananas",1]
])

console.log(fruits.get("apples"));//5//use get() method to fetch the value of a particular key

//II)Create a map using Map.set() method
//you can add elements to a map with the use of set() method

const vegetables=new Map();
vegetables.set("potatoes",20);
vegetables.set("onions",10);
vegetables.set("tomatoes",30);
vegetables.set("pumpkin",15);

console.log(vegetables.get("pumpkin"));

//Map Methods
//I) set() method()
//it can used to change the existing map values

vegetables.set("tomatoes",50);

console.log(vegetables);





