const grid = document.querySelector('#grid');
const btns = document.querySelectorAll('button');
const maxDim = 650;
let gridNum = 16;
let select = '';
let color = 255;
let rev = false;

function createGrid(x){
    const dim = maxDim/x;

    for(let i=0;i<x;i++){
        let col = document.createElement('div');
        col.classList.add('col');
        grid.appendChild(col);
        for(let j=0;j<x;j++){
            let row = document.createElement('div')
            row.classList.add('row');
            row.style.height = dim + 'px';
            row.style.width = dim + 'px';
            row.addEventListener('mouseover', () => onHover(select, row));
            col.appendChild(row);
        }
    }
}

function onHover(sel, sqr){
    if(sel === 'clr') sqr.style.background = randColor();
    else if(sel === 'drk') sqr.style.background = darken();
    else sqr.style.background = 'black';
    
}

function randColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function darken(){
    if(!rev){
        color -= 25.5;
        if(color === 0) rev = true;
}else {
        color += 25.5;
        if(color === 255) rev = false;
    }

    return `rgb(${color}, ${color}, ${color})`;
}

function getIn(){
    let userIn = '';
    while(true){
        userIn = prompt('Type a number between 1-70');
        if(userIn > 70 || userIn == 0 || isNaN(+userIn))
            alert('Number not in range. Try again.');
        else return userIn;
    }
}

function reset(){
    const rows = document.querySelectorAll('.row');
    const cols = document.querySelectorAll('.col');
    rows.forEach(e => e.parentNode.removeChild(e));
    cols.forEach(e => e.parentNode.removeChild(e));
    createGrid(gridNum);
}

function changeSize(){
    let newSize = getIn();
    if(newSize === null) return null;
    else{
        gridNum = newSize;
        reset();
    }
}

createGrid(gridNum);

btns.forEach(btn => btn.addEventListener('click', e => {
    if(e.target.id === 'color') select = 'clr';
    else if(e.target.id === 'darken') select = 'drk';
    else if(e.target.id === 'black') select = 'blk';
    else if(e.target.id === 'size') changeSize();
    else reset();
}));

