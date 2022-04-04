// https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

// const finalGrade = (exam, proj) => {
//   if (exam > 90 && proj > 10) {
//     return 100;
//   } else if (exam > 75 && proj >= 5) {
//     return 90;
//   } else if (exam > 50 && proj >= 2) {
//     return 75;
//   } else return 0;
// };

const finalGrade = (exam, proj) => {
  return exam > 90 || proj > 10
    ? 100
    : exam > 75 && proj >= 5
    ? 90
    : exam > 50 && proj >= 2
    ? 75
    : 0;
};

//-----------------------------------------------------------------------------------------------------------------
console.log(finalGrade(100, 12)); //100
console.log(finalGrade(85, 5)); //90
console.log(finalGrade(0, 11)); //100
