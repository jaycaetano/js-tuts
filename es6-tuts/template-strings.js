 // cancatention of a string

 const name = 'Bill';
 const age = 35;

 const sentence = 'My name is' + name +', and I am' + age + 'years old';
 console.log(sentence);

  // for template strings use a back tick ``

const sentence = `My name is ${name}, and I am ${age} years old`;
console.log(sentence);  

//you can also modify the template string varibles like so

const sentence = `My name is ${name}, and I am ${age * 2} years old`;
console.log(sentence);

// much more flexablity for interperting strings