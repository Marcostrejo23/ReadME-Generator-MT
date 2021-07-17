// TODO: Include packages needed for this application
const inquirer = require (`inquirer`);
const fs = require (`fs`);
const generate  = require ("./util/generateMarkdown");
// let generateMarkdown = require ();

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
            message: `what is your GitHub username?`,
            name: `username`,
        },
        {
            type: `input`,
            message: `what is your email?`,
            name: `email`,
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
        {
            type: `checkbox`,
            message: `what type of license should your project have?`,
            name: `license`,
            choices: [
                "MIT",
                "APACHE 2.0",
                "GPL 3.0",
                "BSD 3",
                "none"
            ]
        },
        
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) => {
        if (err) {
          console.error("File was not created");
        } else {
          console.log("README created succesfully");
        }
      });
}

// TODO: Create a function to initialize app
function init() {}
function init() {

    promptUser()
  
      .then(function (data) {
        api.apiCall(data.username)
          .then(function (avatar) {
            const url = (avatar.data.avatar_url)
            console.log(data)
            return writeFileAsync("TestREADME.md", generateMarkdown(data, url));
          })
  
      })
  
  }
// Function call to initialize app
init();
