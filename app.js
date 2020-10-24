const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const managerQues = [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "name"
    },
    {
        type: "input", 
        message: "What is your manager's id?",
        name: "id",
        validate: (str) => {
            if (/^\d+$/.test(str)) {
                return true;
            }

            else {
                return "Please use only numbers for the ID.";
            }
        }
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "email",
        validate: (str) => {
            if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(str)) {
                return true;
            }
            else {
                return "Please enter a valid email."
            }
        }
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "officeNumber"
    }
];

const memberQues = [
    {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "teamMember",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    }
];


const internQues = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your intern's id?",
        name: "id",
        validate: (str) => {
            if (/^\d+$/.test(str)) {
                return true;
            }

            else {
                return "Please use only numbers for the ID.";
            }
        }
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "email",
        validate: (str) => {
            if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(str)) {
                return true;
            }
            else {
                return "Please enter a valid email."
            }
        }
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "school"
    }
]

const engQues = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your engineer's id?",
        name: "id",
        validate: (str) => {
            if (/^\d+$/.test(str)) {
                return true;
            }

            else {
                return "Please use only numbers for the ID.";
            }
        }
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "email",
        validate: (str) => {
            if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(str)) {
                return true;
            }
            else {
                return "Please enter a valid email."
            }
        }
    },
    {
        type: "input",
        message: "What is your engineer's Github username?",
        name: "github"
    }
]

const employees = [];

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Success");
//         }
//     })
// }

function teamMember() {
    inquirer.prompt(memberQues).then((res) => {
        if (res.teamMember === "Engineer") {
            let engineer;
            inquirer.prompt(engQues).then((engRes) => {
                engineer = new Engineer(engRes.name, engRes.id, engRes.email, engRes.github);
                employees.push(engineer);
                teamMember();
            }).catch((error) => {
                console.log("Error in Engineer questions prompt.");
                console.log(error);
            })
        }

        else if (res.teamMember === "Intern") {
            let intern;
            inquirer.prompt(internQues).then((internRes) => {
                intern = new Intern(internRes.name, internRes.id, internRes.email, internRes.school);
                employees.push(intern);
                teamMember();
            }).catch(error => {
                console.log("Error in the Intern questions prompt.");
                console.log(error);
            })
        }

        else {
            console.log("Results Recorded!");
        }
    })
}

    inquirer.prompt(managerQues).then((res) => {

        let manager = new Manager(res.name, res.id, res.email, res.officeNumber);
        employees.push(manager);

        teamMember();
    
        // render(employees);
    
    }).catch(error => {
        console.log("Error in the Manager prompt.");
        console.log(error);
    });   
