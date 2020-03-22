let person0 = {
    name: "macy",
    height: 64,
    age: 32,
    canVote: true
}


function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.canVote = age >= 18;
    this.greet = () => console.log(`Hi, my name is ${this.name}`);
    this.birthday = () => this.age++;
}

let person1 = new Person("Jummy", 45, 53);
let person2 = new Person("Randall", 590, 43);

person1.greet();
person2.greet();