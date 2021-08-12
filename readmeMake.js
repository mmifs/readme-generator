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
        message: 'Please enter your installation instructions',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Please enter your usage instructions',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Please enter your description',
        name: 'descript'
    },
    {
        type: 'list',
        message: 'What type of license would you like to use?',
        name: 'license',
        choices: ['MIT', 'no license']
    },
    {
        type: 'input',
        message: 'Please describe the features of your software',
        name: 'features'
    }
    /* TOC question *//*{
        type: 'list',
        message: 'Would you like to include a table of contents?',
        name: 'contact',
        choices: ['Yes', 'No']
      }*/
  ])
  .then(function(data) {
      console.log(data);
    const [title, install, descript, license, features] = data;
    console.log(data);
    console.log(data.title);
        fs.writeFile('./newreadme.md', makeReadme(title, install, descript, license, features)
            )}
    );

//data not iterable error, try json ******



    //rl.question("What is your project's title?", (title) => {
    //console.log(`Your readme title is + ${title}`);
    //rl.close();
//};

// readline.question()