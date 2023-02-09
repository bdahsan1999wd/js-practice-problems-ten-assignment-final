/* --------------------problem 5-------------------- */

// The code defines a JavaScript function gemsToDiamond that takes three numbers as its input and returns a result based on the calculation of the total number of gems.

function gemsToDiamond(num1, num2, num3){
    const totalGems = (num1 * 21) + (num2 * 32) + (num3 * 43);

    if(typeof num1, num2, num3 === 'string'){
        return 'Please provide a number...';
    }
    else if(totalGems >= 2000){
        const myDiamond = totalGems - 2000;
        return myDiamond;
    }
    else{
        return totalGems;
    }
}
// console.log('gemsToDiamond:',gemsToDiamond(100, 5, 1));