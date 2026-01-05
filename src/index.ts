const numbers: number[] = [10, 20, 30, 40, 50];

// let maxNumber:number = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//      if (numbers[i] > maxNumber) {
//         maxNumber = numbers[i];
//     }
// }

// console.log(maxNumber);

// let middleNumber:number = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     middleNumber+=numbers[i]; 
// }

// console.log(middleNumber/numbers.length);



// let numbers3: number[] = [3, 4, 2, -3, -5];
// let negative:number = 0;
// for (let num of numbers3) {
    
//     if (num < 0) {
//         negative=num;
//         console.log(negative);
//         break;
//     }
//    }


type Student = {
    name: string,
    course: number,
    averageCrade: number
}

const students: Student[] = [
    {name: "Jack", course: 3, averageCrade: 78 },
    {name: "Camila", course: 2, averageCrade: 90 },
    {name: "Samuei", course: 4, averageCrade: 98 },
    {name: "Donald", course: 4, averageCrade: 50 }
];

let middleGrade:number = 0;

for (let student of students) {
    middleGrade=middleGrade+student.averageCrade;
}
console.log(middleGrade/students.length);

let maxGrade:number = students[0].averageCrade;
for (let i = 1; i < students.length; i++ ) {
    if (students[i].averageCrade > maxGrade) {
        maxGrade = students[i].averageCrade;
    }
}

console.log(maxGrade);