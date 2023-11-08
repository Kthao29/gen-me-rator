// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
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
        message: "Provide instructions and examples for use.",
    },

    {
        type: "input",
        name: "credits",
        message: "List the sources you used.",
    },

    {
        type: "checkbox",
        name: "license",
        message: "Please select a license.",
        choices: ['MIT', 'APACHE', 'BOOST', 'BSD', 'NONE'],
    },

    {
        type: "input",
        name: "contribute",
        message: "How to contribute.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log("SUCCESS!")
        }
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('./readme_folder/README.md', data);
    });
}

// Function call to initialize app


init();

