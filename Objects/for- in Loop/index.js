const obj = {
  name: "Jhon",
  city: "Goa",
};

const isNameFound = "name" in obj;

console.log(isNameFound);

const isAgeFound = "age" in obj;

console.log(isAgeFound);

console.log("----Looping Through an Object with for...in----");

const person = {
  userName: "user1",
  location: "location 1",
};

for (let key in person) {
  console.log(`Key: ${key} Value:${person[key]}`);
}
console.log("-------------------------------------------------");

const car = {
  make: "Tesla",
  model: "Model S",
  year: 2020,
};

// Check if a property exists

const isModelPresent = "model" in car;

console.log(isModelPresent);

// Loop through the object

for (let key in car) {
  console.log(`key:${key}, value:${car[key]}`);
}
