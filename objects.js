
// Objects in javascript

// name:value pairs
// const 

// Syntax to declare objects:
//   const object_name ={ 
//           key1: value1,
//           key2: value2,
//           key3:value3
//            }


//here person is an object that stores values such as strings and numbers
const person = {

    firstname :"Nelesh",
    secondName: "Latawa", 
    age:15,
    eyecolor :"Brown"
}
console.log(typeof person) //object
console.log(person.age)// accessing the object value

//create objects in different ways
//1) using object literal ({})
//2) by creating instance of object directly
//3) by using constructor function

//1) using object literal ({})
const person1={
    name : "Nelesh",
    age : 15,
    hobbies : ['reading','games','coding'], //array inside an object
    greet : function(){                     //function inside of an object
        console.log("Hello everyone")
                       },
    score : {                                //object inside object
        maths : 90,
        french :97
            }

}
console.log(typeof person1)

console.log(person1.name)
console.log(person1.hobbies[0])
person1.greet();
console.log(person1.score.maths)

//2) by using instance of object directly

const employee=new Object({

    employee_name: "David",
    age1: 40,
    hobbies1 : ['reading','games','coding'], //array inside an object
    greet : function(){                     //function inside of an object
        console.log(`this is my employee his details are ${this.age1} and ${this.employee_name}`)
                       } //use this keyword to access property values in the function inside the object


})

console.log(typeof employee)
employee.greet()

//3)create an object by using constructor function
//in this example the family() constructor is used to create an object using the new keyword

function family(){

    this.name1='John', //use '=' to assign values to all the properties(variables,functions,objects,arrays)
    this.age=30,
    this.hobbies=['reading','writing','dancing'],
    this.myFunction=function(){

        console.log("Hi this is my family");
    },
    this.salary={
        manager:183948,
        engg1 : 645332
    }
}

const family_object=new family();
console.log(typeof family_object);

console.log(family_object.name1)
family_object.myFunction();
console.log(family_object.hobbies[2])
