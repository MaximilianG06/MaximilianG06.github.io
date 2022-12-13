let sources = [
    "./IMG/IMG 1.jpg",
    "./IMG/IMG 2.jpg",
    "./IMG/IMG 3.jpg",
    "./IMG/IMG 4.jpg",
    "./IMG/IMG 5.jpg"
]

let images = document.getElementsByClassName('img');

function slideRight() {
    let temp = document.images[0].src;
    document.images[0].src = document.images[1].src;
    document.images[1].src = document.images[2].src;
    document.images[2].src = document.images[3].src;
    document.images[3].src = document.images[4].src;
    document.images[4].src = temp;
}
function slideLeft() {
    let temp = document.images[4].src;
    document.images[4].src = document.images[3].src;
    document.images[3].src = document.images[2].src;
    document.images[2].src = document.images[1].src;
    document.images[1].src = document.images[0].src;
    document.images[0].src = temp;
}
