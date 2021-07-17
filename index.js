const inquirer = requirer (`inquirer`);
const fs = requirer (`fs`);


inquirer.prompt(
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