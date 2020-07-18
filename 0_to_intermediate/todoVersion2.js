//object creation

let myTodos = {
    meetings : 0,
    meetDone : 0,
    day : 'Monday',
}

let addMeetings = function(object, meet=0){
    object.meetings = object.meetings + meet 
    return `You have added ${meet} meetings today !`
}

let meetDone = function(object, meet=0){
     object.meetDone = object.meetDone - meet 
     return `You have completed ${meet} meetings today !`
}

let  resetDay = function(object){
    object.meetings = 0
    object.meetDone = 0
}

let getSummaryOfDay = function(object){
    let meetLeft = object.meetings + object.meetDone
    return `You have ${meetLeft} meetings today !` 
}

console.log (addMeetings(myTodos,4));
console.log (addMeetings(myTodos,3));
console.log (meetDone(myTodos,5));
console.log( getSummaryOfDay(myTodos));


