const numbers = [10, 20, 30, 40, 50];
const students = [
    { name: "Jack", course: 3, averageCrade: 78 },
    { name: "Camila", course: 2, averageCrade: 90 },
    { name: "Samuei", course: 4, averageCrade: 98 },
    { name: "Donald", course: 4, averageCrade: 50 }
];
let middleGrade = 0;
for (let student of students) {
    middleGrade = middleGrade + student.averageCrade;
}
console.log(middleGrade / students.length);
let maxGrade = students[0].averageCrade;
for (let i = 1; i < students.length; i++) {
    if (students[i].averageCrade > maxGrade) {
        maxGrade = students[i].averageCrade;
    }
}
console.log(maxGrade);
