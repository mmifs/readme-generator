const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function titleAsk() {
    rl.question("What is your project's title?", (title) => {
        console.log(`Your readme title is + ${title}`);
        rl.close();
        return title;
    })
};

function descriptAsk() {
    rl.question("What is your project's title?", (descript) => {
        console.log(`Your readme title is + ${descript}`);
        rl.close();
        return descript;
    })
};

function tocAsk() {
    rl.question("Would you like to include a table of contents?", (tocConfirm) => {
        if (tocConfirm === 'yes') {
            rl.question('Please enter the headings for your titled sections separated by '/*commas and spaces?*/), (toc) =>
            console.log(`Your readme table of contents titles are ${toc}`)
        }

        if (tocConfirm === 'no') {
            console.log('Your readme will not have a table of contents')
        } else {
            console.log('Please enter yes or no')
            tocAsk();
        }
            /*'y' ||
            'Yes' ||
            'YEs' ||
            'YES' ||
            'yES' ||
            'yeS')
            'yes' ||
            'y' ||
            'Yes' ||
            'YEs' ||
            'YES' ||
            'yES' ||
            'yeS'*/
        
        rl.close();
        return toc;
    })
};





    //rl.question("What is your project's title?", (title) => {
    //console.log(`Your readme title is + ${title}`);
    //rl.close();
//};

// readline.question()