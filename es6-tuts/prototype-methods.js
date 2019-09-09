//2 from a function constructor

function Person(name, age){
    this.name = name;
    this.age = age;
}

//3 you can give your function constructor prototype methods by doing the following
Person.prototype.speak = function(){
    console.log(`Hi my name is ${this.name}`);
}

//1 created an obkect
const bill = new Person ('Bill', 50);
bill.speak();
//console.log(bill);

