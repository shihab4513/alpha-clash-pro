
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
function decreaseLife() {
    const current = document.getElementById('life');
    let currentLife = parseInt(current.innerText);
    currentLife--;
    current.innerText = currentLife;
}