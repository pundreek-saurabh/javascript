// console.log('5' - 7);
// const giveType = typeof '5'
// console.log(giveType);

const adder = true + 5 // it will consider true as 1
console.log(adder);

const adderA = false + 5 // it will treat false as 0
console.log(adderA);

const loginDetails = []
//logic for getting details from database
const loginID = loginDetails[0]
if (loginID !== undefined){ 
    console.log('Aloow user to login');
}
else{
    console.log('Auth failed');
}

//values that interpret as false :-
// false
// 0
// ''
// null
// undefined