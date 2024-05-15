let customerFirstName: string = "John"
let customerLastName: string = "Smith"
let customerAge: number = 25

type Customer = {firstName: string, lastName: string, active: boolean}

let firstCustomer: Customer = {
    firstName: "Mary",
    lastName: "Johns",
    active: true
}

// customerFirstName = 100 typescript will give error for trying to reassign unmatching datatypes