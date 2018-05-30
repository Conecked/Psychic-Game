
// creating variable to give computerChoices its options
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// creating variables to hold wins, losses, guesses, guessesLeft, guessedLetters, letterToGuess
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = undefined;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length++)];

var updateGuessesLeft = function () {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function () {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length++)];
    // console.log(letterToGuess)
};

var updateGuessSoFar = function () {
    document.querySelector('#guessSoFar').innerHTML = "Your Guesses So Far: " + guessedLetters.join(', ');
};

var reset = function () {
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function (event) {
    guessesLeft--;
    var userGuess = event.key.toLowerCase();

    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessSoFar();

    if (guessesLeft > 0) {
        if (userGuess === letterToGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert('Your psychic!');
            reset();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert('Guess you are not psychic!');
        reset();
    }
};
