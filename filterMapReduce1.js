
//Higher order functions 
//(functions as arguments inside functions)

let numbers=[1,2,3,4]
let doubled1=numbers.map(n=>n*2);
console.log(doubled1);
console.log(numbers);


let doubled=numbers.map(mul)

function mul(n){
   
   return n*2;
}

console.log(doubled)

let jumbled=[10,46,12,4,8,1,2,0,9,67,100,68];
//select all the elements which are greater than 10 and save them in an array

let greater=jumbled.filter(n1=> n1>10);//if condition is applied on(n1>10),no need to write if condition

console.log(greater);



//filter() method is used to get all the students whose grades are greater than or equal to 90

const students=[
   {name1:'Quincy',grade:96},//index[0]
   {name1:'Jason',grade:85},//index[1]
   {name1:'Alexa',grade:95},
   {name1:'Sam',grade:100},
   {name1:'Katie',grade:65}
]

const studentData=students.filter(student1=>student1.grade>=90);
//student1 will contain the objects sent by the filter() method one by one
//student1.grade helps us to access the grade property of all the objects inside the array one by one
console.log(studentData);

//Reduce() method

let wholeNumbers=[0,1,2,3,4,5];

let sum=0;
for(let i=0;i<wholeNumbers.length;i++)
{
   sum=sum+wholeNumbers[i];
}

console.log(sum);

let result=wholeNumbers.reduce((accu,val)=>val+accu);
//accu will contain the result from the previous iteration
//val will contain the current item of the array

//accu=val+accu;

//accu=?,val=0,accu=0
//accu=0,val=1...accu=0+1=1
//accu=1,val=2...accu=1+2=3
//accu=3,val=3..accu=3+3=6
//accu=6,val=4...accu=6+4=10
//accu=10,val=5..accu=10+5=15

console.log(result);

//how to use filter(),map() and reduce() together

let randomNumbers=[67,12,44,33,78,31,26];

let finalResult=randomNumbers.filter(n=>n%2===0)

console.log(finalResult);

let finalResult1=finalResult.map(n=>n*2);

console.log(finalResult1);

let finalResult2=finalResult1.reduce((x,y)=>x+y);
console.log(finalResult2);

//You can carry down the results of filter() and map() to reduce() the same set of values 
let sum1=randomNumbers.filter(n=>n%2===0)
                       .map(n=>n*2)
                       .reduce((x,y)=>x+y);

console.log(sum1);
