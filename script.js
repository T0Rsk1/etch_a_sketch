const container = document.querySelector('#container');
const maxDim = 800;

function createGrid(r, c){
    for(let i=0;i<r;i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j=0;j<c;j++){
            let col = document.createElement('div')
            col.classList.add('col');
            col.style.height = `${maxDim/r}px`;
            col.style.width = `${maxDim/c}px`;
            col.addEventListener('mouseover', () => onHover(col));
            row.appendChild(col);
        }
    }
}

function onHover(sqr){
    sqr.classList.add('color-square');
}

createGrid(100, 100);

