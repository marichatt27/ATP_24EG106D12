//array
let marks=[10,20,30,40]  //'marks' and 'names' are the referneces of array, not names of array
let names=['sruta','srut','sru']
console.log(marks[1])
//to access all teh elemnts in array we iterate using (for-of loop)
for(let x of marks){
    console.log(x)
}

//object
let student={
    sid:100,
    name:'sruta',
    age:19,
    course:'B.tech'
}

console.log(student)
console.log(student.name)
console.log(student['age'])
//to access all the elemnts in object we iterate using (for-in loop)

for(let v in student){
    console.log(v)
    console.log(student[v])
}


//array of objects
let emps=[
    {eno:1,name:'sruta'},
    {eno:2,name:'neha'},
    {eno:3,name:'sru'}
];
console.log(emps)

//q1 iterate the emps array and print eno and name of each emp

for(let s of emps){
    console.log('emp is',s.eno,'name is',s.name)
}


//complex objects or nested objects

let students={
    rollno:12,
    firstName:'ravi',
    lastName:'kiran',
    marks:[90,30,40,50],
    address:{
        city:'bang',
        pincode:777777
    },
    getFullName:function(){
        return this.firstName+this.lastName
    },
    avgMarks: function(){
        //get avg marks
        let total = 0;
        for (let i = 0; i < this.marks.length; i++) {
            total += this.marks[i];
        }
        let avg=total / this.marks.length;
        return avg
    }
}
console.log(students.getFullName())
console.log(students.avgMarks())

//array operations

let testArray=[10,20,30]
//dynamic insertion
    //insert at end
        testArray.push(40)
        console.log(testArray)
    //insert at beginning
        testArray.unshift(3)    
        console.log(testArray)
    //insert in middle
        testArray.splice(2,0,123)
        console.log(testArray)
//dynamic deletion
    //delete from start
        let removeElement=testArray.shift()
        console.log(testArray)        
    //delete from end
        testArray.pop()
        console.log(testArray)    
    //delete from beginning
        testArray.splice(2,1)    
        console.log(testArray) 
//dynamic updation
    testArray.splice(2,1,23)
    console.log(testArray)         


    