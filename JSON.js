// let obj={
//     "username":"ravi",   //JSON all the keys anad values are in double quotes
//     "email":"ravikkk"
// }


//make API request
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>console.log('res is',res))
.then(postsData=>console.log(pastData))
.catch(err=>console.log('err is',err))