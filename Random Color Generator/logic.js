const body = document.querySelector('body');
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

function rColor() {
    let r;
    let g;
    let b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    body.style.backgroundColor = `rgb(${r},${b},${b})`;
    h1.innerHTML = `RGB(${r},${b},${b})`;

}

btn.addEventListener('click', rColor);