var Student = (function () {
    function Student(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = firstname + " " + lastname;
    }
    return Student;
})();
function greeter(person) {
    return "Hello, " + person.fullname + " ";
}
var user = new Student("Johnny", "Kaeru");
console.log(greeter(user));
