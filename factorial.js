
function fact(n){
    let result=1;
    while(n>=1){
        
        result=result*n;

        n--;

    }
    console.log(result);

}
fact(5);

let factorial=1;

function fact1(n1){
          
    if(n1>=1)
    {
        factorial=factorial*n1;
        fact1(n1-1);
    }
    return factorial;

}
console.log(fact1(4));


//return n*(n-1)!