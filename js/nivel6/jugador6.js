// 
//------- VARIABLES DEL PERSONAJE ---------
//

var posX=910; // Posición del personaje
var posY=1820;

var vidaMaxima = 100;
var vida = vidaMaxima; //-- Vida del Personaje --//
var velocidadJugador = 15;

var anchoP = 80; // Ancho del Personaje
var altoP = 80; // Alto del Personaje 
var ultimaDireccion = 'abajo'; // Ultima dirección del personaje
var direccionDano = ""; // Dirección del daño del personaje
var muriendo = false; // Detectar si el personaje murió
var recibiendoDano = false; // Detectar si el personaje esta recibiendo daño

// ------ VARIABLES DE LA JUGABILIDAD ---------//
var puedeRecibirDamage = true;



// 
// ------- FUNCIÓN RECIBIR DAÑO ---------
//

function recibirDamage(cantidad){

	if(puedeRecibirDamage == true){
		vida -= cantidad;
		ouchSound.currentTime = 0;
		ouchSound.play();
		//
		// ACTIVAR ANIMACIÓN DE DAÑO
		//
		recibiendoDano = true;
		//
		// GUARDAR DIRECCIÓN
		//
		if(incrRIGHT > 0){
			direccionDano = "derecha";
		}
		else if(incrLEFT > 0){
			direccionDano = "izquierda";
		}
		else if(incrUP > 0){
			direccionDano = "arriba";
		}
		else if(incrDOWN > 0){
			direccionDano = "abajo";
		}
		//
		// QUITAR SPRITE DE DAÑO
		//
		setTimeout(() => {
			recibiendoDano = false;
		},300);

		if (vida < 0){
			vida = 0;
		}
		puedeRecibirDamage = false;
		setTimeout(function(){
			puedeRecibirDamage = true;
		},1000)
	}
}

// 
// ------- FUNCIÓN ACTUALIZAR VIDA --------
//
function actualizarVida() {

    const barra = document.getElementById('vida-js');
    const textoVida = document.getElementById('texto-vida-js');

    let porcentajeVida = (vida / vidaMaxima) * 100;

    if (porcentajeVida > 100) {
        porcentajeVida = 100;
    }

    if (porcentajeVida < 0) {
        porcentajeVida = 0;
    }

    barra.style.width = porcentajeVida + "%";

    if (textoVida) {
        textoVida.innerHTML = `${vida} / ${vidaMaxima}`;
    }

    if (porcentajeVida > 80) {
        barra.style.background = "#00ff00";
        barra.style.boxShadow = "0 0 15px #00ff00";
    }
    else if (porcentajeVida > 60) {
        barra.style.background = "#66cc00";
        barra.style.boxShadow = "0 0 15px #66cc00";
    }
    else if (porcentajeVida > 40) {
        barra.style.background = "yellow";
        barra.style.boxShadow = "0 0 15px yellow";
    }
    else if (porcentajeVida > 20) {
        barra.style.background = "orange";
        barra.style.boxShadow = "0 0 15px orange";
    }
    else {
        barra.style.background = "red";
        barra.style.boxShadow = "0 0 15px red";
    }
}

//
// ------ FUNCIÓN SPRITE ------ //
//

function sprite(array, TIC){
	let indice = (Math.floor(TIC/4) % (array.length-1)+1);
	return array[indice];
}
