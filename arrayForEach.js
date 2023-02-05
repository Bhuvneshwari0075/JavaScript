
//Array forEach() method

let nums=[42,53,18,24,66,32];
//if we want to print this array

console.log(nums)//we got whole array

//but if we wnat to get these values one by one
//we use for-of  /for-in loop

//for-each loop gives one value at a time so that we can perform any operation on it
//this forEach() method gives one by one element from the array and
// we can pass it to a function to perform some operation
//forEach() is a function and inside it we have to pass a function
//we can use a arrow function

let students=["John","Mark","Joe","Lisa"];

//syntax----->   arrayName.forEach(functionName)

students.forEach(myFunction) //callBack function//you need to write the name of the 
//function inside the round bracket to which you want to pass the element of the array one by one 


function myFunction(items)
{

    console.log(items);
}

let prime=[2,3,5,7]

//anonymous function //mynumber is the parameter of the anonymous function
prime.forEach((myNumber) =>{
    console.log(myNumber*2);
}

)
//forEach is a method of the array "prime" which takes one element at a time ,that element
//is assigned to "myNumber", "myNumber" is an argument which we are passing to the function, 
//which in turn can be used to perform any operation

//we can skip () brackets as we have only one argument, So above code can be changed as follows---->

prime.forEach(myNumber =>{
    console.log(myNumber*10);
}
)

//forEach() can also be used in a different way, it can have 
// three parameters(element of the array, index value,whole array)


prime.forEach((n,i,nums) =>{

    console.log(n,i,nums);

}
)
//you can skip the index numbers while printing.
prime.forEach((n,i,nums) =>{

    console.log(n,nums);

}
)

//Use of forEach()

//1) use to iterarte over an array
let odd=[1,3,5,7];
odd.forEach(printData)

function printData(numbs)
{
    console.log(numbs);
}

//2) Updating the elements of the array

//Putting hello before all the elements
let employees=["Lara","Diya","Tina"];
//employees[0]="Hello"+employees[0];

employees.forEach(updateFunction)

function updateFunction(items,i,emp)
{

    console.log("Hello "+items);
//adding strings to array elements
    emp[i]="Hello "+emp[i];
}

console.log(employees);

//3) copying a array into another array

const arrayItems=['item1','item2','item3'];

const emptyArray=[];
const copyArray=[];
//using for loop

for(let i=0;i<arrayItems.length;i++){
    emptyArray.push(arrayItems[i]);
}
console.log(emptyArray);

//using forEach()

arrayItems.forEach(function(item)
{
copyArray.push(item);

})
console.log(copyArray);

