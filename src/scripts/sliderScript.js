let btnFirstSlide = document.querySelector('#btnFirstSlide');
let btnSecondSlide = document.querySelector('#btnSecondSlide');
let btnThirdSlide = document.querySelector('#btnThirdSlide');
let btnFourthSlide = document.querySelector('#btnFourthSlide');
let likeBtn = document.querySelector('#like');
let dislikeBtn = document.querySelector('#dislike');

let firstDot = document.querySelector('#one');
let secondDot = document.querySelector('#two');
let thirdDot = document.querySelector('#three');
let fourthDot = document.querySelector('#four');

btnFirstSlide.addEventListener('click', showFirstSlide);
btnSecondSlide.addEventListener('click', showSecondSlide);
btnThirdSlide.addEventListener('click', showThirdSlide);
btnFourthSlide.addEventListener('click', showFourthSlide);

likeBtn.addEventListener('click', function () {
   window.alert('Thank you!');
});

dislikeBtn.addEventListener('click', function () {
    window.alert('Thats sad :(');
});

let slideImage = document.querySelector('#slideImage');

let slide = document.querySelector('.slide');

let slidesContainer = document.querySelector('.slidesContainer');

let images = ['./graphics/woman.jpg', './graphics/lips.gif', './graphics/shopping.png', './graphics/couple.png'];

function showFirstSlide() {
    assignNewDot(1);
    changeClass();
    setTimeout(slideImage.src = images[0], 150000);
}

function showSecondSlide() {
    assignNewDot(2);
    changeClass();
    setTimeout(slideImage.src = images[1], 200);
}

function showThirdSlide() {
    assignNewDot(3);
    changeClass();
    setTimeout(slideImage.src = images[2], 200);
}

function showFourthSlide() {
    assignNewDot(4);
    changeClass();
    setTimeout(slideImage.src = images[3], 200);
}

function assignNewDot(dotNumber) {
    clearDots();
    switch (dotNumber) {
        case 1:
            firstDot.style.backgroundColor = '#65ccb8';
            break;
        case 2:
            secondDot.style.backgroundColor = '#65ccb8';
            break;
        case 3:
            thirdDot.style.backgroundColor = '#65ccb8';
            break;
        case 4:
            fourthDot.style.backgroundColor = '#65ccb8';
            break;
    }
}

function clearDots() {
    firstDot.style.backgroundColor = '#c4c4c4';
    secondDot.style.backgroundColor = '#c4c4c4';
    thirdDot.style.backgroundColor = '#c4c4c4';
    fourthDot.style.backgroundColor = '#c4c4c4';
    changeClass();
}

function changeClass() {
    if(document.getElementById("switchClass").className === "slide")
        document.getElementById("switchClass").className = "slideOnChange";
    else
        setTimeout(function(){document.getElementById("switchClass").className = "slide";}, 400)
}
