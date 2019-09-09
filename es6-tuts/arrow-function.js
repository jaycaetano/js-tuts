const integers = [1,2,3]; 
const updatedIntegers = integers.map(function (number) {
    return number +=1
});

// the above function can be written with arrow function like below

const integers = [1,2,3];
const updatedIntegers = integers.map(number => number += 1);
console.log (updatedIntegers);

// arrow function and implecent value return example

const ages = [23, 42, 6, 18];
const adults = ages.filter(function(age){
    return age > 20;
});
console.log(adults);

// implecent returning a value in JS

const ages = [23, 42, 6, 18];
const adults = ages.filter((age) => age > 20);
console.log(adults);
 