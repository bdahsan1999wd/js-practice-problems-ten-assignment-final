function checkName(name) {

    // Validate the input first
    if (typeof name !== 'string') {
        return 'Invalid';
    }

    // Get the last letter (case-insensitive)
    let lastLetter = name[name.length - 1].toLowerCase();

    // Define allowed letters
    let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    // Check if last letter is in the allowed letters
    let result = checkArray.includes(lastLetter);

    return result ? 'Good Name' : 'Bad Name';
}

console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName('jhankar'));
console.log(checkName(199));
console.log(checkName(['Rashed']));