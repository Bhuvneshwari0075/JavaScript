

//Program to list the prime numbers


const number=8
let isprime=true

if(number === 1)
{
console.log("1 is neither prime nor composite")
}

else if(number>1)
{

    for(let i=2;i<=number/2;i++)
    {
if(number%i ==0)
{
    isprime=false;
    break;
}

    }
    if(isprime){
        console.log(number,"is prime number")
    }
       else {

        console.log(number,"is not a prime number")
       }
    }
       
       else {
        console.log(number,"is not a prime number")
       }
    
//Fascinating Number: When a number( 3 digits or more ) is multiplied by 2 and 3, 
//and when both these products are concatenated with the original number,
// then it results in all digits from 1 to 9 present exactly once. 
//There could be any number of zeros and are ignored. 
//192*2=384
//192*3=576
//192384576