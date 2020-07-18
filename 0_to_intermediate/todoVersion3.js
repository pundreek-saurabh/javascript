let myTodos = {
    day: 'Moaday',
    meetings: 0,
    meetDone: 0,
    //creating a property contains function is known as method.
    //if this thing is inside a class or object then it is a method else it is function.
    addMeeting: function(num){
        this.meetings = this.meetings + num
        console.log(this); //"this" keyword is referencing all properties inside the current object
    },
    summary: function(){
        return `You have ${this.meetings} meetings today`
    },
}

let myTodosTwo = {
    day: 'Tuesday',
    meetings: 12,
    meetDone: 0,
    addMeeting: function(num){
        this.meetings= this.meetings +num
        return `You have ${this.meetings} meetings have on Tuesday`
    },
    meetDone: function(done){
        this.meetDone= this.meetings - done
        return `You have ${this.meetDone} meetings left on Tuesday`
    },
    summary: function(){
        total= this.meetings-this.meetDone
        return `You have done ${total} meetings today`
    }
}

console.log(myTodosTwo.addMeeting(9));
// myTodos.addMeeting(4)
// console.log(myTodos.summary());
console.log(myTodosTwo.meetDone(4));
console.log(myTodosTwo.summary());

//Assignment 
//Handle meeting done 
//create a function that can recycle a day.
//add summary part inside it.