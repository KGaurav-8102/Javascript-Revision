//there are two ways to create Object
//1. using Object constructs

let userm = new Object();

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

//Object Clonning and merging

let user = {
    name: 'John',
    age: 30,
}

let clone = {};

for (let key in user) {
    clone[key] = user[key]
}

clone.name = 'Pete';
console.log(user.name);

//Object.assign

let kg = {
    name: 'John',
};

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(kg, permissions1, permissions2);
console.log(kg);

//deep Cloning
let gk = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clones = Object.assign({}, gk);
  
  console.log( gk.sizes === clones.sizes ); // true, same object
  
  // user and clone share sizes
  gk.sizes.width++;       // change a property from one place
  console.log(clones.sizes.width);

  //Object Method this
  
  let gautam = {
    name: 'Gaurav',
    age: 20,

    sayHi() {
        console.log(this.name);
    }

  }

 gautam.sayHi();
 //OPtional Chaining

 let key = "firstName";

 let user2 = {
    firstName: "John",
 };

 let user3 = null;

 console.log(user2?.[key]);
 console.log(user3?.[key]);

 //Symbol

 let mob = {
    name: 'Redmi 10 Prime',
 };

 let id = Symbol("id");

 mob[id] = 1;


 console.log(mob[1]);

 //Global Symbols
 let sym = Symbol.for("name");
 let sym2 = Symbol.for("id");

console.log( Symbol.keyFor(sym) ); // name
console.log( Symbol.keyFor(sym2) );

//Type conversion symbol.toPrimitive

let userin = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // conversions demo:
  console.log(userin); // hint: string -> {name: "John"}
  console.log(+userin); // hint: number -> 1000
  console.log(userin + 500); 