// alert('File is attached') //used to make popup on screen as per given messege.
// console.log(document.title);
// document.title = 'I got changed'; // used this instead of "console.log(document.title);"
// console.log(document.getElementById('idone'));//get the exact data along with tag in console .
// console.log(document.getElementsByClassName('classone'));

// const myElement = document.querySelectorAll('.classone')//better way of doning the all above things.
// console.log(myElement[0]);

// const myPElements = document.querySelector('p')
// myPElements.textContent ='I am being changed using js'

const myPElements = document.querySelectorAll('p')

myPElements.forEach(function(p){
    p.textContent = 'I am changed using js loop'
    // p.remove() //here my javascript has removed all the element.
})

//Assignment : Converting this function in arrow function :-
// myPElements.forEach((p) => p.textContent = ' I am changed using js loop')

const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via js'

document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent = ' I was clicked '
})

//track input form :
document.querySelector('#myForm').addEventListener('input',()=>{
    console.log(event.target.value);
})

