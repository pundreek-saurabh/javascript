var john = {
    name: 'I am john',
    age: 24,
    isActive: true
}

var marry = {
    name: 'I am  marry ',
    age : 23,
    isActive: true,
}

var sam ={
    name: ' I am sam',
    age: 29,
    isActive: false,
}

let users = new Map() // 'users' is an object which we are gonna create from map.
// push some data using property of map:

users.set('pundreek', john)
users.set('saurabh', marry)
users.set('srivastava', sam)

console.log(users); //output: Map {}
console.log(users.size); // output: 3
console.log(users.get('srivastava')); // output: { name: ' I am sam', age: 29, isActive: false }
console.log(users.keys()); // output: MapIterator { 'pundreek', 'saurabh', 'srivastava' }

//SYNTAX OF FOR OF LOOP :-
// for (const 'iterator' of 'object') {
    
// }

for (const key of users.keys()) {
    console.log(key);
}

for (const value of users.values()) {
    console.log(value);
}

for (const [key,value] of users.entries()) {
    console.log(key + " = " + value.age);
    
}

users.forEach((value,key) => console.log(key + " = " + value.name));

var arrofArr = [['one','1'],['two','2'],['three','3']]

var newMap = new  Map(arrofArr)
console.log(newMap);
//Assignment : convert the line in string litrels.