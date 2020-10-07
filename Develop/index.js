const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// require fs npm

// array of questions for user
const questions = [
    {
        message: "What is your name?",
        name: "name"

    }
    ,
    {
        message: "What is your project title?",
        name: "title"

    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    // Ask user questions about the project
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            const markDown = generateMarkdown(answers);
            console.log(markDown);
        })
    console.log("After questions!")
    

    // save string to a .md file
    // fs.appendFile()

}

// function call to initialize program
init();
