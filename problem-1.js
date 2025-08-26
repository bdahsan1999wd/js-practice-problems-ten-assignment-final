function calculateTax(income, expense) {
    // Input validation: must be numbers
    if (typeof income !== 'number' || typeof expense !== 'number') {
        return 'Invalid Input';
    }

    // Input validation: must be positive numbers
    if (income < 0 || expense < 0) {
        return 'Invalid Input';
    }

    // Input validation: income should be >= expense
    if (expense > income) {
        return 'Invalid Input';
    }

    // Taxable income
    const taxableIncome = income - expense;

    // Tax = 20% of taxable income
    const tax = taxableIncome * 0.20;

    return tax;
}

console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));