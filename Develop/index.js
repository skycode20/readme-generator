const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
const util = require("util")

const writeAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        message: "What is your name?",
        name: "name"

    }
    ,
    {
        message: "What is your Git Hub username?",
        name: "username"

    }
    ,
    {
        message: "What is your email address?",
        name: "email"

    }
    ,
    {
        message: "What is your project title?",
        name: "title"

    }
    ,
    {
        message: "Please enter a description of the project:",
        name: "description"

    }
    ,
    {
        message: "How do you utilize your project? Provide instructions and examples for use:",
        name: "usage"

    }
    ,
    {
        message: "Please enter the installation instructions (if any):",
        name: "install"

    }
    ,
    {
        message: "Please enter one npm you used:",
        name: "npm"

    }
    ,
    {
        message: "If there are contributors to your project, what are the guidelines for anyone planning to contribute? (i.e. Code of Conduct):",
        name: "contributing"

    }
    ,
    {
        message: "Have you run any tests for you application? Please provide examples on how to run the test(s):",
        name: "tests"

    }
    ,
    {
        message: "What is the link to your repo?",
        name: "link"

    }
    ,
    {
        message: "Please enter the path of your project (i.e.: /skycode20/...):",
        name: "path"

    }
    
];

// function to write README file
async function writeToFile(fileName, data) {
    await writeAsync(fileName, data);
}

// function to initialize program
function init() {
    // Ask user questions about the project
    inquirer.prompt(questions)
        .then((answers) => {
            const markDown = generateMarkdown(answers);
            console.log(markDown);
            writeToFile(answers.title + ".md", markDown);
        })


}

// function call to initialize program
init();
