const obj = {
  name: "Prakash",
  address: {
    street: "123 Main St",
    city: "Mumbai",
    state: "Maharashtra",
  },
  courses: ["JavaScript", "React", "Node.js"],
};

const { name, address, courses } = obj;

console.log(name);
console.log(address);
console.log(courses);

console.log("----Nested Destructuring----");

const {
  address: { street, city, state },
} = obj;

console.log(street);
console.log(city);
console.log(state);

console.log("----Renaming Variables----");

const {
  name: userName,
  address: { city: userCity },
} = obj;

console.log(userName);
console.log(userCity);

console.log("----Using Rest Operator----");

const { name: objName, ...rest } = obj;
console.log(objName);
console.log(rest);

console.log("\x1b[1m----Destructuring Arrays----\x1b[0m");
console.log("\x1b[1m----Basic Array Destructuring----\x1b[0m");

const numbers = [1, 2, 3];

const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);

console.log("----Skipping Items----");

const [first, , second] = numbers;

console.log(first);
console.log(second);

console.log("----Using Rest Operator----");

const [num1, ...rest1] = numbers;

console.log(num1);
console.log(rest1);

console.log("\x1b[31m----Practical Example with Nested Objects----\x1b[0m");

const employees = {
  engineers: {
    emp1: { id: 1, name: "John Doe", occupation: "Software Engineer" },
    emp2: { id: 2, name: "Jane Smith", occupation: "Data Scientist" },
  },
  placement: {
    emp3: { id: 3, name: "Emily Jones", occupation: "HR Manager" },
  },
  youtube: {
    emp4: { id: 4, name: "Chris Brown", occupation: "Content Creator" },
  },
};

const {
  engineers: {
    emp1: { name: userNam, occupation: engineerOccupation },
  },
} = employees;

console.log(userNam);
console.log(engineerOccupation);

console.log("----Destructuring with Dynamic Property Names----");

const propName = "engineers";
const { [propName]: engineers } = employees;
console.log(engineers);
