// 
//------- VARIABLES DEL PERSONAJE ---------
//

var posX=100; // Posición del personaje
var posY=2320;

var vida = 100; //-- Vida del Personaje --//

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
function actualizarVida(){
	const barra = document.getElementById('vida-js');

	barra.innerHTML =`${vida}`;
	barra.style.width =vida + "%";

	// VERDE FUERTE
	if(vida > 80){
		barra.style.background ="#00ff00";
		barra.style.boxShadow ="0 0 15px #00ff00";
	}
	// VERDE BAJO
	else if(vida > 60){
		barra.style.background ="#66cc00";
		barra.style.boxShadow ="0 0 15px #66cc00";
	}
	// AMARILLO
	else if(vida > 40){
		barra.style.background ="yellow";
		barra.style.boxShadow ="0 0 15px yellow";
	}

	// NARANJA
	else if(vida > 20){
		barra.style.background =
		"orange";
		barra.style.boxShadow =
		"0 0 15px orange";
	}
	// ROJO
	else{
		barra.style.background =
		"red";
		barra.style.boxShadow =
		"0 0 15px red";
	}
}

//
// ------ FUNCIÓN SPRITE ------ //
//

function sprite(array, TIC){
	let indice = (Math.floor(TIC/10) % (array.length-1)+1);
	return array[indice];
}
