

//use of for in loop in javascript

let alien={
    name1:"Hippo",
    tech:'JS',
    laptop:{
        cpu:'i7',
        ram:4,
        brand:"Asus"

    }

}

//if you want to print all the properties

console.log(alien)

//if you want to print the properties/key names only not their values one by one

for(let key in alien)//key is the variable which stores and loops through 
//the names of the properties one by one
{
   console.log(key); 
}

for(let key in alien)//printing a particular value of a property
{
   console.log(key,alien.tech); //we have hard coded alien.tech so JS,Js,Js value is shown with each key name
}

//the value of the key should change based on the key in the loop

for(let key in alien)
{
   console.log(key,alien[key]); 
   //we are fetching a key and with the help of that key we are fetching its value using []
}

//If we want to fetch object inside object

for(let p in alien.laptop)
{
   console.log(p,alien.laptop[p])
}