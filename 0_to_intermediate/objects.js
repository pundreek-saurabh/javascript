//myYoutubeVideo is an object here
let myYoutubeVideo = { 
    title: 'Loops in javascript', //make sure a : should must be there and a , in the end
    videoLength: '15',
    videoCreator: 'Pundreek',
    videoDescription: 'this is video description'
}

let myYoutubeVideoTwo = { 
    title: 'Function', //make sure a : should must be there and a , in the end
    videoLength: '10',
    videoCreator: 'Pundreek',
    videoDescription: 'this is video description'
}


console.log(myYoutubeVideo); //access the created object

//To access some specific data from the object created. 
console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);
myYoutubeVideo.title = 'ForEach loop in js'
console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);
console.log(myYoutubeVideo);

//Assignment: Create a object on javascript course containing name , price and discription. 

/*let javascriptCourse ={
    name: 'Pundreek created this course',
    price: '2500 Rs only',
    discription: 'course can be completed in two months. Hpy coding!!!'
}
console.log(javascriptCourse);
*/

//FUNCTION ALONG WITH OBJECTS.

//passing object in a function and access the video length of given parameter
let changeVideoLength =function(myObject){
    console.log(`Time of this video is ${myObject.videoLength}`); 
    
}


changeVideoLength(myYoutubeVideo); // passing created object as a parameter of this function. 

/* SUMMARY */

// 1-- If the property of an object is changed , it will also be changed in real object also.
// 2-- We can design a simple function which takes an input and returns a console.log .
/* 3-- We can create a function that can take an object and return an object too, which can 
be stored in  variable and the can selectively access any returned thing using dot notation and 
can be printed by console.log*/ 
 
