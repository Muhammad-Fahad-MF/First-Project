#! /usr/bin/env node
import inquirer from "inquirer";
const number = await inquirer.prompt([
    { message: "Enter First Number :", type: "number", name: "firstNumber" },
    { message: "Enter Second Number :", type: "number", name: "secondNumber" },
    { message: "Select the Operation to perform :",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (number.operator == "Addition") {
    console.log(number.firstNumber + number.secondNumber);
}
else if (number.operator == "Subtraction") {
    console.log(number.firstNumber - number.secondNumber);
}
else if (number.operator == "Multiplication") {
    console.log(number.firstNumber * number.secondNumber);
}
else if (number.operator == "Division") {
    console.log(number.firstNumber / number.secondNumber);
}
