function big3(a,b,c){
    if(a>b && a>c)
        return a
    else if(b>a && b>c)
        return c
    else if(c>a && c>b)
        return c
}

console.log(big3(10,20,30))