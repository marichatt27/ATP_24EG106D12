//destructuring(unpacking)
let arr=[10,20,30]
let [a,b,c]=arr;
console.log(a,b,c)

let emp={
    eid:300,
    name:'tcs',
    address:{
        city:'hyd'
    }
}
let {eid,name,address:{city}}=emp
console.log(eid,name,city)

