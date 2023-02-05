
//Methods of javascript sets


//I) the add() method: 

const letters=new Set(["a","b","c"]);

letters.add("d");
letters.add("a");
letters.add("j");
letters.add("b");

console.log(letters);
//if you add equal elements only first will be saved.

//II) delete() method:

letters.delete("j");//you have to pass the value of the element you want to delete as a String ("")
console.log(letters);

//III) forEach() method:
//this method invokes a function for each set element

const emp=new Set(["Hanna","Seierra","Dako"]);
 
emp.forEach(items=>
console.log("100:"+items))
console.log(emp);

//)IV)has() method:
//it is case sensitive..."Hanna" and "hanna" are different
//it returns true if the element exists and returns false if it doesn't
console.log(emp.has("David"));//false
console.log(emp.has("Hanna"));//true

//V) clear() method:
//deletes all the elements from the set.
emp.clear();
console.log(emp);

//VI) values() method:
//this method returns an iterator object containing all the values in a set.
//2,3,5,11
const prime=new Set([2,3,5,7,11]);
let text="";
for(let p of prime.values()){
text+=p+",";
}
console.log(text);

//VII) entries() method:
//as set has no keys so entries() method returns[value,value] pairs instead of [key,value] pair
//this makes it compatible with Maps

console.log(prime.entries());

//Set are objects
//for a set, typeof returns object

console.log(typeof prime);//object






