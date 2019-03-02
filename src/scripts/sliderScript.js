let btnFirstSlide = document.querySelector('#btnFirstSlide');
let btnSecondSlide = document.querySelector('#btnSecondSlide');
let btnThirdSlide = document.querySelector('#btnThirdSlide');
let btnFourthSlide = document.querySelector('#btnFourthSlide');

let firstDot = document.querySelector('#one');
let secondDot = document.querySelector('#two');
let thirdDot = document.querySelector('#three');
let fourthDot = document.querySelector('#four');

btnFirstSlide.addEventListener('click', showFirstSlide);
btnSecondSlide.addEventListener('click', showSecondSlide);
btnThirdSlide.addEventListener('click', showThirdSlide);
btnFourthSlide.addEventListener('click', showFourthSlide);

let slidesContainer = document.querySelector('.slidesContainer');

let slides = ['0', '-20vw', '-40vw', '-60vw'];

function showFirstSlide() {
    slidesContainer.style.marginLeft = slides[0];
    assignNewDot(1)
}

function showSecondSlide() {
    slidesContainer.style.marginLeft = slides[1];
    assignNewDot(2)
}

function showThirdSlide() {
    slidesContainer.style.marginLeft = slides[2];
    assignNewDot(3)
}

function showFourthSlide() {
    slidesContainer.style.marginLeft = slides[3];
    assignNewDot(4)
}

function assignNewDot(dotNumber) {
    clearDots();
    switch (dotNumber) {
        case 1:
            firstDot.style.backgroundColor = '#676767';
            break;
        case 2:
            secondDot.style.backgroundColor = '#676767';
            break;
        case 3:
            thirdDot.style.backgroundColor = '#676767';
            break;
        case 4:
            fourthDot.style.backgroundColor = '#676767';
            break;
    }
}

function clearDots() {
    firstDot.style.backgroundColor = '#9d9d9d';
    secondDot.style.backgroundColor = '#9d9d9d';
    thirdDot.style.backgroundColor = '#9d9d9d';
    fourthDot.style.backgroundColor = '#9d9d9d';
}