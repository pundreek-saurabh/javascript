//to introduce search functionlaity :-
const newTodos = [
    {
    title: 'Buy bread', 
    isDone: false,
    },
    {
        title: 'GO to gym',
        isDone : false,
    },
    {
        title: 'record youtube videos',
        isDone: true,  
    },] //objects are inside the array.


    //findIndex method goes through every single array and stops at the position where we are looking for 
    const index = newTodos.findIndex(function(todo, index){
        console.log (todo);
        return todo.title === 'GO to gym' // it will print all the element before it .
            }) //it can take a callback function as a parameter.callback fumction are simple function , they don't have any name.
    console.log(index);


//METHOD 1
    // const findTodo = function(myTodos,title) {
    //     const index = myTodos.findIndex(function(todo,index){
    //         return todo.title.toLowerCase()=== title.toLowerCase()
    //     })
    //     return myTodos[index]
    // }
    // let printMe = findTodo(newTodos,'GO to gym')
    // console.log(printMe);

//METHOD 2
    const findTodo = function(myTodos,title){
        const titleReturned = myTodos.find(function(todo, index){
            return todo.title.toLowerCase() === title.toLowerCase()
        })

        return titleReturned;
    }
    let printMe = findTodo(newTodos,'GO to gym')
    console.log(printMe);



