// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license)  {
    case 'Apache':
        return '![License: Apache](https://img.shields.io/badge/License-Apache-orange)';
    case 'BSD':
        return '![License: BSD](https://img.shields.io/badge/License-BSD-red)';
    case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-green)';
    case 'ISC': '![License: ISC](https://img.shields.io/badge/License-ISC-yellow)';
      return;
    default:
        return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache':
        return '[Apache License](https://www.apache.org/licenses/LICENSE-2.0)';
    case 'BSD':
        return '[BSD License](https://opensource.org/licenses/BSD-3-Clause)';
    case 'MIT':
        return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'ISC':
        return '[ISC License](https://opensource.org/licenses/ISC)';
    default:
        return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
}
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.project}
  
  ## Description 
  ${data.description}

  ## Table of Contents
  - [Installation](#Install)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)

  ## Installation
  ${data.dependencies}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.contributing}

  ## Tests:
  ${data.tests}
  
  ## License:
  ${data.license}

  ## Contact Information
  -Email: ${data.email}
  -GitHub: www.github.com/${data.username}
`;
}

module.exports = generateMarkdown;
