let jugadas = parseInt(prompt('Indique el número de veces que desea jugar'));
for (let i = 1; i <= jugadas; i++) {
    let usuario = parseInt(prompt('Escoja 1-tijera, 2-papel o 3-piedra'));
    let pc = Math.floor(Math.random()*3+1);
    
    switch (usuario) {
        case 1:
            if (pc!==1){
                if(pc==2){
                    alert('El computador eligió papel, por lo que haz ganado ¡Felicidades!');
                }
                else{
                    alert('El computador eligió piedra, haz perdido');
                }
            }
            else{
                alert('Has escogido tijera al igual que el computador, es un empate')
            }
            break;
        
            case 2:
                if (pc!==2){
                    if(pc==1){
                        alert('El computador eligió tijera, haz perdido');
                    }
                    else{
                        alert('El computador eligió piedra, por lo que haz ganado ¡Felicidades!');
                    }
                }
                else{
                    alert('Has escogido papel al igual que el computador, es un empate')
                }
                break;
                case 3:
                    if (pc!==3){
                        if(pc==1){
                            alert('El computador eligió tijera, por lo que haz ganado ¡Felicidades!');
                        }
                        else{
                            alert('El computador eligió papel, haz perdido');
                        }
                    }
                    else{
                        alert('Has escogido piedra al igual que el computador, es un empate')
                    }
                    break;
         }
        }