
//Array methods...filter()..map()...reduce()

//1) Map() method
//2) filter() method

//array.filter(function_to_be_applied)
//array.filter(function (args) {
    // condition;
//})

let nums=[42,78,13,21,46,35,87,90]
for(let i=0;i<nums.length;i++){
    if(nums[i]%2===0){
        console.log(nums[i]+"is even")
    }
    else{
        console.log(nums[i]+"is odd")
    }
}
console.log(" ")
nums.forEach(EvenGenerator)
function EvenGenerator(numbers){
    if(numbers%2===0){
        console.log(numbers+"is even")
    }
    else{
        console.log(numbers+"is odd")
    }
}

console.log(" ")
nums.forEach(ParamEven => {
    if(ParamEven%2===0){
        console.log(ParamEven+" is even")
    }
    else{
        console.log(ParamEven+" is odd")
    }
})


nums.filter(n => n%2===0) //[42,78,46,90]
     .map(n1=>{
        console.log(n1*2);

    })





