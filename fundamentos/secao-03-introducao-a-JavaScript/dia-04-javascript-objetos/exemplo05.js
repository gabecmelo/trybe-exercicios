let customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1)

let customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2)

function addProperty(object, key, value) {
  object[key] = value
}

let newKey = 'lastName'
addProperty(customer1, newKey, 'Ferreira')
console.log(customer1)

addProperty(customer2, newKey, 'Oliveira')
console.log(customer2);

newKey = 'fullName'
let fullName = customer1.firstName + ' ' + customer1.lastName

addProperty(customer1, newKey, fullName)

console.log(customer1)

fullName = customer2.firstName + ' ' + customer2.lastName
addProperty(customer2, newKey, fullName)
console.log(customer2)

