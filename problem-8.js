function convertTemperature(temp, unit, targetUnit) {
    // console.log("Input Temperature: ", temp, unit, "to", targetUnit);

    // Input validation
    if (typeof temp !== 'number') {
        return "Invalid Input";
    }

    if (!["C", "F", "K"].includes(unit)) {
        return "Invalid Input";
    }

    if (!["C", "F", "K"].includes(targetUnit)) {
        return "Invalid Input";
    }


    // Convert input to Celsius
    let celsius;

    if (unit === "C") {
        celsius = temp;
        // console.log("Already in Celsius:", celsius);
    }

    else if (unit === "F") {
        celsius = (temp - 32) * 5 / 9;
        // console.log("Converted to Celsius from F:", celsius);
    }

    else if (unit === "K") {
        celsius = temp - 273.15;
        // console.log("Converted to Celsius from K:", celsius);
    }



    // Convert from Celsius to target unit
    let result;

    if (targetUnit === "C") {
        result = celsius;
    }

    else if (targetUnit === "F") {
        result = celsius * 9 / 5 + 32;
    }

    else if (targetUnit === "K") {
        result = celsius + 273.15;
    }
    // console.log("Converted to target unit:", result);

    // Round to 2 decimals using toFixed and convert back to number
    const roundedResult = Number(result.toFixed(2));

    return roundedResult;
}

console.log("--------------------");
console.log("Final Output:", convertTemperature(0, "C", "F"));
console.log("--------------------");
console.log("Final Output:", convertTemperature(100, "C", "K"));
console.log("--------------------");
console.log("Final Output:", convertTemperature(212, "F", "C"));
console.log("--------------------");
console.log("Final Output:", convertTemperature(300, "K", "C"));
console.log("--------------------");
console.log("Final Output:", convertTemperature(30, "X", "F"));