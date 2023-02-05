let person= new Object({
    name : 'Pulkit',
    age :20,
    hobbies:['jkhjk','gjhgj'],
    score : {                                //object inside object
        maths : 90,
        french : 97
            }

})
person.phone=45465
person.age=1
console.log(person)


for(let key in person){
console.log(key,person[key])

}

for(let p in person.score){

    console.log(p,person.score[p])
}
person = new Object({
    name : 'Pinky',
    age :42,
    hobbies:['jkhjk','gjhgj'],
})
//delete person.age
console.log(person.name?.length)
console.log(person)

let school = {
    name: 'Vivekananda School',
    location : 'Delhi',
    established : '1971',
    20 : 1000,
    displayInfo : function(){
        console.log(`The value of the key 20 is ${school['20']}`);
    }
}
school.displayInfo();  