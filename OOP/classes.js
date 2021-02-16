// ES6 Classes

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    calculateAge() {
        const diff = date.now() - this.birthday/getTime();
        const ageDate = new date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried() {
        this.lastName = newLastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const cheenamae = new Person('Cheenamae', 'Lee', '02-20-00');

cheenamae.getsMarried('Garcia');
console.log(cheenamae);

console.log(Person.addNumbers(1,2));