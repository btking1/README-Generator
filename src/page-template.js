module.exports = templateData => {
    console.log(templateData);
    
        return `
        # ${templateData.title}
    
    ## Description
    
    ${templateData.description}
    
    - What was your motivation?
    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?
    - What did you learn?
    
    ## Table of Contents (Optional)
    
    If your README is long, add a table of contents to make it easy for users to find what they need.
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    
    ## Usage
    
    Provide instructions and examples for use. Include screenshots as needed.
    
    To add a screenshot, create an  folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
      
    
    ## Credits
    
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    
    ## License
        `;
};