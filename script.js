const container = document.querySelector('#container');

function createGrid(r, c){
    for(let i=0;i<r;i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j=0;j<c;j++){
            let col = document.createElement('div')
            col.classList.add('col');
            row.appendChild(col);
        }
    }
}

createGrid(16, 16);
