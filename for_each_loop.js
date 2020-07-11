const days=['Mon', 'Tue', 'Wed' , 'Thr', 'Fri', 'Sat', 'Sun']

//console.log(days[0]);

let sayHello= function()
{
    console.log('greeting message for user');
}

//syntax of forEach loop is :- arrayName.forEach(function)

days.forEach(sayHello) // it will just run for the array size. 

//if sayHello function doesn't have a name then copy the exact syntax and paste like this

days.forEach(function(anyParameter)
{
    console.log(anyParameter);
})

// passing an additional parameter of 'index' (of the array) here
//first parameter is name inside and second one is index by defalut.
days.forEach(function(print_day, num) 
{
    console.log(`starts from ${num+1} -- ${print_day}`); // using index+1 to start index from 1 instead from 0. 
})

//for loop

for (let index=0; index<days.length; index++)
{
    const element= days[index];
    console.log(element);
}
