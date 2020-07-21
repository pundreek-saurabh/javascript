// alert('make sure you have properly connected to existing document')
function myValidation(){
    let  myValue = document.getElementById('myForm').value;
    if (isNaN(myValue) || myValue<1 || myValue >20) { // isNaN : Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
        console.log("Not a valid input");
        
    }
    else{
        console.log("this input is okay");
    }
}

//Advanced form validation:

document.querySelector('.myForm').addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value = '';
})