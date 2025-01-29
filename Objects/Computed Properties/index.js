const readLineSync = require("readline-sync");
// console.log(readLineSync);

const obj = {
  name: "Aman",
  age: 27,
  skills: "JavaScript",
  courses: [],
};

// Getting a key from the user\
const key = readLineSync.question(
  `What do you want to know about the mentor? (name, age,skills ):`
);
obj[key] = obj[key] || "Not Available";

console.log(obj[key]);

const course = readLineSync.question(
  "Which course do you want to learn? (HTML, CSS, JS, React, Redux)"
);
obj.courses.push(course);
console.log("Updated Courses:", obj.courses);
