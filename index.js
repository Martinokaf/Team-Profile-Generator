// This imports from the lib directory
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// This improts libraries within the application 
const inquirer = require("inquirer");
// This is for handling file and directory
const path = require("path");
//This is for file system operations
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// This array populates employee data
let team = [];

// This is called when running node index.js
function teamMember() {
// When running this application, users are being prompt with some questions which requires some valid input. Then creates the manager and also push to the team array.
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What's the name of the Team Manager?",             
            },
            {
                type: "input",
                name: "id",
                message: "What's the Team Manager's ID number?", 
            },
            {
                type: "input",
                name: "email",
                message: "What's the email address of the Team Manager?", 
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What's the office number of the Team Manager?", 
            },
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);
            createTeam();
        })
    }
    // This fuction createTeam checks with the user if they would like to creating a new engineer or intern or finish building the team
    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "menu",
                message: "Would you like to:",
                choices: ["Add an Engineer?", "Add an Intern?", "Finish building the team?"],
            },
        ]).then(answers => {
            if (answers.menu === "Add an Engineer?") {
                addEngineer();
                return;
            } else if (answers.menu === "Add an Intern?") {
                addIntern();
                return;
            } else {
                buildTeam();
                return;
            }
        })
    };
    // This prompt users to answer few questions, which then creates a new Engineer and pushes it to the team array, then calls createTeam to add new employee
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What's the name of the Engineer?",             
            },
            {
                type: "input",
                name: "id",
                message: "What's the Engineer's ID number?", 
            },
            {
                type: "input",
                name: "email",
                message: "What's the email address of the Engineer?", 
            },
            {
                type: "input",
                name: "github",
                message: "What's the Engineer's GitHub username?", 
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer);
            createTeam();
        })
    }
    // This prompt users to answer few questions, which then creates a new Intern and pushes it to the team array, then calls createTeam to add new employee
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What's the name of the Intern?",             
            },
            {
                type: "input",
                name: "id",
                message: "What's the Intern's ID number?", 
            },
            {
                type: "input",
                name: "email",
                message: "What's the email address of the Intern?", 
            },
            {
                type: "input",
                name: "school",
                message: "Which school did the Intern go to?", 
            },
        ]).then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(intern);
            createTeam();
        })
    }
    // This verify that the directory for "outpuPath" does exists and if there's any situation of it not being created, it creates one
    function buildTeam() {
        inquirer.prompt([
            {
                type: "input",
                name: "teamname",
                message: "What's the Team's name",  
            },
        // This method prompts the "output" in order to check for any existing folder, if there isn't any, it creates one 
        // writeFile method writes the file with the help of the answers provided to the "output" directory
        ]).then(answer => {
            if (!fs.existsSync(OUTPUT_DIR)) {
                makeDirectory()
                writeFile(answer)
            } else writeFile(answer)
        })
    }
    // This method prompt the "output" directory which then showcase it being successful or not to the user 
    function makeDirectory() {
        fs.mkdir(OUTPUT_DIR, err =>
            err ? console.error(err) : console.log ("Directory sucessfully created"))
    }
// The writeFile method store the answer of the teamname as a parameter which then wrte a file called ${answer.teamname}.html
// The outputPath method store file path which is being pass to writeFile funtion 
// The fs.existsSync method verifies if there's any existing file and if there is, a duplicate wouldn't be created 
// The fs.writeFile method prompt the team array which passes the team name into render function
    function writeFile(answer) {
        // console.log(team)
        const outputPath = path.join(OUTPUT_DIR, `${answer.teamname}.html`)
        if (!fs.existsSync(outputPath)) {
        fs.writeFile(outputPath, render(team), (err) => 
            err ? console.error(err) : console.log('File successfully created'))
        } else console.log("Team with that name already exists!")
    }

    createManager();

}
teamMember();



