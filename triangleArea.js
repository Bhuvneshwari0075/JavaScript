//write a program which calculates area of a triangle

let side1=5
let side2=6
let side3=7
let s=(side1 +side2 +side3)/2
console.log(s)
let a=s-side1
let b=s-side2
let c=s-side3
let area=Math.sqrt(s*a*b*c)
console.log(area)
