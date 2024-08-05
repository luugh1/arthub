// Paintings section
const paintingsContainers = [...document.querySelectorAll('.paintings-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

paintingsContainers.forEach((item, i) => {
    const containerWidth = item.offsetWidth;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollBy({
            left: containerWidth,
            behavior: 'smooth'
        });
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollBy({
            left: -containerWidth,
            behavior: 'smooth'
        });
    });
});

// Sculptures section
const sculptContainers = [...document.querySelectorAll('.sculpt-container')];
const scnxtBtn = [...document.querySelectorAll('.scnxt-btn')];
const scpreBtn = [...document.querySelectorAll('.scpre-btn')];

sculptContainers.forEach((item, i) => {
    const containerWidth = item.offsetWidth;

    scnxtBtn[i].addEventListener('click', () => {
        item.scrollBy({
            left: containerWidth,
            behavior: 'smooth'
        });
    });

    scpreBtn[i].addEventListener('click', () => {
        item.scrollBy({
            left: -containerWidth,
            behavior: 'smooth'
        });
    });
});

// Photography section
const photoContainers = [...document.querySelectorAll('.photo-container')];
const phnxtBtn = [...document.querySelectorAll('.phnxt-btn')];
const phpreBtn = [...document.querySelectorAll('.phpre-btn')];

photoContainers.forEach((item, i) => {
    const containerWidth = item.offsetWidth;

    phnxtBtn[i].addEventListener('click', () => {
        item.scrollBy({
            left: containerWidth,
            behavior: 'smooth'
        });
    });

    phpreBtn[i].addEventListener('click', () => {
        item.scrollBy({
            left: -containerWidth,
            behavior: 'smooth'
        });
    });
});

// Drawing section
const drawContainers = [...document.querySelectorAll('.drawing-container')];
const drnxtBtn = [...document.querySelectorAll('.drnxt-btn')];
const drpreBtn = [...document.querySelectorAll('.drpre-btn')];

drawContainers.forEach((item, i) => {
    const containerWidth = item.offsetWidth;

    drnxtBtn[i].addEventListener('click', () => {
        item.scrollBy({
            left: containerWidth,
            behavior: 'smooth'
        });
    });

    drpreBtn[i].addEventListener('click', () => {
        item.scrollBy({
            left: -containerWidth,
            behavior: 'smooth'
        });
    });
});