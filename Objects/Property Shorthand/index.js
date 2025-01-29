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
