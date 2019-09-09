//arrays
const names =['John', 'Bill', 'Sam']
const moreNames = ['William', 'Paul', 'Mike']

// if you wanted to concatenate the above arrays in es5
let allNames = []
allNames.push('Gio')
allNames = allNames.concat(moreNames)
console.log (allNames);

// spread operators
// if you wanted to concatenate the above arrays in es6
const allNames = [...names, 'Gio', ...moreNames]
console.log(allNames);


