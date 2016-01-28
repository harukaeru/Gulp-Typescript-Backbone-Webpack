interface Person {
    firstname: string;
    lastname: string;
    fullname: string;
}

class Student {
    fullname: string;
    constructor(public firstname, public lastname) {
        this.fullname = firstname + " " + lastname;
    }
}

function greeter(person: Person) {
    return "Hello, " + person.fullname + " " 
}

var user = new Student("Johnny", "Kaeru");

console.log(greeter(user));
