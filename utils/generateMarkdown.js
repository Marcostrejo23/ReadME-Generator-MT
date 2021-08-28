// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge 
let LicenseLink 
let licenseSection 

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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `# License
  ${renderLicenseBadge(license)}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 const(title,username,email,description,install,usage,contribute,test,license,)= data;
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
