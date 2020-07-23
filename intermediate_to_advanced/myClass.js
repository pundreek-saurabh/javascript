class User{
    //if we dont define contructor , it is by default created by class and be kept empty. 
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname= lastname;
    }
    //getFullName is a method 
    getFullName(){
        let fullname = `${this.firstname} ${this.lastname} is my fullname.`
        return fullname;
    }

    editName(newname){
        const myname= newname.split(" ")
        this.firstname = myname[0];
        this.lastname = myname[1];
        //assignment:- take a middle name too.
    }
}
//Here is a class Teacher which has all the methods and properties of class User. That is inheritance
class Teacher extends User{
    constructor(firstname, lastname,subject){
        super(firstname, lastname)//must have all the parimeters of constructor of parent class
        this.subject = subject;
    }
    /*method overriding here , now the jane object will first look into teacher class and look
    about getFullName and if not found here then it will go to it's parent class that is user class*/
    getFullName(){
        let fullname = `${this.firstname} ${this.lastname} is my fullname. And I teach ${this.subject}`
        return fullname;
    }
}

//new is a keyword when you want to create a "fresh object" from this class.
const john = new User('john', 'doe', 34) // making an object form User class.
const jane = new Teacher("Jane", "Doe", "Javascript ");
console.log(john);
console.log(jane.getFullName());
console.log(john.getFullName());
john.editName("Johnny Anderson");
console.log(john.getFullName());

// const sammy = new User();
// console.log(sammy);