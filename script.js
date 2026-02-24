let synomyms = ['plethora', 'array', 'cornucopia']
synomyms.includes('plethora') // true
synomyms.includes('abundance') // false
synomyns[1] = 'variety'

let lastItem = synomymns.pop() // "cornucopia"

console.log(synomyms) // ["plethora", "variety"]

synomyms.push('multitude') // ["plethora", "variety", "multitude"]

let emptyArray = []
// emptyArray and oneItemArray are different arrays, even though they have the same content and JavaScript treats them as different objects in memory. Therefore, they are not equal when compared directly.

let oneItemArray = ['only item']

// Arrays can contain any type of data, including other arrays, objects, functions, etc. For example:

let mixedArray = [
  42,
  'hello',
  { name: 'Alice' },
  [1, 2, 3],
  function () {
    return "I'm a function!"
  },
]

console.log(mixedArray[0]) // 42
console.log(mixedArray[1]) // "hello"
console.log(mixedArray[2]) // { name: "Alice" }
console.log(mixedArray[3]) // [1, 2, 3]
console.log(mixedArray[4]()) // "I'm a function!"

//Tricks used in arrays

// 1. Using the spread operator to create a new array with additional elements:
let originalArray = [1, 2, 3]
let newArray = [...originalArray, 4, 5]
console.log(newArray) // [1, 2, 3, 4, 5]

// 2. Using the map method to transform an array:
let numbers = [1, 2, 3]
let squaredNumbers = numbers.map((num) => num * num)
console.log(squaredNumbers) // [1, 4, 9]

// 3. Using the filter method to create a new array with only certain elements:
let mixedNumbers = [1, -2, 3, -4, 5]
let positiveNumbers = mixedNumbers.filter((num) => num > 0)
console.log(positiveNumbers) // [1, 3, 5]

// immutable variables with mutable values

const myArray = [1, 2, 3]
myArray.push(4) // This is allowed because we are modifying the contents of the array, not reassigning the variable itself.
console.log(myArray) // [1, 2, 3, 4]

myArray = [5, 6, 7] // This will throw an error because we are trying to reassign a constant variable.
console.log(myArray) // This line will not be reached due to the error above.

let numbers1 = [1, 2, 3]
let result1 = numbers1.map((num) => num * 2)
console.log(result1) // [2, 4, 6]

let numbers2 = [1, 2, 3]
let result2 = numbers2.filter((num) => num > 1)
console.log(result2) // [2, 3]

let numbers3 = [1, 2, 3]
let result3 = numbers3.reduce((acc, num) => acc + num, 0)
console.log(result3) // 6

//Lets move on to objects in the next section
//object declaration and initialization

let user = new Object() // "object literal syntax is more common and concise than using the Object constructor, so it's generally recommended to use the literal syntax for creating objects in JavaScript."

let user1 = {
  name: 'Alice',
  age: 30,
  isAdmin: true,
}

console.log(user1.name) // this will output "Alice"
console.log(user1.age) // this will output 30
console.log(user1.isAdmin) // this will output true

// to remove a property from an object, you can use the delete operator:

delete user1.age // this will remove the "age" property from the user1 object
console.log(user1.age) // this will output undefined, since the age property has been deleted

//the last property of an object can be accessed using the Object.keys() method, which returns an array of the object's property names. You can then access the last property by using the length of the array minus one as the index:

let lastProperty = Object.keys(user1)[Object.keys(user1).length - 1]
console.log(lastProperty) // this will output "isAdmin", which is the last property of the user1 object

//You can also access the value of the last property using the same method:

let lastPropertyValue = user1[Object.keys(user1)[Object.keys(user1).length - 1]]
console.log(lastPropertyValue) // this will output true, which is the value of the "isAdmin" property

//the dot notation is used to access properties of an object when the property name is a valid identifier (i.e., it does not contain spaces or special characters). For example:

let person = {
  firstName: 'John',
  lastName: 'Doe',
}

console.log(person.firstName) // this will output "John"
console.log(person.lastName) // this will output "Doe"

//the square bracket notation is used to access properties of an object when the property name is not a valid identifier or when you want to use a variable to access the property. For example:

let person1 = {
  'first name': 'Jane',
  'last name': 'Smith',
}

console.log(person1['first name']) // this will output "Jane"
console.log(person1['last name']) // this will output "Smith"

let propertyName = 'first name'
console.log(person1[propertyName]) // this will also output "Jane", since we are using a variable to access the property

//You can also use the square  bracket notation to access properties with special characters or spaces in their names, which cannot be accessed using dot notation. For example:

let person2 = {
  'first-name': 'Alice',
  'last-name': 'Johnson',
}

console.log(person2['first-name']) // this will output "Alice"
console.log(person2['last-name']) // this will output "Johnson"
