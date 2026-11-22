'use strict'
let arr=["100000","22222","45436","15666","1456","66664","150000000000000000000000"]
for(let i=0;i<arr.length;i++){
    if(arr[i][0]==="2" || arr[i][0]==="4"){
        console.log(arr[i])
    }
}
const isPrime=function(n){
    let divs=0
    for(let i=1;i<=n;i++){
        if(n%i===0){
            divs++
        }
    }
    if(divs===2){
        console.log("делители этого числа:",1,"и",n)
    }
}
for(let i=1;i<=100;i++){
    isPrime(i)
}