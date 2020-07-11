//MOdern world ToDo Trello. 
//using for Each loop and for loop
const myTodos = []

myTodos.push('Buy domain name')
myTodos.push('code on hackerrank')
myTodos.push('Go to Gym')

myTodos.forEach(function(todo, index){
    console.log(`Your task number ${index+1} is ${todo}`);
})

// assignment part i.e, to reverse the order of the above and use only for loop instead  of forEach loop. 

for(let i=myTodos.length; i>0; i--)
{
    console.log(`Your task number is ${[i]} is ${myTodos[i]}`);
}

// above was assignment part 