/*
 * Events
 */
const EventEmitter = require('events')
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => console.log('result: ', num1 + num2));

eventEmitter.emit('tutorial', 3, 4)

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let sasha = new Person('Sasha');
sasha.on('name', () => console.log(`My name is ${sasha.name}`));

sasha.emit('name') // events: occurred synchronously (in order they called)

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;


const Question = () => rl.question(`
What is ${num1} + ${num2}? \nType your answer here: `, (userInput) => {
    if (userInput.trim() != answer) {
        // console.log('!!! This is not right! Try again:')
        // Question();
        rl.setPrompt('!!! This is not right! Try again:\n');
        rl.prompt();
        rl.on('line', (userInput) => {
            if (userInput.trim() == answer) {
                rl.close();
            } else {
                rl.setPrompt(`Your answer of: '${userInput}' is NOT correct. Please try again\n`);
                rl.prompt();
            }
        })
    } else {
        rl.close(); // events 'close' event...
    }
});
//listen on 'close' event
rl.on('close', () => console.log(`\nCorrect! The answer is ${answer}.`));
Question();