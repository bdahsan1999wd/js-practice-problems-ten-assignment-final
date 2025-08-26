function convertCurrency(amount, currency, targetCurrency) {
    // console.log("Input: ", amount, currency, "to", targetCurrency);

    // Input validation
    if (typeof amount !== 'number') {
        return "Invalid Input";
    }

    if (!["USD", "BDT"].includes(currency)) {
        return "Invalid Input";
    }

    if (!["USD", "BDT"].includes(targetCurrency)) {
        return "Invalid Input";
    }

    // Conversion logic
    let result;

    if (currency === "USD" && targetCurrency === "BDT") {
        result = amount * 122;
        // console.log("Converted USD to BDT:", result);
    }
    else if (currency === "BDT" && targetCurrency === "USD") {
        result = amount * 0.0081967;
        // console.log("Converted BDT to USD:", result);
    }
    else {
        result = amount; // same currency
        // console.log("Same currency, no conversion needed:", result);
    }

    // Round to 2 decimals using toFixed
    const roundedResult = Number(result.toFixed(2));

    return roundedResult;
}

console.log("--------------------");
console.log("Final Output:", convertCurrency(10, "USD", "BDT"));
console.log("--------------------");
console.log("Final Output:", convertCurrency(2440, "BDT", "USD"));
console.log("--------------------");
console.log("Final Output:", convertCurrency(0, "USD", "BDT"));
console.log("--------------------");
console.log("Final Output:", convertCurrency(100, "USD", "USD"));
console.log("--------------------");
console.log("Final Output:", convertCurrency(50, "X", "BDT"));
console.log("--------------------");
console.log("Final Output:", convertCurrency(50, "USD", "Y"));
console.log("--------------------");
console.log("Final Output:", convertCurrency("20", "USD", "BDT"));