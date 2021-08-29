const inquirer = require (`inquirer`);
const fs = require (`fs`);
const generate = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');



  const questions = [
            {
                type: `input`,
                message: `what's the name of your project?`,
                name: `title`,
            },
            {
                type: `input`,
                message: `what's your GitHub username?`,
                name: `username`,
            },
            {
                type: `input`,
                message: `please describe your product`,
                name: `description`,
            },
            {
                type: `input`,
                message: `what are the installation instructions?`,
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
            
        ];
function writeToFile(fileName, data) {
     fs.writeFile(fileName,data,function(err){
        if(err){
        throw err
          }
             console.log("File Written")
     });
}

    function init(){
     inquirer.prompt(questions).then(function (data){
        writeToFile("readme.gm", generateMarkdown(data))
     });
    }

    init();