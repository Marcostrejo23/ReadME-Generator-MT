const inquirer = requirer (`inquirer`);
const fs = requirer (`fs`);


inquirer.prompt(
    [
        {
            type: `input`,
            message: `what's the name of your project?`,
            name: `title`,
            validate: (value) =>{if(value){return true} else {return 'i need a value to continue'}}
        },
        {
            type: `input`,
            message: `please describe your product`,
            name: `description`,
            validate: (value) =>{if(value){return true} else {return 'i need a value to continue'}}
        },
        {
            type: `input`,
            message: `what are the instalation instructions?`,
            name: `install`,
            validate: (value) =>{if(value){return true} else {return 'i need a value to continue'}}
        },
        
        {
            type: `input`,
            message: `what is the usage information?`,
            name: `usage`,
            validate: (value) =>{if(value){return true} else {return 'i need a value to continue'}}
        },
        {
            type: `input`,
            message: `who contributed to the application?`,
            name: `contribute`,
            validate: (value) =>{if(value){return true} else {return 'i need a value to continue'}}
        },
        {
            type: `input`,
            message: `what are the test instructions?`,
            name: `test`,
            validate: (value) =>{if(value){return true} else {return 'i need a value to continue'}}
        },
        
    ]);