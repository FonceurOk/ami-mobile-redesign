const navText = document.querySelectorAll('.nav-bar a');
const stepsText = document.querySelectorAll('.container');
const stepsImg = document.querySelectorAll('.container-img');
const up = document.querySelector('.up');
const menu = document.querySelector('.menu');
const address = document.querySelector('.address-blue');

var variableMenu = true;
var nameMenu = 'menu';

navText[0].style.color = '#3ec3fb';
navText[0].style.borderBottom = '4px solid #3ec3fb';

stepsImg[0].style.border = '4px solid #3ec3fb';

if (window.matchMedia("(min-width: 768px)").matches) {
    stepsText[2].style.width = '50%';
    nameMenu = 'menu';
    address.style.display = "none";
    variableMenu = true;
} else {
    stepsText[2].style.width = 'auto';
}

window.onscroll = function() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    up.style.display = "block";
} else {
    up.style.display = "none";
}};

up.addEventListener("click", function () {
    window.scroll({top: 0, behavior: "smooth"});
});

/*
menu.addEventListener("click", function () {
    if (variableMenu) {
        nameMenu = 'close';
        address.style.display = "block";
        variableMenu = false;
    } else {
        nameMenu = 'menu';
        address.style.display = "none";
        variableMenu = true;
    }

    menu.src = `../public/assets/icons/${nameMenu}.svg`;
});
*/