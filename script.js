const grid = document.querySelector('#grid');
const maxDim = 700;
let gridNum = 50;
let select = 0;
let color = 255;

function createGrid(x){
    const dim = maxDim/x;

    for(let i=0;i<x;i++){
        let row = document.createElement('div');
        //row.classList.add('row');
        grid.appendChild(row);
        for(let j=0;j<x;j++){
            let col = document.createElement('div')
            //col.classList.add('col');
            col.style.height = dim + 'px';
            col.style.width = dim + 'px';
            col.addEventListener('mouseover', () => onHover(select, col));
            row.appendChild(col);
        }
    }
}

function onHover(sel, sqr){
    if(sel === 0) sqr.style.background = 'black';
    else if(sel === 1) sqr.style.background = randColor();
    else sqr.style.background = darken();
}

function randColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function darken(){
    color -= 25.5;
    return `rgb(${color}, ${color}, ${color})`;
}

select = 0;
createGrid(gridNum);
