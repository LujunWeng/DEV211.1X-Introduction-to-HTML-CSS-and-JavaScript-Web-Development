'use strict'

var slideInterval = 3500;

function getFigures() {
    return document.getElementById('carousel').getElementsByTagName('figure');
}

function moveForward() {
    var pointer = 0;
    var figures = getFigures();

    for (let i = 0; i < figures.length; ++i) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = (i+1) % figures.length;
            figures[pointer].className = 'visible';
            setTimeout(moveForward, slideInterval);
            break;
        }
    }
}

function startPlayback() {
    setTimeout(moveForward, slideInterval);
}

startPlayback();