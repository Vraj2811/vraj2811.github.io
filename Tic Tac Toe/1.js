console.log("Tic Tac Toe Game")

let music = new Audio("ting.mp3")
let turn = "X.png"
let gameover = false;
const myDiv = document.getElementById('result');
const myImage = document.getElementById('gif');


const changeTurn = () => {
    return turn === "X.png" ? "O.png" : "X.png"
}

const checkWin = () => {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    const gridContainer = document.getElementById('image-grid');
    const list = [];

    for (let i = 0; i < 9; i++) {
        const gridElement = gridContainer.children[i];
        const hasXImage = gridElement.querySelector('img[src="X.png"]') !== null;
        const hasOImage = gridElement.querySelector('img[src="O.png"]') !== null;

        let value;
        if (hasXImage) {
            value = 'X';
        }
        else if (hasOImage) {
            value = 'O';
        }
        else {
            value = " ";
        }
        list.push(value);
    }

    wins.forEach(e => {
        if ((list[e[0]] == list[e[1]]) && (list[e[2]] == list[e[1]]) && (list[e[0]] !== " ")) {
            myDiv.innerHTML = list[e[0]] + " Won";
            gameover = true;
            myImage.style.opacity = 0.5;
        }
    })
}

Array.from(document.getElementsByClassName('box')).forEach(element => {
    element.addEventListener('click', () => {
        if (!gameover) {
            const images = element.querySelectorAll('img');
            if (images.length <= 0) {
                const image = document.createElement('img');
                image.src = turn;
                const elementStyles = window.getComputedStyle(element);
                image.style.width = 0.9 * elementStyles.width;
                image.style.height = 0.9 * elementStyles.height;
                element.appendChild(image);
                turn = changeTurn();
                music.play();
                checkWin();
            }
        }
    });
});

reset.addEventListener('click', () => {
    const gridContainer = document.getElementById('image-grid');
    const imageElements = gridContainer.querySelectorAll('img');
    imageElements.forEach(image => image.remove());
    turn = "X.png";
    gameover = false;
    myDiv.innerHTML = "";
    myImage.style.opacity = 0;
})
