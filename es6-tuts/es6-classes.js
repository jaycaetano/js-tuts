// use classes to decalare new objects

// es6 class consturctor
class Person {
    constructor (name, age, children){
        this.name = name;
        this.age = age;
        this.children = children;
    }
speak () {
    console.log(`Hi my name is ${this.name}`);
}
birth(child){
   this.children.push(child); 
}
};


// create object from es6 constructor
const bill = new Person (bill, 50, ['sean', 'steph']);
bill.speak();
bill.birth('jess');
console.log(bill.children);