let student = "Jane";
let result = "";

const subjects = ["Mobile Programming", "Networking", "Database"];
const grades = [90, 90, 85];
const status = ["Passed", "Passed", "Passed"];

for (let i = 0; i < grades.length; i++) {

    if (grades[i] >= 75) {
        result = result + subjects[i] + " - Passed";
    }

    if (grades[i] < 75) {
        result = result + subjects[i] + " - Failed";
    }

    console.log(result);
    result = "";
}

