let test=function(){
    return 'hello'
}
let result=test()
console.log(result)


//function retruning another function
let test2=function(){
    return function(){
        return 100
    }
}

let result2=test2()
console.log(result2()) //function()(returns 100)