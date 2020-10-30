// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ![${answers.npm}](https://img.shields.io/npm/l/${answers.npm})
  ![${answers.title}](https://img.shields.io/github/languages/top/skycode20/${answers.path})
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

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

  ${answers.usage}

  ## License    

  The ${answers.npm} is covered under the following license: ![${answers.npm}](https://img.shields.io/npm/l/${answers.npm})

  ## Contributing     

  If you are interested in contributing to this project please adhere to the set of guidelines set forth by the [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). If any questions about the contributor guidelines feel free to contact me at ${answers.email}.

  ${answers.contributing}    
  

  ## Tests    

  ${answers.tests}

  ## Questions    

  If you have any questions about the project feel free to reach out to me on via email: ${answers.email} or via Git Hub: https://github.com/${answers.username}.
  
  ## Links

  * [${answers.title} Application](${answers.link})

`;
}

module.exports = generateMarkdown;
