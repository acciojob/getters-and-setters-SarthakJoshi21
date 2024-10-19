class Person {
  constructor(name, age) {
    this._name = name; // Use private property for name
    this.age = age; // Public property for age with setter
  }

  get name() {
    return this._name;
  }

  set age(age) {
    if (typeof age !== 'number' || age < 0) {
      throw new Error('Age must be a positive number');
    }
    this._age = age;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age); // Call parent constructor
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age); // Call parent constructor
  }

  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;   
