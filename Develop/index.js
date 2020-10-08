const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// require fs npm
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
        message: "Please enter the installation instructions (if any):",
        name: "install"

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
            // console.log(answers);
            const markDown = generateMarkdown(answers);
            console.log(markDown);
            writeToFile(answers.title + ".md", markDown);
        })
    // console.log("Answer the questions!")


    // save string to a .md file
    // fs.appendFile()

}

// function call to initialize program
init();
