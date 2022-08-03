//there are two ways to create Object
//1. using Object constructs

let user = new Object();

//2. Literal Syntax

let users = {
    name: "John",
    age: 20,
    "like birds" : true,
};

//Object propertiese accessible using dot notation

users.isAdmin = true;

console.log(users.name);
console.log(users.age);
console.log(users);

delete users.age ;
console.log(users);

console.log(users["like birds"]);
console.log("name" in users);

for (let key in users) {
    console.log(key);
    console.log(users[key]);
}