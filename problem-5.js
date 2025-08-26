function waitingTime(timesArray, serialNumber) {

    // Input Validation
    // Check if timesArray is actually an array
    let isTimesArrayValid = Array.isArray(timesArray);

    // Check if serialNumber is actually a number
    let isSerialNumberValid = typeof serialNumber === 'number';

    // If any validation fails, return an error message
    if (isTimesArrayValid === false || isSerialNumberValid === false) {
        return 'Invalid Input';
    }

    // Calculate total interview time
    let totalTime = 0;

    for (let i = 0; i < timesArray.length; i++) {
        totalTime = totalTime + timesArray[i];
    }

    // Calculate average interview time
    let averageTime = 0;
    let hasInterviewsDone = timesArray.length > 0;

    if (hasInterviewsDone) {
        let initialAverageTime = totalTime / timesArray.length;
        averageTime = Math.round(initialAverageTime);
    }

    // Calculate how many people before Israat
    let peopleBeforeIsraat = serialNumber - 1;

    // Remove already interviewed people
    let remainingPeople = peopleBeforeIsraat - timesArray.length;

    // Ensure remainingPeople is not negative
    if (remainingPeople < 0) {
        remainingPeople = 0;
    }

    // Calculate waiting time
    let waitingTime = remainingPeople * averageTime;

    // Return final result
    return waitingTime;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));