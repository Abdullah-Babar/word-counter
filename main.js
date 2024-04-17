#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\nWelcome! to my word counter project\n");
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
let words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
console.log("\nThanks! for using my word counter project");
