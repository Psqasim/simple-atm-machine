#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red(`NOTE:
CURRENT BALNCE IS 20000PKR
PIN:1122
`));
let name = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "what is your name"
});
console.log(`WELCOME,${chalk.blue(name.name)} TO OUR SIMPLE ATM`);
let myBalance = 20000;
const myPin = 1122;
let pass = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "input your pin"
    }
]);
if (myPin === pass.pin) {
    console.log(chalk.green("correct pin"));
    let operators = await inquirer.prompt([
        {
            name: "operators",
            type: "list",
            message: "select one of these to operate",
            choices: ["withdraw", "fastcash", "check balance"]
        },
    ]);
    if (operators.operators === "withdraw") {
        let operatorsAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount"
            }
        ]);
        if (operatorsAns.amount > myBalance) {
            console.log(chalk.red("insuffient blance"));
        }
        else if (myBalance -= operatorsAns.amount) {
            console.log(chalk.yellow `your reaming balnce is ${myBalance}`);
        }
    }
    if (operators.operators === "fastcash") {
        let fasts = await inquirer.prompt([{
                name: "fast",
                type: "list",
                message: "select one of these",
                choices: ["1000", "3000", "5000", "10000"]
            }]);
        if (myBalance -= fasts.fast) {
            console.log(chalk.yellow `your remaining blance is ${myBalance}`);
        }
    }
    if (operators.operators === "check balance") {
        console.log(chalk.yellow `your curremt balance is ${myBalance}`);
    }
}
else
    (console.log(chalk.red `incorrect pin`));
