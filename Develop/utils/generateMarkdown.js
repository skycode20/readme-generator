// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  - by *${answers.name}*
  
  ## Description    
  ${answers.description} 

  ## Table Of Contents   
  
  ## Installation
  ${answers.install}

  ## Usage

  ## License

  ## Contributing

  ## Tests

  ## Questions   
  If you have any questions about the project feel free to reach out to me on via email: ${answers.email} or via Git Hub: ${answers.username}.

  [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

  [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
  
  

`;
}

module.exports = generateMarkdown;
