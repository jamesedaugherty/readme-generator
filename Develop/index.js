// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "project",
        message: "What is the name of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please write a brief description of your project.",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "username",
        message: "What is GitHub username?",
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        options: ['MIT', 'GPLv2', 'Apache', 'ISC'],
      },
      {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?",
      },
      {
        type: "input",
        name: "tests",
        message: "What command should sbe run to run tests?",
      },
      {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
      },
      {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
      },
    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('README has been created')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data)
}

// Function call to initialize app
init();
