// GUESS THAT NUMBER
// Message to be used throughout the project/file
const enterNumText = `Please enter a number greater than zero`;
// For restarting the game
let restartGame = true;
// For storing the range of the number to be guessed
let rangeNum;
// For storing the number that the user will guess
let randomNum;
// For storing the number of attempts the user has left
let attempts;
// For storing the user's guess
let guess;
// For storing the user's response to play again or not to play again
let playAgain;

// Starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`)

// Game restarts as long as restartGame has a value of true
while (restartGame){
    // Asks user to enter a number to set the upper bound for the random number that will be created.
    rangeNum = prompt(`Please enter a maximum number for the range`)

    // Using parseInt to attempt to convert the user's response into a number value
    rangeNum = parseInt(rangeNum)

    // Verifies thw user's entry for a range number is a number greater than zero (NOTE: All number, positive or negative, have default boolean value of true, except for zero which has a default booleans value of false. ALso, NaN has a default boolean value of false as well)
    while (!rangeNum || rangeNum < 1){
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    // Creates the random number using the range number entered by the user
    randomNum = Math.floor(Math.random() * rangeNum + 1)

    // Prompts user to enter a number of attempts allowed (AKA Number of guesses)
    attempts = parseInt(prompt(`Please enter a number of attempts allowed: `));

// Verifying the user's entry for a number of attempts allowed is a number greater than zero and less than the range they set
while (!attempts || attempts < 1 || attempts  rangeNum){
    attempts = parseInt(prompt(`Please enter a number from 1 to ${rangeNum -1}:`));
}

// Asks user to enter a guess in the range that they set
prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`)

    break;
}