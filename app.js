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
        name: "id"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "officeNumber"
    },
    {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "teamMember",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"]
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
        name: "id"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "email"
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
        name: "id"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your engineer's Github username?",
        name: "github"
    }
]

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Success");
//         }
//     })
// }

inquirer.prompt(managerQues).then((res) => {
    if (res.teamMember === "Engineer") {
        inquirer.prompt(engQues).then((engRes) => {
            let engineer = new Engineer(engRes.name, engRes.id, engRes.email, engRes.github);
            console.log(engineer);
        }).catch(error => {
            console.log("Error in the Engineer prompt.");
            console.log(error);
        });
    }

    else if (res.teamMember === "Intern") {
        inquirer.prompt(internQues).then((internRes) => {
            let intern = new Intern(internRes.name, internRes.id, internRes.email, internRes.school);
        }).catch(error => {
            console.log("Error in the Intern prompt.");
            console.log(error);
        });
    }

    else {

    }

    let manager = new Manager(res.name, res.id, res.email, res.officeNumber);
}).catch(error => {
    console.log("Error in the Manager prompt.");
    console.log(error);
});

