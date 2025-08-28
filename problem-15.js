function monthlySavings(arr, livingCost) {

    // Validate inputs first
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'Invalid input';
    }

    let totalIncome = 0;

    // Calculate total income after tax
    for (let payment of arr) {
        if (payment >= 3000) {
            let tax = payment * 0.2;       // 20% tax for high payments
            totalIncome += payment - tax;  // Add post-tax income
        }
        else {
            totalIncome += payment;        // Add full payment if < 3000
        }
    }

    // Subtract living cost to calculate savings
    let savings = totalIncome - livingCost;

    return savings >= 0 ? savings : 'earn more';
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));