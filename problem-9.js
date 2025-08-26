function convertDistance(distance, unit, targetUnit) {
    console.log("Input: ", distance, unit, "to", targetUnit);

    // Input validation
    if (typeof distance !== 'number') {
        return "Invalid Input";
    }

    if (!["km", "mi"].includes(unit)) {
        return "Invalid Input";
    }

    if (!["km", "mi"].includes(targetUnit)) {
        return "Invalid Input";
    }


    // Conversion logic
    let result;

    if (unit === "km" && targetUnit === "mi") {
        result = distance * 0.621371;
        console.log("Converted km to mi: ", result);
    }
    else if (unit === "mi" && targetUnit === "km") {
        result = distance * 1.60934;
        console.log("Converted mi to km: ", result);
    }
    else {
        result = distance;
        console.log("Same unit, no conversion needed");
    }

    // Round to 5 decimals using toFixed
    const roundedResult = Number(result.toFixed(5));

    return roundedResult;
}

console.log("--------------------");
console.log("Final Output:", convertDistance(10, "km", "mi"));
console.log("--------------------");
console.log("Final Output:", convertDistance(5, "mi", "km"));
console.log("--------------------");
console.log("Final Output:", convertDistance(0, "km", "mi"));
console.log("--------------------");
console.log("Final Output:", convertDistance(1, "mi", "mi"));
console.log("--------------------");
console.log("Final Output:", convertDistance(10, "X", "mi"));
console.log("--------------------");
console.log("Final Output:", convertDistance(10, "km", "Y"));
console.log("--------------------");
console.log("Final Output:", convertDistance("5", "km", "mi"));