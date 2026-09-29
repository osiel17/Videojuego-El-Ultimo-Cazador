//
// ------- VARIABLES DEL ATAQUE --------
//

var atacando = false;
var puedeAtacar = true;

var duracionAtaque = 200; // milisegundos que dura el golpe
var cooldownAtaque = 300; // tiempo para volver a atacar
var ticAtaque = 0;
var danoEspada = 3;

// Para que una criatura no reciba muchos golpes en un solo ataque
var criaturasGolpeadas = new Set();

//
// ------- FUNCIÓN ATACAR --------
//

function atacar() {

    if (puedeAtacar == false || muriendo == true) {
        return;
    }

    atacando = true;
    puedeAtacar = false;
    swordSound.currentTime = 0;
    swordSound.play();

	ticAtaque = 0;

    criaturasGolpeadas.clear();

    setTimeout(() => {
        atacando = false;
    }, duracionAtaque);

    setTimeout(() => {
        puedeAtacar = true;
    }, cooldownAtaque);
   
}

//
// ------- HITBOX DE LA ESPADA --------
//

function obtenerHitboxEspada() {

    let rangoExtra = 30;

    let espada = {
        x: posX,
        y: posY,
        width: 60,
        height: 60
    };

    if (ultimaDireccion == "derecha") {

        espada.x = posX + anchoP - 10;
        espada.y = posY + 15;
        espada.width = 65 + rangoExtra;
        espada.height = 50;
    }

    else if (ultimaDireccion == "izquierda") {

        espada.x = posX - 55 - rangoExtra;
        espada.y = posY + 15;
        espada.width = 65 + rangoExtra;
        espada.height = 50;
    }

    else if (ultimaDireccion == "arriba") {

        espada.x = posX + 15;
        espada.y = posY - 55 - rangoExtra;
        espada.width = 50;
        espada.height = 65 + rangoExtra;
    }

    else if (ultimaDireccion == "abajo") {

        espada.x = posX + 15;
        espada.y = posY + altoP - 10;
        espada.width = 50;
        espada.height = 65 + rangoExtra;
    }

    return espada;
}

//
// ------- COLISIÓN ESPADA CON CRIATURA --------
//

function espadaGolpeaCriatura(espada, criatura) {

    let xCriatura = criatura.posX + 20;
    let yCriatura = criatura.posY + 20;
    let anchoCriatura = criatura.width - 40;
    let altoCriatura = criatura.height - 40;

    if (
        espada.x < xCriatura + anchoCriatura &&
        espada.x + espada.width > xCriatura &&
        espada.y < yCriatura + altoCriatura &&
        espada.y + espada.height > yCriatura
    ) {
        return true;
    }

    return false;
}

//
// ------- DIBUJAR ATAQUE --------
//

function dibujarAtaque(ctx) {

    if (atacando == false) {
        return;
    }

    let imagenAtaque;

    if (ultimaDireccion == 'derecha') {
        imagenAtaque = spriteAtaque(atacarDerecha);
    }
    else if (ultimaDireccion == 'izquierda') {
        imagenAtaque = spriteAtaque(atacarIzquierda);
    }
    else if (ultimaDireccion == 'arriba') {
        imagenAtaque = spriteAtaque(atacarArriba);
    }
    else if (ultimaDireccion == 'abajo') {
        imagenAtaque = spriteAtaque(atacarAbajo);
    }

    ctx.drawImage(
        imagenAtaque,
        posX - camaraX,
        posY - camaraY,
        anchoP,
        altoP
    );

    ticAtaque++;
}



//
// ------ FUNCIÓN SPRITE ATAQUE ------ //
//
function spriteAtaque(array) {

    let indice = ticAtaque;

    if (indice >= array.length) {
        indice = array.length - 1;
    }

    return array[indice];
}