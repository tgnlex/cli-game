import inquirer from 'inquirer';
const cli = inquirr;
function setName() {
  cli 
    .prompt({"What is your name adventurer?"}) 
    .then((input) => { nickname = input})
    .catch((error) => {
      if (error.isTtyError) {
        throw error;
      } else {
        console.error(error.stack);
      }
    })
}


async function main() {

}
