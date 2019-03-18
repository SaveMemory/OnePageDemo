let bigGridImage = document.querySelector('#bigGrid');
let turtleImage = document.querySelector('#turtle');
let boatsImage = document.querySelector('#boats');
let mountainPrompt = document.querySelector('#mountainPrompt');
let turtlePrompt = document.querySelector('#turtlePrompt');
let boatsPrompt = document.querySelector('#boatsPrompt');

bigGridImage.addEventListener('mouseover', function () {
    showPrompt('#mountainPrompt');
});

bigGridImage.addEventListener('mouseout', function () {
   hidePrompt('#mountainPrompt');
});

turtleImage.addEventListener('mouseover', function () {
    showPrompt('#turtlePrompt');
});

turtleImage.addEventListener('mouseout', function () {
    hidePrompt('#turtlePrompt');
});

boatsImage.addEventListener('mouseover', function () {
    showPrompt('#boatsPrompt');
});

boatsImage.addEventListener('mouseout', function () {
    hidePrompt('#boatsPrompt');
});

function showPrompt (promptId) {
    document.querySelector(promptId).className = 'animateGridPrompt';
}

function hidePrompt (promptId) {
    document.querySelector(promptId).className = 'gridPrompt';
}