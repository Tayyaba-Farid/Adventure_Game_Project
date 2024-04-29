#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to the Game!");
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let playerName = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter your name: ",
    },
]);
let opponentName = await inquirer.prompt([
    {
        name: "name",
        type: "list",
        message: "Choose your opponent: ",
        choices: ["Shadowfang", "Gloomgazer", "Dreadspawn"],
    },
]);
// here we are gathering data
let p1 = new Player(playerName.name);
let o1 = new Opponent(opponentName.name);
do {
    // shadowFang
    if (opponentName.name == "Shadowfang") {
        let nextQuestion = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "Choose your action",
                choices: ["Attack", "Drink portion", "Run for life"],
            },
        ]);
        if (nextQuestion.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose! Better luck next time! :)");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win!!");
                    process.exit();
                }
            }
        }
        if (nextQuestion.option == "Drink portion") {
            p1.fuelIncrease();
            console.log(`Your drink health portion is ${p1.fuel}`);
        }
        if (nextQuestion.option == "Run for life") {
            console.log("You loose! Better luck next time! :)");
            process.exit();
        }
    }
    // Gloomgazer
    if (opponentName.name == "Gloomgazer") {
        let nextQuestion = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "Choose your action",
                choices: ["Attack", "Drink portion", "Run for life"],
            },
        ]);
        if (nextQuestion.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose! Better luck next time! :)");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win!!");
                    process.exit();
                }
            }
        }
        if (nextQuestion.option == "Drink portion") {
            p1.fuelIncrease();
            console.log(`Your drink health portion is ${p1.fuel}`);
        }
        if (nextQuestion.option == "Run for life") {
            console.log("You loose! Better luck next time! :)");
            process.exit();
        }
    }
    // Dreadspawn
    if (opponentName.name == "Dreadspawn") {
        let nextQuestion = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "Choose your action",
                choices: ["Attack", "Drink portion", "Run for life"],
            },
        ]);
        if (nextQuestion.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose! Better luck next time! :)");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You win!");
                    process.exit();
                }
            }
        }
        if (nextQuestion.option == "Drink portion") {
            p1.fuelIncrease();
            console.log(`Your drink health portion is ${p1.fuel}`);
        }
        if (nextQuestion.option == "Run for life") {
            console.log("You loose! Better luck next time! :)");
            process.exit();
        }
    }
} while (true);
