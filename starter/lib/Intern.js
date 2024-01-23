// Importing Employee class
const Employee = require("./Employee");
// This section defined the break down of the Intern class which extends employee and also edge towards the constructor method which creates the data and then super calling the constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
}
// This is a method of prompting the school the Intern is being entolled
getSchool() {
    return this.school
}}
// This method exports the Intern class in order to be imported for usage
module.exports = Intern;