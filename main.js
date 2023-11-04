import inquirer from "inquirer";
let sysGuess = Math.floor(Math.random() * 10);
let userGuess = await inquirer.prompt({
    type: "number",
    name: "UserGuess",
    message: "Guess any number?"
});
console.log(`System Guess: ${sysGuess}\nUser Guess: ${userGuess.UserGuess}\n`);
if (sysGuess === userGuess.UserGuess) {
    console.log(`Congratulation's! You Won `);
}
else {
    console.log(`Hard Luck! Good luck for next time`);
}
