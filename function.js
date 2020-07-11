let fullNameMaker= function(fname,lname)
{
    console.log('welcome to lco');
    console.log(`greetings mr. ${fname} ${lname}`);
}

fullNameMaker('jane', 'doe')

// defalut parameter in javascript

let myMultiplier = function(num1, num2)
{
    return num1*num2
}

console.log(myMultiplier()); // result would be NaN;

let guestUser = function (name, courseCount) {
    return 'hello '+name +  'and your course couont is ' + courseCount
}

console.log(guestUser()); // both parameters would be 'undefined' by default.