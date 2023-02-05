let num11
let num2=String(num1*2)
let num3=String(num1*3)
let result=num1+num2+num3

let bool=true//not a fascinating number

console.log(result)

for(let i=1;i<=9;i++){
    let firstPosition=result.indexOf(i)
    let lastposition=result.lastIndexOf(i) 
  
   if( firstPosition ==-1 || firstPosition !=lastposition  )//if any digit(1-9) is  missing or it 
                                                            //might be repeating then not a fsct.number
   {
        bool=false
        break
    
   }
}
if(bool){
console.log(result," is a fascinating number")
}
else{
    console.log(result,"is not a fascinating number")
}
