function calculateFinalScore(candidate) {

    // Check if input is null
    if (candidate === null) {
        return 'Invalid Input';
    }

    // Check if input is an array
    if (Array.isArray(candidate)) {
        return 'Invalid Input';
    }

    // Check if input is an object
    if (typeof candidate !== 'object') {
        return 'Invalid Input';
    }

    // Access each property from the object
    let name = candidate.name;
    let testScore = candidate.testScore;
    let schoolGrade = candidate.schoolGrade;
    let isFFamily = candidate.isFFamily;

    // Validate name
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }

    // Validate testScore
    if (typeof testScore !== 'number' || testScore < 0 || testScore > 50) {
        return 'Invalid Input';
    }

    // Validate schoolGrade
    if (typeof schoolGrade !== 'number' || schoolGrade < 0 || schoolGrade > 30) {
        return 'Invalid Input';
    }

    // Validate isFFamily
    if (typeof isFFamily !== 'boolean') {
        return 'Invalid Input';
    }

    // Calculate base score
    let finalScore = testScore + schoolGrade;

    // Add 20 points if candidate's family is farmer
    if (isFFamily === true) {
        finalScore = finalScore + 20;
    }

    // Check if final score is 80 or more
    if (finalScore >= 80) {
        return true;
    }
    else {
        return false;
    }
}

console.log(calculateFinalScore({ name: 'Rajib', testScore: 45, schoolGrade: 25, isFFamily: true }));

console.log(calculateFinalScore({ name: 'Rajib', testScore: 45, schoolGrade: 25, isFFamily: false }));

console.log(calculateFinalScore('hello'));

console.log(calculateFinalScore({ name: 'Rajib', testScore: 15, schoolGrade: 25, isFFamily: true }));

console.log(calculateFinalScore([1, 2, 3]));

console.log(calculateFinalScore(null));