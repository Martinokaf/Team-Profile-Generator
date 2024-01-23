// This defines the Employee class and also edge towards the constructor method which creates the data
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // This method helps in getting the name of the employee
    getName() {
        return this.name;
    }
    // This method helps in getting the id of the employee
    getId() {
        return this.id;
    }
    // This method helps in prompting the email of the employee
    getEmail() {
        return this.email;
    }
    // This method helps in prompting the role of the employee 
    getRole() {
        return 'Employee';
    }
}

// This method exports the Employee class in order to be imported for usage
module.exports = Employee;