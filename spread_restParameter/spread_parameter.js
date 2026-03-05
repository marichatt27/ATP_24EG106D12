//write a function that receives any number of arg and returns sum
function sum(...a){
    // let sum=0     
    // for(i of a)
    // sum=sum+i
    // return sum    
    return a.reduce((acc,ele)=>acc+ele)
}
console.log(sum(10,20,30,40,50))