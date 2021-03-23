createBoard(16);
mouseOverEvent();

document.querySelector('#reset').addEventListener('click', function (){
    location.reload();
});

// Change Square number event
document.getElementById('askSquareNo').addEventListener('click', () => {
    let squares = [...document.getElementsByClassName('square')];
    squares.forEach(square => {
        square.remove();
    });
    do {
        answer = Number(prompt('How many squares? You can choose between 5 and 30'));
    } while(answer < 5 || answer > 30)    
    createBoard(answer);
    mouseOverEvent();
});

function createBoard(answer) {
    const container = document.getElementById('container');
    for(let i=0; i<answer*answer; i++)
    {
        let div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
    }
}

function mouseOverEvent() {
    let squares = [...document.getElementsByClassName('square')];
    squares.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = randomColor();
        });
    });
}

function randomColor() {
    const colorCode = "#" + Math.floor(Math.random()*16777215).toString(16);
    return colorCode;
}
