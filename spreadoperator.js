//spread operator(create copies of arrays and objects)

let obj={a:100};
//create copy
let copyObj=obj;

//make change to obj
obj.a=123;
console.log(copyObj)
console.log(obj)



//using spread operator
let originalobj={a:10,b:20};
//create copy
let copyObject={...originalobj};
obj.a=123;
console.log(copyObject)
console.log(originalobj)
//add elements.properties while copying
//merge

let person={
    name:'ravi',
    address:{
        city:'hyd',
        pincode:777777
    }
}
let copyperson={...person}
let copyperson2=structuredClone(person)
person.city='mumbai'
console.log(person)
console.log(copyperson)
console.log(copyperson2)


//rest parameter
function findSum(a)
{
    console.log(a)
}
findSum(10,20)

    //using rest parameter
    function findSum(...a)  //do not write anything after rest parameter
    {
        console.log(a)
    }
    findSum(10,20)
      