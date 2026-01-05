const numbers = [10, 20, 30, 40, 50];
const students = [
    { name: "Jack", course: 3, averageCrade: 78 },
    { name: "Camila", course: 2, averageCrade: 90 },
    { name: "Samuel", course: 4, averageCrade: 98 },
    { name: "Donald", course: 4, averageCrade: 50 }
];
let middleGrade = 0;
for (let student of students) {
    middleGrade = middleGrade + student.averageCrade;
}
console.log(middleGrade / students.length);
let maxGrade = students[0].averageCrade;
let bestStudent = { name: '', course: 0, averageCrade: 0 };
for (let i = 1; i < students.length; i++) {
    if (students[i].averageCrade > maxGrade) {
        bestStudent = students[i];
    }
}
console.log(bestStudent.averageCrade, bestStudent.course, bestStudent.name);
