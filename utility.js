
// To hide 
function hideElementById(element) {
    const toHide = document.getElementById(element);
    toHide.classList.add('hidden');
}
function showElementById(element) {
    const show = document.getElementById(element);
    show.classList.remove('hidden');
}
function getARandomAlphabet() {
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');

    // get a random index from 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    return alphabets[index];
}

function setBackgroundColorById(element) {
    const bg = document.getElementById(element);
    bg.classList.add('bg-[#FFA500]');
}
function removeBackgroundColorById(element) {
    const bg = document.getElementById(element);
    bg.classList.remove('bg-[#FFA500]');
}
function increasePoints() {
    const current = document.getElementById('points');
    let currentPoint = parseInt(current.innerText);
    currentPoint++;
    current.innerText = currentPoint;

}
function gameOver() {
    hideElementById('play-ground');
    showElementById('score');
    const finalScore = document.getElementById('final-sore');
    const currentScore = document.getElementById('points');
    finalScore.innerText = currentScore.innerText;
}
function decreaseLife() {
    const current = document.getElementById('life');
    let currentLife = parseInt(current.innerText);
    currentLife--;
    if (currentLife < 0) {
        gameOver();
    }
    current.innerText = currentLife;
}
function resetScore() {
    const current = document.getElementById('points');
    current.innerText = '0';
    const currentL = document.getElementById('life');
    currentL.innerText = '5';

}