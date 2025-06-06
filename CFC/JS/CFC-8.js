function getAverage(scores) {
    if (scores.length === 0) return 0; // Handle empty array case
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

// Example function calls:
console.log(getAverage([80, 90, 100])); // Output: 90
console.log(getAverage([70, 75, 85, 90])); // Output: 80
console.log(getAverage([])); // Output: 0
