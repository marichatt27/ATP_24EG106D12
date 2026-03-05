let createGame=function(nameOfPlayer){
    return function(level){
            console.log('hello',nameOfPlayer,'you are at level',level)

    }
}

let createlevel=createGame('ravi')
createlevel(1)
createlevel(2)
createlevel(3)

//2
let createGame2=function(level2,nameOfPlayer2){
    console.log("hello",nameOfPlayer2,'you are at level',level2)
}
let createlevel2=createGame2('ravi')
createlevel2(1)
createlevel2(2)
createlevel2(3)