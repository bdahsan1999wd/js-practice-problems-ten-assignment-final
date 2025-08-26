function checkDigitsInName(name) {

    // Check if input is a string
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }

    // List of all digits
    const digits = '0123456789';

    // Loop through each character
    for (let i = 0; i < name.length; i++) {

        // Check if the character is a digit
        if (digits.includes(name[i])) {

            // Found a digit
            return true;
        }
    }

    // No digits found
    return false;
}

console.log(checkDigitsInName('Raj123'));
console.log(checkDigitsInName('n9ayeem'));
console.log(checkDigitsInName('e1mu3'));
console.log(checkDigitsInName('Suman'));
console.log(checkDigitsInName('Name2024'));
console.log(checkDigitsInName('!@#'));
console.log(checkDigitsInName(['Raj']));