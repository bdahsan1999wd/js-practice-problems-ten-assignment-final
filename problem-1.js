/* --------------------problem 1-------------------- */

// This code is a JavaScript function that performs some mathematical operations on a number input and returns the result. 

function mindGame(number){
    const multiplyNumber = number * 3;
    const sum = multiplyNumber + 10;
    const division = sum / 2;
    const subtract = division -5;
    if(typeof number !== 'number'){
        return 'Please enter a number...';
    }
    return subtract;
}
// console.log('mindGame:',mindGame(50));