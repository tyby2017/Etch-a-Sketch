const container =document.getElementById('container');
for(let i=0; i<16*16; i++)
{
    const div = document.createElement('div');
    div.className = 'square';
    container.appendChild(div);
}

const squares = [...document.getElementsByClassName('square')];

squares.forEach(square => {
    square.addEventListener('mouseover', function(){
        square.style.backgroundColor = randomColor();
    });
});

function randomColor() {
    const colorCode = "#" + Math.floor(Math.random()*16777215).toString(16);
    return colorCode;
}

const resetButton = document.querySelector('button')
resetButton.addEventListener('click', function (){
    location.reload();
});
