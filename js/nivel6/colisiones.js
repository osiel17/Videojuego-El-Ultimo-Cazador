//
//*-------  FUNCIÓN COLISION OBSTACULO ---------*//
function colisionObstaculo(x, y, ancho, alto) {

    let xPlayer = x + 20;
    let yPlayer = y + 20;

    let anchoPlayer = ancho - 40;
    let altoPlayer = alto - 40;

    if (
        xPlayer < areaJugable.x ||
        xPlayer + anchoPlayer > areaJugable.x + areaJugable.width ||
        yPlayer < areaJugable.y ||
        yPlayer + altoPlayer > areaJugable.y + areaJugable.height
    ) {
        return true;
    }

    return false;
}

//
// ------ FUNCION COLISION OBSTACULO CRIATURA -------//
//

function colisionObstaculoCriatura(x, y, ancho, alto) {

    if (
        x < areaJugable.x ||
        x + ancho > areaJugable.x + areaJugable.width ||
        y < areaJugable.y ||
        y + alto > areaJugable.y + areaJugable.height
    ) {
        return true;
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
