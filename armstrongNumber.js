
//An Armstrong number of three digits is an integer such that 
//the sum of the cubes of its digits is equal to the number itself.

//153 = 1*1*1 + 5*5*5 + 3*3*3
//1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4


const number = 92727;
let number1=String(number);
const numberOfDigits = number1.length;
let sum = 0;
// create a temporary variable
let temp = number;
console.log(numberOfDigits);
while (temp > 0) {

    let remainder = temp % 10;
    console.log(remainder);
    let mul=0;
    mul= remainder ** numberOfDigits;
    console.log(mul);
    sum=sum+mul;
    console.log(sum);


    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
    console.log(temp);
}

if (sum === number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}