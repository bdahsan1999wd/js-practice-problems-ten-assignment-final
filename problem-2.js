/* --------------------problem 2-------------------- */

// The code defines a JavaScript function evenOdd that takes a string as its input and returns a string indicating whether the length of the input string is even or odd.

function evenOdd(string){
    let largestName = string.length;
    if(largestName % 2 === 0){
        return 'even';
    }
    else if(largestName % 2 === 1){
        return 'odd'
    }
    else{
        if(typeof string !== 'string'){
            return 'Please provide a string...';
        }
    }
}
// console.log('evenOdd:',evenOdd('Batch7'));