const fs = require('fs');
const inq = require('inquirer');

console.log('Welcome to the Professional Readme Generator™!');

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
    }
    {
        type: 'input',
        message: 'Please enter your usage instructions',
        name: 'install'
    }
    {
        type: 'input'
        message: 'Please enter your description'
        name: 'descript'
    }
    {
        type: 'list',
        message: 'What type of license would you like to use?'
        name: 'license',
        choices: ['MIT', 'no license']
    }
    {
        type: 'input',
        message: 'Please describe the features of your software',
        name: 'features'
    }
    /* TOC question */{
        type: 'list',
        message: 'Would you like to include a table of contents?',
        name: 'contact',
        choices: ['Yes', 'No']
      },
  ]) // Write the user response to a file by chaining the below callback method to the prompt above.
  .then(function(data) {
    // Bonus: Generate the name of your user file from their input
    const filename = `${data.name
      .toLowerCase()
      .split(' ')
      .join('')}.json`;
    // end bonus part

    fs.writeFile(filename, JSON.stringify(data, null), function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('Success!');
    });
  });





    //rl.question("What is your project's title?", (title) => {
    //console.log(`Your readme title is + ${title}`);
    //rl.close();
//};

// readline.question()