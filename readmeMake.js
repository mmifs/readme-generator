const fs = require('fs');
var inquirer = require('inquirer');

console.log('Welcome to the Professional Readme Generator™!');
const makeReadme = () => {
    console.log(data);
};
inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What will be the title of your readme?'
    },
    {
        type: 'input',
        message: 'Please enter your description',
        name: 'descript'
    },
    {
        type: 'confirm',
        message: 'Would you like to include a table of contents?',
        name: 'toc',  
    },
    {
        type: 'input',
        message: 'Please enter your installation instructions',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Please enter your usage instructions',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What type of license would you like to use?',
        name: 'license',
        choices: ['MIT', 'no license']
    },
    {
        type: 'input',
        message: 'Please enter instructions on how someone might contribute to your work',
        name: 'contrib'
    },
    {
        type: 'input',
        message: 'Please enter test information for users',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Please enter the information to be included in an FAQ section',
        name: 'questions'
    }
    
  ])
    .then(function(data) {
        /*if (data.toc === true) {
            let table = '## Table of Contents\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Contributing](contributing)\n* [Tests](#tests)\n* [Questions](#questions'
        } else {
            let table = null
        }
        console.log(table);*/
        console.log(data);
            fs.writeFile('./newreadme.md', 

`# ${data.title} 

## Description

${data.descript}


${table}


## Installation

${data.install}


## Usage

${data.usage}


## License

This Readme is protected with a/an ${data.license} license. For more information, please contact the author.


## Contributing

${data.contrib}


## Tests

${data.tests}


## Questions

${data.questions}`
,
             function (err) {}
                )}
    );