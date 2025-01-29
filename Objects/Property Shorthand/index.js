function getObject(name, city) {
  return {
    name: name,
    city: city,
  };
}

const obj = getObject("Aman", "Pune");
console.log(obj);

const age = 25;
const job = "Developer";
const student = "Ashish";
const course = "Redux";

const person = {
  age,
  job,
};
console.log(person);

console.log({ student, course });

function createStudents(userName, city) {
  return {
    userName,
    city,
  };
}

const student1 = createStudents("Akash", "Mumbai");
const student2 = createStudents("Ashish", "Chennai");

console.log(student1);
console.log(student2);

const students = [
  { name: "Akash", city: "Mumbai", course: "JavaScript" },
  { name: "Ashish", city: "Chennai", course: "Redux" },
  { name: "Sita", city: "Delhi", course: "React" },
];

students.forEach((student) => {
  console.log(student);
});
