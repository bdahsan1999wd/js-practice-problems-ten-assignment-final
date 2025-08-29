function managePatients(patients, minAge) {

    // Input validation first
    if (!Array.isArray(patients) || typeof minAge !== 'number') return "Invalid input";

    let filtered = [];

    for (let patient of patients) {
        // Each patient object must have name (string), age (number), disease (string)
        if (
            typeof patient.name !== 'string' ||
            typeof patient.age !== 'number' ||
            typeof patient.disease !== 'string') { return "Invalid input"; }

        if (patient.age >= minAge) filtered.push(patient);
    }

    return filtered;
}

console.log(managePatients([
    { name: "A", age: 30, disease: "Flu" },
    { name: "B", age: 20, disease: "Cold" }], 25));

console.log(managePatients([
    { name: "C", age: 40, disease: "Fever" },
    { name: "D", age: 50, disease: "Asthma" }], 35));

console.log(managePatients([{ name: "E", age: "abc", disease: "Cough" }], 20));