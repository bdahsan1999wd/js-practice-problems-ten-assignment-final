function calculateDelivery(weight, zone) {
    // Input validation
    if (typeof weight !== 'number' || weight < 0) return "Invalid Input";
    if (typeof zone !== 'string') return "Invalid Input";

    let charge;

    if (zone === "local") {
        charge = weight * 25;   // Local: 25 per kg
    }
    else if (zone === "national") {
        charge = weight * 35;   // National: 35 per kg
    }
    else if (zone === "international") {
        charge = weight * 300;  // International: 300 per kg
    }
    else {
        return "Invalid Input";
    }

    return charge;
}

console.log(calculateDelivery(2, "local"));
console.log(calculateDelivery(5.5, "national"));
console.log(calculateDelivery(1, "international"));
console.log(calculateDelivery(-2, "local"));
console.log(calculateDelivery(2, "city"));