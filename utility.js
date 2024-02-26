
// To hide 
function hideElementById(element) {
    const toHide = document.getElementById(element);
    toHide.classList.add('hidden');
}
function showElementById(element) {
    const show = document.getElementById(element);
    show.classList.remove('hidden');
}