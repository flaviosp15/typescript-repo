// ========================== INTERFACE ==========================
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'Peter', lastName: 'Parker' };

document.body.textContent = greeter(user);

// ========================== CLASSES ==========================

class Student {
  fullName: string;
  //prettier-ignore
  constructor(
    public firstName: string, 
    public middleName: string, 
    public lastName: string
  ) {
    this.fullName = firstName + ' ' + middleName + ' ' + lastName;
  }
}

const userStudent = new Student('Mary', 'J.', 'Parker');

document.body.textContent = greeter(userStudent);
