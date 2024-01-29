const inquirer = require("inquirer");
const { exampleResultSelections, fistSelection } = require("./src/data/datas");
const results = require("./src/selections/results");
const codes = require("./src/selections/codes");

const firstQuestions = [
  {
    type: "rawlist",
    name: "choice",
    message: "Select an option:",
    choices: fistSelection,
  },
];

const secondQuestions = [
  {
    type: "list",
    name: "choice",
    message: "Select a Problem: ",
    choices: exampleResultSelections,
  },
];

inquirer.prompt(firstQuestions).then((answers) => {
  const answer = answers.choice;
  if (answer === "Code") {
    inquirer.prompt(secondQuestions).then((answers) => {
      codes(answers);
    });
  } else {
    inquirer.prompt(secondQuestions).then((answers) => {
      results(answers);
    });
  }
});
