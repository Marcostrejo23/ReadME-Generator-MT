// TODO: Include packages needed for this application
const inquirer = requirer (`inquirer`);
const fs = requirer (`fs`);

// TODO: Create an array of questions for user input
const questions = inquirer.prompt(
    [
        {
            type: `input`,
            message: `what's the name of your project?`,
            name: `title`,
        },
        {
            type: `input`,
            message: `please describe your product`,
            name: `description`,
        },
        {
            type: `input`,
            message: `what are the instalation instructions?`,
            name: `install`,
        },
        
        {
            type: `input`,
            message: `what is the usage information?`,
            name: `usage`,
        },
        {
            type: `input`,
            message: `who contributed to the application?`,
            name: `contribute`,
        },
        {
            type: `input`,
            message: `what are the test instructions?`,
            name: `test`,
        },
        
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
