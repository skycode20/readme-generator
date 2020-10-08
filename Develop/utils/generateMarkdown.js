// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  - by *${answers.name}*
  
  ## Description    
  ${answers.description} 

  ## Table Of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${answers.install}

  ## Usage

  ## License

  ## Contributing

  ## Tests

  ## Questions   
  If you have any questions about the project feel free to reach out to me on via email: ${answers.email} or via Git Hub: https://github.com/${answers.username}.
  

`;
}

module.exports = generateMarkdown;
