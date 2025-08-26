function checkGrade(marks) {
    if (typeof marks !== 'number' || marks < 0 || marks > 100) return "Invalid Input";

    if (marks >= 80) return "A+";
    else if (marks >= 70) return "A";
    else if (marks >= 60) return "A-";
    else if (marks >= 50) return "B";
    else if (marks >= 40) return "C";
    else if (marks >= 33) return "D";
    else return "F";
}

console.log(checkGrade(95));
console.log(checkGrade(75));
console.log(checkGrade(65));
console.log(checkGrade(55));
console.log(checkGrade(45));
console.log(checkGrade(35));
console.log(checkGrade(25));
console.log(checkGrade(120));
console.log(checkGrade("85"));