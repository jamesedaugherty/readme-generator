// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${badge}
  ${data.description}

  ## Table of Contents
  - [Installation](#Install)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)

  ### Installation
  To install the necessary dependencies, open the terminal and run the following:
  ${data.installations}

  ### Usage
  ${data.usage}

  ### Credits
  ${data.contributors}

  ### License:
  ${data.license}

  ### Tests:
  ${data.tests}

`;
}

module.exports = generateMarkdown;
