
//Different data types in an array


let student=['Nelesh',18,
              {dept:'Computers'},
              function(w){ //fetching the values passed while being called in the variable 'w'
                console.log("Hello "+w);
              }

];

console.log(student);
//how to call the function which is inside the array
student[3]("World");//passing the argument while calling the function

//[3] is the index position of the function

console.log(student[2]);//fetching the object
console.log(student[2].dept); //fetching the property of the object
console.log(Array.isArray('w3resource'));
console.log(Array.isArray('student'));