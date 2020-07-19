//Method 1 : Defining function 
const seyHello = function(name){

    return "hey there  " + name + " !"
}
console.log(seyHello('saurabh'));



//Method 2 : Making basic arrow function
const sayHello = (name) => {

    return `Hey there ${name} !`
}
console.log(sayHello('saurabh'));



//Method 3: We generally don't use blocks in this function for single line and can remove braces like this 
const sayHallo = (name) => `Hey there ${name} !`

console.log(sayHallo('saurabh'));



const todos = [{
    title: 'Buy bread',
    isDone: true
}, {
    title: 'Go to gym',
    isDone: true
}, {
    title: 'Code in js',
    isDone: false
},]

const thingsDone = todos.filter((todo)=>  todo.isDone === true
)
console.log(thingsDone);

const thingsNotDone = todos.filter ((function_parameter) => function_parameter.isDone === false 
)

console.log(thingsNotDone);

const camera = {
    price : 320,
    weight : 2000,

//Never use arrow function in method and constructors , as here in following case.
    myDes : function () {
        return `This cannon camera is of ${this.price} $ `
    },
}

console.log(camera.myDes());

//only for redux purpose 
// cosnt func = () => ({key: 'value'});