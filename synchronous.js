// //synchronous
// console.log('first')
// for(let i=0;i<1000000000;i++){}
// console.log('second')
// console.log('third')


// //asynchronous
// console.log('first')
// setTimeout(()=>{
//     console.log('task completed')
// },9000)    //takes 9 secs, in the mean time,
// //  it executes the other lines of code
// console.log('second')
// console.log('third')



//time out function
setTimeout(()=>{
    console.log('callback executed')
},3000);
console.log('hi')

//set interval
setInterval(()=>{
    console.log("timer called")
},2000)