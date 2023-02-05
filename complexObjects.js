
//Complex objects....objects inside objects
//Nullish coalescing operator is denoted by double question mark(??) double question mark

//consider a case if we try to fetch a property which does not 
//exists in the object..it might show error otherwise
let computer={
    name1:'myPc',
    laptop:{
        cpu:'i7',
        ram:4,
        brand:"Asus"
    }
}
console.log(computer.laptop.brand1?.length)//shows error if ? not used otherwise undefined 
// print the length of the string values of any key

console.log(computer.laptop.brand?.length)//4
console.log(computer.name1?.length)//4
console.log(computer.name2?.length)//undefined

//you can use ? at any stage
console.log(computer.laptop1?.brand?.length)//undefined

console.log(computer)

//one more way to write
//find length only if the particular property exists
if(computer.laptop.brand.length!=0)
{
    console.log(computer.laptop.brand?.length)
}
else{
    console.log("This key does not exists")
}
//the following will show an error as brand1 does not exists in the object computer
// if(computer.laptop.brand1.length!=0)
// {
//     console.log(computer.laptop.brand1?.length)
// }
// else{
//     console.log("This key does not exists")
// }
