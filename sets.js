
let myset=new Set();
myset.add(10);
myset.add(10);
myset.add(20);
myset.add(30);
myset.add(40);
console.log(myset);

let myset1=myset.values();
console.log(myset1);

let text="";

for(const l of myset.values()){
text+=l+",";
}

console.log(text);

console.log(myset.entries());