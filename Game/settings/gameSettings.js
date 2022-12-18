class myCanvasSettings{
    constructor(lignes, colognes){
        this.lignes = lignes;
        this.colognes = colognes;

        this.canvas = document.getElementById('myCanvasSettings');

        this.rowsNumber = document.getElementById('rows');
        this.colsNumber = document.getElementById('cols');

    }

// creation de la grille

    grid(){
        for(let r = 0; r<this.lignes; r++){
            const ro = document.createElement('div');
            ro.id = r;
            ro.className = 'lignes';
            this.canvas.append(ro);

            for(let c = 0; c<this.colognes; c++){
                const circle = document.createElement('div');
                circle.id = r+ '.' + c;
                circle.className = 'circle';
                ro.append(circle);
            } 
        }
    }

    game(){
        const row = document.getElementsByClassName('lignes');
        const circle = document.getElementsByClassName('circle');
        const column = this.colognes;  
        let bool = 0;
        

        for(let i = 0; i<circle.length; i++){
            const varTab = circle[i].id.split('.');
            const col = varTab[1];

            circle[i].addEventListener('click', function(){
                let counter = 0;
                
                let jeton = 'yellow';

                if(bool % 2 == 0){
                    jeton = 'red';
                }

                for(let x = 0; x<row.length; x++){
                    let ty = document.getElementById(x + '.' + col);
                    let colori = window.getComputedStyle(ty);
                    let colis = colori.getPropertyValue('background-color');

                    if(colis != 'rgb(255, 255, 255)' && counter == 0){
                        let ty = document.getElementById(x - 1 + '.' + col);
                        ty.classList.add(jeton);
                        counter++;
                        horizontal(x - 1);
                    }
                    else if(x == row.length -1 && counter == 0){
                        ty.classList.add(jeton);
                        counter++;
                        horizontal(x);
                    }                    
                }
                bool++;
                vertical(col);
            })

            function horizontal(x){
                let count = 0;
                let colour = '';
                for(let col = 0; col < column; col++){
                    const colRow = document.getElementById(x + '.' + col)
                    let colori = window.getComputedStyle(colRow);
                    let colis = colori.getPropertyValue('background-color');

                    let yellow = 'rgb(255, 255, 0)';
                    let red = 'rgb(255, 0, 0)';

                    if(colis != 'rgb(255, 255, 255)' && colour == ''){
                        colour = colis;
                    }
                    if(colour == colis){
                        count++;
                    }
                    if(colour != colis){
                        count = 1;
                        colour = colis;
                    }
                    if(colis == 'rgb(255, 255, 255)'){
                        count = 0;
                    }
                    if(count == 4 && colis == red){
                        const splitCol = colRow.className.split(' ');
                        const col = splitCol[1];
                        alert(col + ' : WON!');
                        updateScorePlayer1();

                        for(let i = 0; i<circle.length; i++){
                            circle[i].setAttribute('class', 'circle');
                        }

                    }else if(count == 4 && colis == yellow){
                        const splitCol = colRow.className.split(' ');
                        const col = splitCol[1];
                        alert(col + ' : WON!');
                        updateScorePlayer2();

                        for(let i = 0; i<circle.length; i++){
                            circle[i].setAttribute('class', 'circle');
                        }   
                    }
                }
            }

            function vertical(col){
                let count = 0;
                let colour = '';

                for(let x = 0; x < row.length; x++){
                    const colRow = document.getElementById(x + '.' + col)

                    let colori = window.getComputedStyle(colRow);
                    let colis = colori.getPropertyValue('background-color');
                    let yellow = 'rgb(255, 255, 0)';
                    let red = 'rgb(255, 0, 0)';

                    if(colis != 'rgb(255, 255, 255)' && colour == ''){
                        colour = colis;
                    }
                    if(colour == colis){
                        count++;
                    }
                    if(colour != colis){
                        count = 1;
                        colour = colis;
                    }
                    if(colis == 'rgb(255, 255, 255)'){
                        count = 0;
                    }
                    if(count == 4 && colis == red){
                        const splitCol = colRow.className.split(' ');
                        const col = splitCol[1];
                        alert(col + ' : WON!');
                        updateScorePlayer1();

                        for(let i = 0; i<circle.length; i++){
                            circle[i].setAttribute('class', 'circle');
                        }

                    }else if(count == 4 && colis == yellow){
                        const splitCol = colRow.className.split(' ');
                        const col = splitCol[1];
                        alert(col + ' : WON!');
                        updateScorePlayer2();

                        for(let i = 0; i<circle.length; i++){
                            circle[i].setAttribute('class', 'circle');
                        }
                    }
                }
            }

            function updateScorePlayer1(){
                currentScoreP1++;

                let scorePlayer1 = document.getElementById("player1");
                scorePlayer1.innerHTML = currentScoreP1;
            }
            function updateScorePlayer2(){
                currentScoreP2++;

                let scorePlayer2 = document.getElementById("player2");
                scorePlayer2.innerHTML = currentScoreP2;
            }
        }
        }
    

    colorChange(){
        const grilleColor = document.getElementsByClassName('grilleColor');
        const palletColors = ["#0000ff", "#ffc107", "#d63384", "#6f42c1", "#198754", "#66BFBF", "#d35400", "#e74c3c", "#40d47e"];

        // const grilleColor = document.getElementsByTagName('select')[0];
        const myCanvasSettings = document.getElementById('myCanvasSettings');
        const myCanvas = document.getElementById('myCanvas');
        grilleColor[0].addEventListener('click', function(){
            if (myCanvasSettings.style.backgroundColor != palletColors[0]
                && myCanvas.style.backgroundColor != palletColors[0]
            ) {
                myCanvasSettings.style.backgroundColor = palletColors[0];
                myCanvas.style.backgroundColor = palletColors[0];
            }        
        })

        grilleColor[1].addEventListener('click', function(){
            if (myCanvasSettings.style.backgroundColor != palletColors[1]
                && myCanvas.style.backgroundColor != palletColors[1]
            ) {
                myCanvasSettings.style.backgroundColor = palletColors[1];
                myCanvas.style.backgroundColor = palletColors[1];
            }        
        })

        grilleColor[2].addEventListener('click', function(){
            if (myCanvasSettings.style.backgroundColor != palletColors[2]
                && myCanvas.style.backgroundColor != palletColors[2]
            ) {
                myCanvasSettings.style.backgroundColor = palletColors[2];
                myCanvas.style.backgroundColor = palletColors[2];
            }        
        })

        grilleColor[3].addEventListener('click', function(){
            if (myCanvasSettings.style.backgroundColor != palletColors[3]
                && myCanvas.style.backgroundColor != palletColors[3]
            ) {
                myCanvasSettings.style.backgroundColor = palletColors[3];
                myCanvas.style.backgroundColor = palletColors[3];
            }        
        })

        grilleColor[4].addEventListener('click', function(){
            if (myCanvasSettings.style.backgroundColor != palletColors[4]
                && myCanvas.style.backgroundColor != palletColors[4]
            ) {
                myCanvasSettings.style.backgroundColor = palletColors[4];
                myCanvas.style.backgroundColor = palletColors[4];
            }        
        })
        grilleColor[5].addEventListener('click', function(){
            if (myCanvasSettings.style.backgroundColor != palletColors[5]
                && myCanvas.style.backgroundColor != palletColors[5]
            ) {
                myCanvasSettings.style.backgroundColor = palletColors[5];
                myCanvas.style.backgroundColor = palletColors[5];
            }        
        })

        grilleColor[6].addEventListener('click', function(){
            if (myCanvasSettings.style.backgroundColor != palletColors[6]
                && myCanvas.style.backgroundColor != palletColors[6]
            ) {
                myCanvasSettings.style.backgroundColor = palletColors[6];
                myCanvas.style.backgroundColor = palletColors[6];
            }        
        })

        grilleColor[7].addEventListener('click', function(){
            if (myCanvasSettings.style.backgroundColor != palletColors[7]
                && myCanvas.style.backgroundColor != palletColors[7]
            ) {
                myCanvasSettings.style.backgroundColor = palletColors[7];
                myCanvas.style.backgroundColor = palletColors[7];
            }        
        })

        grilleColor[8].addEventListener('click', function(){
            if (myCanvasSettings.style.backgroundColor != palletColors[8]
                && myCanvas.style.backgroundColor != palletColors[8]
            ) {
                myCanvasSettings.style.backgroundColor = palletColors[8];
                myCanvas.style.backgroundColor = palletColors[8];
            }        
        })
    }
}

let connection = new myCanvasSettings(4,4);
connection.grid();
connection.colorChange();


