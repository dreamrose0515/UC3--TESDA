// Prototype Inheritance
// Person contructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName =lastName;
}

// Greeting
Person.prototype.greeting = funtion() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

cost person1 = new Person('ITcher', 'Jean');

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, ) {
    Person.call(thism firstName, lastName);

    this.phone = phone;
    this.membership = membeership
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer, prototype return Customer
Customer.prototype.constructor = Customer;


// Create customer
const customer1 = new Customer('Maila', 'Meija' '555-33-222', 'Standard');

console.log(customer1.greeting());