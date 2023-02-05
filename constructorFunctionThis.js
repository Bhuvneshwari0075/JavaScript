

// use of 'this' keyword in constructor function


function car(name,model){
    this.name=name;
    this.model=model;

    //if we want common function for different objects
    this.work=function(){

        console.log("I have been driving");
        return 7;
    }

}

let car1=new car("Spark","Chevy");
let car2=new car("Dzire","Maruti");

console.log(car1.work());
console.log(car2.work());

console.log(car1);
console.log(car2);