function votingSystem(votes) {

    // Input validation first
    if (!Array.isArray(votes)) return "Invalid input";

    let count = {};

    for (let vote of votes) {
        // Each vote must be a string
        if (typeof vote !== 'string') return "Invalid input";

        count[vote] = (count[vote] || 0) + 1;
    }

    let maxVotes = 0;
    let winners = [];

    for (let candidate in count) {
        if (count[candidate] > maxVotes) {
            maxVotes = count[candidate];
            winners = [candidate];
        }
        else if (count[candidate] === maxVotes) {
            winners.push(candidate);
        }
    }

    // If tie, return "Tie"
    return winners.length === 1 ? winners[0] : "Tie";
}

console.log(votingSystem(["Hasan", "Rafiq", "Hasan", "Amin"]));
console.log(votingSystem(["Kamal", "Rafiq", "Kamal", "Rafiq"]));
console.log(votingSystem([123, "Hasan"]));