class connect4{
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;

        this.canvas = document.getElementById('myCanvas');
        
    }

// creation de la grille

    grid(){
        for(let r = 0; r<this.rows; r++){
            const ro = document.createElement('div');
            ro.id = r;
            ro.className = 'rows';
            this.canvas.append(ro);

            for(let c = 0; c<this.cols; c++){
                const circle = document.createElement('div');
                circle.id = r+ '.' + c;
                circle.className = 'circle';
                ro.append(circle);
            } 
        }
    }

    game(){
        const row = document.getElementsByClassName('rows');
        const circle = document.getElementsByClassName('circle');
        const column = this.cols;  
        let bool = 0;
        
        let currentScoreP1 = 0;
        let currentScoreP2 = 0;

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

    resetGrid(){
        const circle = document.getElementsByClassName('circle');
        const reset = document.getElementById('reset');

        for(let i = 0; i<circle.length; i++){
            reset.addEventListener('click', function(){
                circle[i].setAttribute('class', 'circle');
            })
        }
    }

    resetScore(){
        const resetScore = document.getElementById('resetScore');
        resetScore.addEventListener('click', function(){
            document.getElementById("player1").innerHTML = 0;        
            document.getElementById("player2").innerHTML = 0;        
        })
    }

}

let connect = new connect4(6,7);
connect.grid();
connect.game();
connect.resetGrid();
connect.resetScore();


