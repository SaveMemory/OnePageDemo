let nav = document.querySelector('nav');

window.onscroll =function myFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        nav.className = "navAnimateIn";
    } else {
        nav.className = "navAnimateOut";
    }
};
