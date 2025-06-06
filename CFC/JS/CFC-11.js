function studentMsg(totalScores, studentScore) {
    const average = getAverage(totalScores);
    const grade = getGrade(studentScore);
    const passed = hasPassingGrade(studentScore);

    let message = "Class average: " + average + ". Your grade: " + grade + ". ";
    if (passed) {
        message += "You passed the course.";
    } else {
        message += "You failed the course.";
    }
    return message;
}

// Example function calls:
console.log(studentMsg([80, 90, 100], 85)); // Class average: 90. Your grade: B. You passed the course.
console.log(studentMsg([70, 75, 85, 90], 50)); // Class average: 80. Your grade: F. You failed the course.
