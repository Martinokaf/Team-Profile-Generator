// Importing Employee class
const Employee = require('./Employee');
// This section defined the break down of the manager class which extends employee and also edge towards the constructor method which creates the data and then super calling the constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    }
// This is a method of prompting the office number of the manager
getOfficeNumber() {
    return this.officeNumber
}}
// This method exports the manager class in order to be imported for usage
module.exports = Manager; 
