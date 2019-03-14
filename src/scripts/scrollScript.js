let about = document.querySelector('.about');
let interest = document.querySelector('.interests');
let offer = document.querySelector('.offer');
let news = document.querySelector('.news');
let map = document.querySelector('.map');
let skills = document.querySelector('.skills');
let contact = document.querySelector('.contact');
let floatingBtn = document.querySelector('.floatingScrollBtn');

about.addEventListener('click', function () {
    smoothScroll(document.querySelector('#aboutMe'))
});

interest.addEventListener('click', function () {
    smoothScroll(document.querySelector('#whatCanIDo'))
});

offer.addEventListener('click', function () {
    smoothScroll(document.querySelector('#myOffer'))
});

news.addEventListener('click', function () {
    smoothScroll(document.querySelector('#newsletter'))
});

map.addEventListener('click', function () {
    smoothScroll(document.querySelector('#hereIAm'))
});

skills.addEventListener('click', function () {
    smoothScroll(document.querySelector('#skills'))
});

contact.addEventListener('click', function () {
    smoothScroll(document.querySelector('#contact'))
});

floatingBtn.addEventListener('click', function () {
    smoothScroll(document.querySelector('nav'))
});

window.smoothScroll = function(target) {
    let scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop === 0);

    let targetY = 0;
    do {
        if (target === scrollContainer) break;
        targetY += target.offsetTop - 70;
    } while (target === target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 20) return;
        c.scrollTop = a + (b - a) / 20 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    };

    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};