function renderLicenseBadge(license) {
  switch(license){
    case "Apache-2.0":
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "GPL 3.0":
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      default:
        return ``;
  }
}

function renderLicenseSection(license) { return `# License
${renderLicenseBadge(license)}`;
}

function generateMarkdown(data) {
 const {title,username,email,description,install,usage,contribute,test,license}= data;
 return `# ${title}
 ## Description
 $(description)
##Table of contents
-[Installation](#Installation)
-[Usage](#Usage)
-[Testing](#Testing)
-[Contributing](#Contributing)
-[Questions](#Questions)
-[License](#License)
##Installation
${install}
##Usage
${usage}
##Testing
${test}
##contributing
${contribute}
##Questions
[Github](https://github.com/${username})
[Email](${email})
${renderLicenseSection(license)}`;
}

module.exports = generateMarkdown;
