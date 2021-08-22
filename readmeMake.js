const fs = require('fs');
var inquirer = require('inquirer');

const makeTOC = (data) => {
    if (data.toc) {
        var table = "\n\n## Table of Contents\n\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Contributing](contributing)\n* [Tests](#tests)\n* [Questions](#questions)"
    } else {
        var table = null
    };
    return table
};

const makeLicense = (data) => {
    if (data.license === 'no license') {
        var lic = "This project is not protected by any license. For more information, please contact the author.";
    }
    if (data.license === 'MIT') {
        var lic = "This project is protected by an MIT license. For more information, please contact the author.";
    } else {
        var lic = "license error";
    };
    return lic
};

const addBadge = (data) => {
    if (data.license === 'MIT') {
        var licbadge = '![APM](https://img.shields.io/apm/l/vim-mode?style=plastic)'
    }
    else {
        var licbadge = null;
    }
    return licbadge;
};

const makeUser = (data) => {
    var userName = data.gUser;
    return userName
}

const makeEmail = (data) => {
    var uEmail = data.email;
    return uEmail;
}

console.log('Welcome to the Professional Readme Generator™!');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'gUser',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your contact email address?'
    },
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
    
  ])
    .then(function(data) {
        let table = makeTOC(data);
        let lic = makeLicense(data);
        let licbadge = addBadge(data);
        let userName = makeUser(data);
        let uEmail = makeEmail(data);
            fs.writeFile('./newreadme.md', 

`${licbadge}
# ${data.title} 

## Description

${data.descript}${table}


## Installation

${data.install}


## Usage

${data.usage}


## License

${lic}


## Contributing

${data.contrib}


## Tests

${data.tests}


## Questions

Github: https://github.com/${userName}

Please forward any additional questions to my email: ${uEmail}`
,
             function (err) {}
                )}
    );