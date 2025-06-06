function hasPassingGrade(score) {
    const grade = getGrade(score);
    return grade !== "F" && grade !== "Invalid score";
}

// Example function calls:
console.log(hasPassingGrade(85));  // Output: true  (B)
console.log(hasPassingGrade(65));  // Output: true  (D)
console.log(hasPassingGrade(50));  // Output: false (F)
console.log(hasPassingGrade(100)); // Output: true  (A++)
console.log(hasPassingGrade(-5));  // Output: false (Invalid score)
