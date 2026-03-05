
//promise producer
console.log("friend is waiting for a call in 5 secs")
let futureCondition=false;

const promiseObj=new Promise((fulfilled,rejected)=>{
    setTimer(()=>{
        if(futureCondition==true)
            fulfilled("promise fulfilled")
        else
            rejected("promise rejected")
    },5000);
});
//promise consumer
promiseObj.then(()=>{
    console.log("message is then")
}).catch(()=>{
    console.log("message is catch")
});


