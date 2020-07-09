let say_hello=function(name)
{
    console.log(`greeting for ${name}`);
    console.log(`hey ${name}`);
}

say_hello('pundreek')

let myAdder= function(num1,num2){
    let sum= num1+num2
    return sum
}

console.log(myAdder(9,8));

// THREE MUST KNOWN METHOD FOR ARRAY IN JAVASCRIPT

const numbers= [1,2,3,4,5,6,7,8]
//numbers[1]='SOMETHING'
console.log(numbers);

//operation for start 
numbers.shift()     // first element will be deleted .
console.log(numbers); 
console.log(numbers.shift()); // tells that which number has been deleted

numbers.unshift(0) //inserts new element at the start of the array , here it is 0
console.log(numbers);

//operation for end
numbers.pop() //remove the last element from array
console.log(numbers);

numbers.push(9) //insert new value at the end of the array , here it is 9
console.log(numbers);

//operation for our choice || at middle
numbers.splice(1,3,'NULL')  // start deleting elements form position 1 , delete 3 elements and putting NULL at position of 1. 
console.log(numbers);