function analyzeTransactions(transactions) {

    // Input validation first
    if (!Array.isArray(transactions)) return "Invalid input";

    let totalDeposits = 0;
    let totalWithdrawals = 0;
    let balance = 0;

    for (let tx of transactions) {
        if (typeof tx.amount !== 'number' || !["deposit", "withdraw"].includes(tx.type)) {
            return "Invalid input";
        }

        if (tx.type === "deposit") {
            totalDeposits += tx.amount;
            balance += tx.amount;
        }
        else {
            // withdraw
            totalWithdrawals += tx.amount;
            balance -= tx.amount;

            // Check for insufficient funds
            if (balance < 0) return "Insufficient funds";
        }
    }

    return { totalDeposits, totalWithdrawals, balance };
}

console.log(analyzeTransactions([
    { type: "deposit", amount: 5000 },
    { type: "withdraw", amount: 2000 },
    { type: "deposit", amount: 3000 }
]));

console.log(analyzeTransactions([{ type: "withdraw", amount: 1000 }]));
console.log(analyzeTransactions([{ type: "deposit", amount: "abc" }]));
