function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'Peter', lastName: 'Parker' };
document.body.textContent = greeter(user);
// ========================== CLASSES ==========================
var Student = /** @class */ (function () {
    //prettier-ignore
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
    return Student;
}());
var userStudent = new Student('Mary', 'J.', 'Parker');
document.body.textContent = greeter(userStudent);
