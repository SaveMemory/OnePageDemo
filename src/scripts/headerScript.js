let nav = document.querySelector('nav');

window.onscroll =function myFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        nav.className = "navAnimateIn";
    } else {
        nav.className = "navAnimateOut";
    }
};
