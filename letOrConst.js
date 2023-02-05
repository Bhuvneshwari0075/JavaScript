
//letOrConst.js
//difference between let and const keyword while craeting objects
//if we use const keyword we will not be able to change object definition 
// but let keyword helps us to redefine the object and its properties

let person=new Object({
name2:"Nelesh",
age:15,
score:{
    maths:97,
    english:98
}

})

console.log(person)
person=new Object({

    name:"Pulkit"
})
console.log(person)
//if 'let' keyword is changed to 'const' keyword the
// above example will show an error "Assignment to constant variable"