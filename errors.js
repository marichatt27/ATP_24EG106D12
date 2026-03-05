//creating an error
const err=new Error("this is new error")
console.log(err.name)
console.log(err.meassage)
console.log(err.stack)

//handling errors
console.log("first");
try{
    console.log(a);
} catch(err){
    console.log(err,message)
}
console.log("second")
console.log("third")