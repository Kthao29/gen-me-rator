// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return ``;
    } else if (license === 'MIT') {
     return `[![${license} License](https://img.shields.io/badge/License-${license}-yellow.svg)](${renderLicenseLink(license)})`;
  } else if (license === 'APACHE') {
    return `[![${license} License](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`;
 } else if (license === 'BOOST') {
    return `[![${license} License](https://img.shields.io/badge/License-${license}-lightblue.svg)](${renderLicenseLink(license)})`;
 } else if (license === 'BSD') {
    return `[![${license} License](https://img.shields.io/badge/License-${license}--Clause-orange.svg)](${renderLicenseLink(license)})`;
 } 
}
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
      return `https://www.mit.edu/~amini/LICENSE.md`;
    }
    else if (license === 'APACHE') {
      return `https://opensource.org/licenses/Apache-2.0`;
    }
    else if (license === 'BOOST') {
      return `https://www.boost.org/LICENSE_1_0.txt`;
    }
    else if (license === 'BSD') {
        return `https://opensource.org/licenses/BSD-2-Clause`;
      }
  }



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
      return ``;
    } else {
      return `
      This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
    }
  }
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [License](#license)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseSection(data.license)}

  ## Credits
  ${data.credits}

  ## Contributing
  ${data.contribute}

  ## Questions
  Have any questions? Please reach out to:

  Github Account: ${data.github}

  Email Address: ${data.email}
`;
}

module.exports = generateMarkdown;

