function deleteInvalids(array) {

    // Check if input is a valid array
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }

    // Initialize a new array to store valid numbers
    let numberArray = [];

    // Loop through each element in the array
    for (let element of array) {

        // Check if the element is a number and not NaN
        if (typeof element === 'number' && !isNaN(element)) {
            // Add valid numbers to the new array
            numberArray.push(element);
        }
    }

    return numberArray;
}

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, '12', [1, 2], { ob: 'lala' }]));
console.log(deleteInvalids(['1', { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));