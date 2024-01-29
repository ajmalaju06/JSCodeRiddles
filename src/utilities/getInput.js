const inquirer = require("inquirer");

const getInput = (message) => {
  return new Promise((resolve, reject) => {
    const inputQuestion = {
      type: "input",
      name: "choice",
      message: message,
    };

    inquirer.prompt(inputQuestion).then((answers) => {
      resolve(answers.choice);
    });
  });
};

module.exports = getInput;
