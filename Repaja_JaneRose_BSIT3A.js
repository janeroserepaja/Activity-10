```javascript
let student = "Jane";
let result = "";

const subjects = ["Mobile Programming", "Networking", "Database"];
const grades = [90, 90, 85];
const status = ["Passed", "Passed", "Passed"];

console.log("Student: " + student);
console.log("Grade Results:");
console.log("-------------------------");

for (let i = 0; i < grades.length; i++) {

    if (grades[i] >= 75) {
        result = subjects[i] + " - " + status[i];
    }

    if (grades[i] < 75) {
        result = subjects[i] + " - Failed";
    }

    console.log(result);
    result = "";
}

console.log("-------------------------");
console.log("All subjects have been checked.");
```
