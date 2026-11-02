let student = "Jane";
let result = "";

const subjects = ["Mobile Programming", "Networking", "Database"];
const grades = [90, 90, 85];

console.log("===== STUDENT GRADE REPORT =====");
console.log("Student: " + student);
console.log("-------------------------");

for (let i = 0; i < grades.length; i++) {
    let status = "";

    if (grades[i] >= 75) {
        status = "Passed";
    } else {
        status = "Failed";
    }

    result = subjects[i] + " - Grade: " + grades[i] + " - " + status;

    console.log(result);
}

console.log("-------------------------");
console.log("All subjects have been checked.");
