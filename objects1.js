
//creating objects in javascript

const person={
    name:'Pinky',
    age: 42,
    hobbies:['playing games','dancing'],
    greet : function(){
        console.log('hi')

    },

    human : {
        age:100,

    }
}
console.log(person.name,person.hobbies[0],person.human.age);
person.greet()