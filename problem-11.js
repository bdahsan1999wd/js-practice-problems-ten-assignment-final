function calculateMoney(ticketSale) {

    // Validate the input first
    if (typeof ticketSale !== 'number' || ticketSale < 0) {
        return 'Invalid number';
    }

    const ticketPrice = 120;       // Each ticket costs
    const fixedCost = 500;         // Fixed monthly cost
    const staffCost = 50;          // Variable cost per staff member
    const numberOfStaff = 8;       // Total number of staff members

    // Calculate total revenue from ticket sales
    const totalRevenue = ticketSale * ticketPrice;

    // Calculate total cost
    const totalVariableCost = staffCost * numberOfStaff;
    const totalCost = fixedCost + totalVariableCost;

    // Calculate remaining money
    const remainingAmount = totalRevenue - totalCost;

    // Return the final result
    return remainingAmount;
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log(calculateMoney('Hello'));