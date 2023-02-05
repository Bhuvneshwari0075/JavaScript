
//for loop

//to write the 3 things: initialization,condition,inc/dec   in a single line

//    for(Init;Condition;inc/dec)


for(let i=1;;)
{
 if(i<=5)
 {
    console.log("hi")
    i++
 }

}

//While loop vs for loop ...which to use when?

//starting point and end point ..for loop

//print all the nos. from 1-100 which are div. by 3

for(let x=1;x<=100;x++){

  if(x%3 ===0){

  console.log(`the number ${x} is divisible by 3`)
  }
}
//1st variation
// hi
//hello
//hello
//hello
//hello
//hello

// hi
//hello
//hello
//hello
//hello
//hello

// hi
//hello
//hello
//hello
//hello
//hello

// hi
//hello
//hello
//hello
//hello
//hello

// hi
//hello
//hello
//hello
//hello
//hello

//
// Week: 1
// Day: 1
// Day: 2
// Day: 3
//   .....  ..  ....
// Week: 2
// Day: 1
// Day: 2
// Day: 3

//While loop vs for loop ...which to use when?

//starting point and end point ..for loop

//print all the nos. from 1-100 which are div. by 3

for(let x=1;x<=100;x++){

  if(x % 3 === 0){

  console.log(` the number ${x} is divisible by 3 `)
  }
}

//to separate nos. use while loop if you don't know starting and ending point

let num=123
while(num>0){//f
console.log(num%10)
num=parseInt(num/10)//0//converting float to number data type

}

//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5

for(let i=1;i<=5;i++){
  for(let j=1;j<=i;j++){
      process.stdout.write(`${j}`)
  }
  console.log(" ")

}
