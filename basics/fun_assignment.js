let marks= function(score, totalMarks){
    
    let percent= (score/totalMarks)*100
    if (percent>=90) {
        console.log('A Grade');
    }
    else if (percent>=80) {
        console.log('B Grade');
    }
    else{
        console.log('C Grade');
    }
    console.log('Your percentage is :', percent);
}
marks(98,100);