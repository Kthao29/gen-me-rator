//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

//An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
    },

    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?.",
    },

    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for usage.",
    },

    {
        type: "input",
        name: "tests",
        message: "Describe tests and how to use them.",
    },

    {
        type: "input",
        name: "credits",
        message: "List the sources you used.",
    },

    {
        type: "input",
        name: "license",
        message: "Please select a license (MIT, APACHE, BOOST, BSD).",
    },

    {
        type: "input",
        name: "contribute",
        message: "How to contribute.",
    },

    {
        type: "input",
        name: "github",
        message: "Enter your Github account",
    },

    {
        type: "input",
        name: "email",
        message: "Enter your email address.",
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log("SUCCESS!")
        }
    });

}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('./readme_folder/README.md', data);
    });
}

// Function call to initialize app


init();

