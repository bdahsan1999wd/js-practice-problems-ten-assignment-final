/* --------------------problem 4-------------------- */

// The code defines a JavaScript function findingBadData that takes an array as its input and returns the number of elements in the array that are less than or equal to 0.

function findingBadData(array){
    if (!Array.isArray(array)) {
        return 'Please provide an array...';
    }
    let count = 0;
    for(let i = 0; i < array.length; i++){
        const element = array[i];
        if(element <= 0) count++;
    }
    return count;
}
// console.log('findingBadData:',findingBadData([-4, -9, -5, -33, -55]));