console.log("---Example of Shallow Copy---");

const person1 = {
  name: "Aman Yadav",
  age: 27,
};
console.log(person1);
const person2 = person1;

person2.name = "Shubham";

// console.log(person1);
console.log(person2);

// Using Object to assign for shallow copy

const userInfo = {
  name: "jhon",
  age: 45,
  position: "Front-end Enginner",
};

const otherUserInfo = Object.assign({}, userInfo);
otherUserInfo.name = "Js";

console.log(otherUserInfo);

console.log(userInfo);

// Using Object to assign for shallow copy (nested objects)

const userData = {
  name: "Jhon",
  age: 30,
  addres: {
    city: "Shimla",
    state: "Himachal Pradesh",
  },
};

const userData2 = Object.assign({}, userData);

userData2.name = "Ashish";
userData2.addres.city = "anything...";
userData2.age = 0;

console.log(userData2);

console.log(userData);
