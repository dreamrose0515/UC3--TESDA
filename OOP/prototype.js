// PROTOTYPE EXPLAINED
// object.prototype
// Person.prototype

// Person Constructor
funtion Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //     const diff = date.now() - this.birthday/getTime();
    //     const ageDate = new date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate age
Person.prototype.calculateAge = function() {
    const diff = date.now() - this.birthday/getTime();
    const ageDate = new date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full Name
Person.prototype.getFullName = functioon() {
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsmarried = function(newLastName) {
    this.lastName = newLastName;
}

const cheenamae = new Person('cheenamae', 'albos', '8-20-00');

console.log(cheenamae.getsMarried('Araya'));

console.log(cheenamae)

console.log(cheenamae.hasOwnProperty('age'));

