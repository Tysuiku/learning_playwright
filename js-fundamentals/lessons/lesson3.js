//objects

let customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ['volvo', 'toyota', 'tesla']
}

// dot notation 
customer.firstName = "Mike"
console.log(customer.lastName)

// bracket notation
customer['lastName'] = "Silver"
console.log(customer['firstName'])

//arrays 
let car = ['volvo', 'toyota', 'tesla']
car[1] = 'BMW'
console.log(car[1])
console.log(customer.cars[0])

