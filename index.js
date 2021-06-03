// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
inquirer.prompt;
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
    choices: ['Apache', 'BSD', 'MIT', 'ISC'],
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
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
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Your README.md has been successfully generated!");
  });
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const userInput = await inquirer.prompt(questions);
    console.log("Thank you for your responses");
    console.log("Please wait while we generate your README.md");
    const generateMd = generateMarkdown(userInput);
    console.log(generateMd);
    await writeFileAsync("ExampleREADME.md", generateMd);
  } catch (err) {
    console.log(err);
  }
}

// Function call to initialize app
init();
