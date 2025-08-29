function registerCourse(students, studentName, courseName) {

    // Input validation first
    if (!Array.isArray(students) || typeof studentName !== 'string' || typeof courseName !== 'string') {
        return "Invalid input";
    }

    // Find student by name
    let student = students.find(s => s.name === studentName);

    if (!student) return "Student not found";

    // Student courses must be an array
    if (!Array.isArray(student.courses)) return "Invalid input";

    // Add course if not already present
    if (!student.courses.includes(courseName)) {
        student.courses.push(courseName);
    }

    return student;
}

console.log(registerCourse([{ name: "A", courses: ["Math"] }, { name: "B", courses: ["English"] }], "A", "Science"));

console.log(registerCourse([{ name: "C", courses: ["Biology"] }], "D", "Physics"));

console.log(registerCourse([{ name: "E", courses: "NotArray" }], "E", "Math"));