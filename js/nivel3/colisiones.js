//
//*-------  FUNCIÓN COLISION OBSTACULO ---------*//
function colisionObstaculo(x, y, ancho, alto) {
    let jugador = {
        x: x + 20,
        y: y + 20,
        width: ancho - 40,
        height: alto - 40
    };

    for (let i = 0; i < obstaculos.length; i++) {

        let obs = obstaculos[i];

        if (
            jugador.x < obs.x + obs.width &&
            jugador.x + jugador.width > obs.x &&
            jugador.y < obs.y + obs.height &&
            jugador.y + jugador.height > obs.y
        ) {
            return true;
        }
    }

    return false;
}

//
// ------ FUNCION COLISION OBSTACULO CRIATURA -------//
//

function colisionObstaculoCriatura(x, y, ancho, alto) {

    let criatura = {
        x: x + 20,
        y: y + 20,
        width: ancho - 40,
        height: alto - 40
    };

    for (let i = 0; i < obstaculos.length; i++) {

        let obs = obstaculos[i];

        if (
            criatura.x < obs.x + obs.width &&
            criatura.x + criatura.width > obs.x &&
            criatura.y < obs.y + obs.height &&
            criatura.y + criatura.height > obs.y
        ) {
            return true;
        }
    }

    return false;
}

//
//-------- FUNCIÓN COLISION ---------//
//
function colision(posX,posY,anchoP,altoP, P1){
        let xp1= P1.posX
        let yp1 = P1.posY
        let anchop1 = P1.width
        let altop1 = P1.height;

        if (
            posX < xp1 + anchop1 && 
            posX + anchoP > xp1 &&
            posY < yp1 + altop1 && 
            posY + altoP > yp1
        ){
        return true;
		}

   		 else
		{
        return false;
		}
}
