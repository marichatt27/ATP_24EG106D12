//functions are called ad first class objects in js

let test =function(a){
    console.log(a)
}

test(10)
test('hello')


//make payment
let makePayment=function(amount,paymentType){  //main function
    console.log('payment of',amount,'has started')
    paymentType()
}

let UPIPayment=function(){    //call back function
    console.log("UPI payment done")
}
let cardPayment=function(){   //call back function
    console.log("card payment done")
}

makePayment(2000,UPIPayment)
makePayment(5000,cardPayment)


//scopes
let a=10  //global scope

function tests(){
    let b=20  //function scope
    if(true){
        let c=30 //block scope
    }
}

//closure property
// until the finish of main function all the variables must be available
let sum=function(x){
    return function(y){
        return x+y
    }
}

let x=sum(10)
console.log(x(20))