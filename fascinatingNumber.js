


let num=192
let num2
let num3
let str=""

num2=String(num*2)
num3=String(num*3)
str=num+num2+num3

console.log(str)
let isFascinating = true;
       
        for (let i = '1'; i <= '9'; i++) {
            let position1 = str.indexOf(i);
            let position2 = str.lastIndexOf(i);
            if (position1 == -1 || position1 != position2) {
                isFascinating = false;
                break;
            }
        }
        
        if (isFascinating)
            console.log(num + " is a Fascinating Number");
        else
            console.log(num + " is not a Fascinating Number");
    
