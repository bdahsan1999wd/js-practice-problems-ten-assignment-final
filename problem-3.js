/* --------------------problem 3-------------------- */

// The code defines a JavaScript function isLGSeven that takes a number as its input and returns a result based on the mathematical operations performed on it.

function isLGSeven(number){
    const difference = number - 7;
    if(typeof number !== 'number'){
        return 'Please provide a number...';
    }
    else if(difference < 7){
         return difference;
    }
    else {(doubleNumber = number * 2)
        return doubleNumber;
    }
}
// console.log('isLGSeven:',isLGSeven(15));