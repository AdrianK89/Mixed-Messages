// This program is designed to print an uplifting message to the user at least once,
// and then continue doing so if the user requests.

// Required modules
const prompt = require('prompt-sync')({sigint: true});

// Function declarations
// PromptUser handles the user prompt to whether they require uplifting.
function promptUser(userInput) {
    switch (userInput.toLowerCase()) {
        case undefined:
            console.log("You must enter either Yes, No, or Exit\n");
            break;
        case "yes":
            console.log(`You are ${callUplift()}!`);
            break;
        case "no":
            continuePrompt = 0;
            console.log("Have a fantastic day!");
            break;
        case "exit":
            exitProgram = 1;
            console.log("Have a great day!");
            break;
        default:
            console.log("Sorry! An unknow string was entered. Enter Yes, No, or Exit.");
            break;
    }
}

function callUplift() {
    return (adjectives[Math.floor(Math.random() * adjectives.length)]);
}

let exitProgram = 0; // Variable to exit do while loop if user enters exit
let continuePrompt = 1; // Variable to continue the loop if user needs more uplifting or enteres incorrect/no response

// A list of postive personality adjectives.
// Possible point of future development, to have user add adjectives to the list that they want to sample from
const adjectives = [
    'aggressive',
    'agreeable',
    'ambitious',
    'brave',
    'calm',
    'delightful',
    'eager',
    'faithful',
    'gentle',
    'happy',
    'jolly',
    'kind',
    'lively',
    'nice',
    'obedient',
    'polite',
    'proud',
    'silly',
    'thankful',
    'victorious',
    'witty',
    'wonderful',
    'zealous'];

// Starting the prompting
do {
    const needUplifting = prompt('Do you need (more) uplifting? Enter one of the following: Yes / No / Exit ');
    promptUser(needUplifting);
} while (!exitProgram && continuePrompt);

