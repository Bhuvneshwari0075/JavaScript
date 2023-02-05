

// Methods and use of this keyword in javascript

//Syntax: objectName.methodName()

let laptop={

    cpu:'i9',
    ram:16,
    brand:'HP',

    greet: function(){
        console.log("Hello World");
    }
}

laptop.greet();

//if you want to print the properties of the object through the function greet()

let laptop1={

    cpu:'i9',
    ram:16,
    brand:'HP',

    greet: function(){
        console.log("Hello World");
       // console.log(brand);//error...brand is not a part of your function
    }
}

laptop1.greet();

let laptop2={

    cpu:'i8',
    ram:16,
    brand:'HP',

    greet: function(){

        let storage=256;//this variable is a part of greet() function so 
                       //   it can be accessed easily inside greet() 
        console.log("Hello World");
        console.log(storage);//256
       
    }
}

laptop2.greet();

//the function is able to fetch "storage" but not "brand" as "brand" is not 
//a variable but it is a property of the object

//to resolve this issue

let laptop3={

    cpu:'i9',
    ram:16,
    brand:'HP',

    greet: function(){

        let storage=256;//this variable is a part of greet() function so 
                       //   it can be accessed easily inside greet() 
        console.log("Hello World");
        console.log(storage);//256

        console.log(laptop3.brand);//HP
        console.log(this.cpu);//i9
        //this keyword refers to the current object...
        //'this' is bound to an object
       
    }
}

laptop3.greet();

//Understanding 'this' keyword

let car={
    brand:"Honda",
    getBrand:function(){

        return this.brand;

    }
}

console.log(car.getBrand());

//Two different objects can have same properties and value
let car1={
    brand:"Honda",
    engine:'6gd',
    getBrand:function(){
        console.log(car1.brand);


    }
}

car1.getBrand();


let car2={
    brand:"Honda1",
    engine:'6gd',
    getBrand:function(){
       console.log(this.brand);
       console.log(car1.brand);

    }
}
car2.getBrand();

//Why is it called "this"
//if we want to compare cpu of both the laptops 1 & 2

// if(laptop1.cpu>laptop2.cpu)

// {
//     console.log(laptop1);
// }
// else{
//     console.log(laptop2);
// }

//In good programming every task we perform should be part of a function

function compareLaptops(laptop1,laptop2){

    if(laptop1.cpu>laptop2.cpu)

{
    console.log(laptop1);
}
else{
    console.log(laptop2);
}
}
compareLaptops(laptop1,laptop2);

//"compareLaptops" is a third party function which is comparing both the laptops 

//if laptop4 object wants to compare itself with laptop5

let laptop4={

    cpu:'i09',
    ram:16,
    brand:'HP',

    greet: function(){
        console.log("Hello World");
    },
    compare1:function(other){ //other is just a variable 
        if(this.cpu > other.cpu)
        console.log(this);
        else 
        console.log(other);

    }
}

laptop4.greet();

let laptop5={

    cpu:'i10',
    ram:16,
    brand:'HP',

    greet: function(){

        let storage=256;//this variable is a part of greet() function so 
                       //   it can be accessed easily inside greet() 
        console.log("Hello World");
        console.log(storage);//256
       //return 1;
    }
}

laptop5.greet()

laptop4.compare1(laptop5)