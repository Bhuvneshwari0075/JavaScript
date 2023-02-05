
//To print the values elements inside the array one by one

let nums=[];
nums[0]=5;
nums[99]=78;
console.log(nums);//[ 5, <98 empty items>, 78 ]
console.log(nums.length)//100
nums[60]=43;
for(let n of nums) //prints all the elements of the array which exists or does not exist
{
    console.log(n);
}

//Use of for-in loop in arrays to read index values
//As the array salso have  key(like objects do) whch is index value of evry element,
// we can use for-in loop


for(let key in  nums){ //skips indexes where there are no elements
    console.log(key);
}//0    60   99 //indexes of the existing elements

for(let key1 in  nums){
    console.log(nums[key1],key1);//printing the values of the existing elements using the index numbers
}

[5,,,,,,,,,,,,43,,,,,,,,,,,78]
