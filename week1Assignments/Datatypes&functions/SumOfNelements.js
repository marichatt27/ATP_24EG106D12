function arraySum(a){
    let sum=0;
    for(let i=0;i<a.length;i++){
        sum=sum+a[i];
    }
    return sum
}

console.log(arraySum([10,20,30]))