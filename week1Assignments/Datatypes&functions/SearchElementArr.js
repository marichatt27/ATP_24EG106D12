function search(arr,key){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key)
            return i
        else
            return 0
    }
}
console.log(search([10,20,30],80))