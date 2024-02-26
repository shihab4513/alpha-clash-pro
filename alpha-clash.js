function handleKeyboardButtonPress(event) {

    const playerPressed = (event.key).toLowerCase();

    // expected key
    const expectedKey = document.getElementById('current-alphabet');
    const expectedAlphabet = (expectedKey.innerText).toLowerCase();

    // Checked matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('matched');
    }
    else {
        console.log('Not matched');
    }

}

document.addEventListener('keyup', handleKeyboardButtonPress);


function continueGame() {
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen and show it
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set key background color
    setBackgroundColorById(alphabet);
}


// Step-1 : hide the home screen. to hide the screen add the class hidden to the home section
function play() {
    hideElementById('home');

    // show the playground
    showElementById('play-ground');

    continueGame();
}

