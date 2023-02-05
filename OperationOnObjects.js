

// Operations on objects

//1) deleting any property(not object) from the object
//use 'delete' keyword

let car={

    color:'Black',
    engine:800,
    brand:'Chevy'

}

console.log(car)

delete car.engine

console.log(car)//engine will be deleted

//2) Modifying the value of a property
car.brand='Hundai'
console.log(car)

//3) Adding a new property to an object
//we can add property to an object 

car.model=1999 //it will add new property only if it(same name of property) does not exist 
//otherwise if the property name already is there it will modify the value
console.log(car)

//4)  checking if a property exists
//use of 'in' operator
//Syntax 'keyname' in Object_name
console.log('model' in car)//true or false 


//5) Use of template literal

let school={
    name1:'Smart Wonders School',
    location:'Mohali',
    established:2000,
    20:1000,
    displayInfo:function(){
        console.log(`The value of key 20 is ${school['20']}`);//fetching the key of the object in function

    }
}
   school.displayInfo()


