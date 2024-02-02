// Importing Employee class
const Employee = require("./Employee");
// This section defined the break down of the Engineer class which extends employee and also edge towards the constructor method which creates the data and then super calling the constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    }
// This is a method of prompting the Engineer's github username
getGithub() {
    return this.github
}
getRole() {
    return 'Engineer';
}
}
// This method exports the Engineer class in order to be imported for usage
module.exports = Engineer;