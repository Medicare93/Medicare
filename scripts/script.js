const page_connexion = document.querySelector(".pageConnexion");
const loader = document.querySelector(".loader");
const header = document.querySelector('.header');

function OpenPageConnexion() {
    page_connexion.style.transform = "translateY(0%)";
}

function ClosePageConnexion() {
    page_connexion.style.transform = "translateY(-100%)";
}

window.addEventListener('load', e => {
    loader.classList.add('fin-loader');
});

function log() {
    console.log("+1");
}
