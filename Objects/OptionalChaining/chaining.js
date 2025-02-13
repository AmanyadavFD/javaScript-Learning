const user = {
  name: "Jhon",
  age: 99,
  address: {
    street: "Kalina",
    // city: "Mumbai",
  },
  likes: "Eat Sing Sleep Repeat",
  getDisplayMessage: function () {
    console.log("Welcome Message!");
    return;
  },
};

// if (user.address != undefined) {
//   console.log(user.address.city);
// } else {
//   console.log("Address Not Found!!!");
// }

// console.log(user.address?.city);

// user.getDisplayMessage();
console.log(user.getDisplayAddress?.());

console.log(user.hobbies);
