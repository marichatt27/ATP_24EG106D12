//object operations
let person={
    name12:'ravi',
    age12:25
}

//add new property
    person.city='hyd'
    console.log(person)

//update existing property
    person.name12='bhanu'
    console.log(person)

//delete property
    delete person.age12
    console.log(person)


//Advanced array operations
let testData=[90,45,-12,165,73]

//filter
    //get elements greater than 30
    let result=[]
    for(let element of testData){
        if(element>30)
            result.push(element)
    }    
    console.log(result)

    //1.using filter method
    // let r=testData.filter(function(){
    //      return element>30
    // })
    // console.log(r)
    //2.
    let r2=testData.filter((element)=>element>30)
    console.log(r2)

    //get elements bteween 40 and 80
    let r3=testData.filter((element)=>element>=40 && element<=80)
    console.log(r3)


//map(modify)
    //add 10 for each elemnt
    let r4=testData.map((element)=>element+10)
    console.log(r4)

    //add 10 for the elements <50and subtract 20 from elements >50
    const r5=testData.map((element)=>{
        if(element<50){
            return element+10
        }else{
            return element-20
        }
    })
    console.log(r5)

//reduce
    //find sum of elements
    const sum=testData.reduce((accumulator,element)=>accumulator+element)
    //                            90          45          135
    //                            135        -12          123
    //                            123         65          188
    //                            188         73          261
    //                            261
    console.log(sum)    

    //find small ele and big ele
    const small=testData.reduce((accumulator,element)=>{
        if(accumulator>element)
            accumulator=element
            return accumulator
    })
    console.log(small)
    const big=testData.reduce((accumulator,element)=>{
        if(accumulator<element)
            accumulator=element
            return accumulator
    })
    console.log(big)

    
//find method
    //search 73
    let el=testData.find(element=>element==73)
    console.log(el)    
//findIndex
    let el1=testData.findIndex(element=>element==73)
    console.log(el1)      
//sort
    let data=[9,10,8,4]
    let newArray=data.sort()
    console.log("new array",newArray) 
    //2
    let newArray2=data.sort((a,b)=>a-b)
    console.log("new array",newArray)
    console.log(data)   