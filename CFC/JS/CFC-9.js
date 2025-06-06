function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90 && score <= 99) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else if (score >= 0 && score <= 59) {
        return "F";
    } else {
        return "Invalid score";
    }
}

// Example function calls:
console.log(getGrade(100)); // Output: "A++"
console.log(getGrade(95));  // Output: "A"
console.log(getGrade(85));  // Output: "B"
console.log(getGrade(75));  // Output: "C"
console.log(getGrade(65));  // Output: "D"
console.log(getGrade(50));  // Output: "F"
console.log(getGrade(-5));  // Output: "Invalid score"
console.log(getGrade(105)); // Output: "Invalid score"
