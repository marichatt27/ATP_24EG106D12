//create 20 student objects
class Student{
    //properties
    #sno;
    name;    //private variable can be acces only within the class (#)
    email;
    //constructor
    constructor(sno,name,email){
        //initialize object
        this.#sno=sno;
        this.name=name;
        this.email=email;
    }
    //methods
    getStudentName(){
        return this.name
    }
}

//create object
let std1=new Student(10,'ravi','jkdsg')
let std2=new Student(20,'hello','dskjg')
console.log(std1.name,std1.sno,std1.email)


//employee class
class employee{
    //private members
    #eno;
    #name;

    //constructor
    constructor(eno,name){
        this.#eno=eno;
        this.#name=name;
    }

getData (){
    console.log('eno is',this.eno,'name is',this.name)
}
}