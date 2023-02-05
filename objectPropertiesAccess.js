
// Ways to access objects properties

//1) using dot notation(.)
//2) using bracket notation ([])

//1) using dot notataion (.)

//syntax--->  objectName.key e.g person.name

//2) using bracket notation  ([])

//syntax--->  objectName["property name"]

const person = {

    firstname :"Nelesh",
    secondName: "Latawa", 
    age:15,
    eyecolor :"Brown"
}

console.log(person["age"])
//we mostly use (.) notation especially if we want to access object 
//inside object and function inside object
//when to use([])
//1) when you have two words or spaces between the property name use []

const person1 = {

    first_name :"Nelesh",
    'second Name': "Latawa", 
    age:15,
    eyecolor :"Brown"
}
console.log(person1.first_name)
console.log(person1['second Name'])

//2 if we don't know what to fetch and we are asking it from the user and depending 
//on that value we are fetching the property from the object

let input="name1"
let alien={

    name1:'Drako' ,
    tech:'Js',
    'work exp':4
}
console.log(alien.name1)
console.log(alien.input) //undefined as input is not a field inside alien object.

console.log(alien[input])
//here we are not talking about the name but the value of the input variable