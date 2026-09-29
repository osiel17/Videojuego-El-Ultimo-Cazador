//
//* ------------- IMAGENES Y AUDIOS ----------*//
//

//
//------- ARRAYS CON LAS IMAGENES DEL PERSONAJE --------
//	
let moverDerecha = []; // Derecha
let moverIzquierda = []; // Izquierda
let moverArriba = []; // Arriba
let moverAbajo = []; // Abajo 

// ---- VARIABLES PARA CREAR LAS IMAGENES -----//
var personajeDerecha;
var personajeIzquierda;
var personajeArriba;
var personajeAbajo;
var direccion;


// ------ ARRAYS CON LAS IMAGENES DE GOLPE ------//

let atacarDerecha = [];
let atacarIzquierda = [];
let atacarArriba = [];
let atacarAbajo = [];


//- VARIABLES PARA CREAR LAS IMAGENES ------//
var ataqueDerecha;
var ataqueIzquierda;
var ataqueArriba;
var ataqueAbajo;

//
//*-------- FUNCIÓN PARA CREAR LAS IMAGENES ---------*//
//
function crearImagenes(imagen,cantidad,direccion,array){
	for(let i =0; i<= cantidad;i++){
		imagen = new Image();
		imagen.src = `img/personaje/${direccion}${i}.png`
		array.push(imagen);
	}
}


//
//------- CREAR IMAGENES DEL PERSONAJE -------//
//

//*---- PERSONAJE CORRIENDO HACIA LA DERECHA-----*//
crearImagenes(personajeDerecha,8,'d',moverDerecha);


//*---- PERSONAJE CORRIENDO HACIA LA IZQUIERDA -----*//
crearImagenes(personajeIzquierda,8,'i',moverIzquierda);


//*---- PERSONAJE CORRIENDO HACIA ARRIBA-----*//
crearImagenes(personajeArriba,8,'a',moverArriba);


//*---- PERSONAJE CORRIENDO HACIA ABAJO-----*//
crearImagenes(personajeAbajo,8,'h',moverAbajo);


//*----- PERSONAJE ATACANDO DERECHA ------*//
crearImagenes(ataqueDerecha,3,'dd',atacarDerecha);


//*----- PERSONAHE ATACANDO IZQUIERDA -------*//
crearImagenes(ataqueIzquierda,3,'ii',atacarIzquierda);


//*---- PERSONAJE ATACANDO ARRIBA ---------*//
crearImagenes(ataqueArriba,3,'aa',atacarArriba);


//*--------- PERSONAJE ATACANDO ABAJO --------*//
crearImagenes(ataqueAbajo,3,'hh',atacarAbajo);


//*---- PERSONAJE MUERTO -----*//

const m3 = new Image();
m3.src = "img/personaje/morir3.png";

//*---- Personaje Reciebiendo Daño -----*//

const dano1 = new Image();
dano1.src = "img/personaje/danoderecha.png"

const dano2 = new Image();
dano2.src = "img/personaje/danoizquierda.png"

const dano3 = new Image();
dano3.src = "img/personaje/danoarriba.png"

const dano4 = new Image();
dano4.src = "img/personaje/danoabajo.png"

//* ------- FONDO DEL ESCENARIO -------*//
const fondo = new Image();
fondo.src = "img/escenarios/escenario4.png";


//
//-------  AUDIOS DEL NIVEL -------
//

const gameOverSound = new Audio ('sounds/gameover.mp3');
const stepsSound = new Audio ('sounds/stepssound.mp3');
const victorySound = new Audio ('sounds/victorysound.mp3');
const ouchSound = new Audio ('sounds/ouch-sound.mp3');
const swordSound = new Audio ('sounds/swordsound.mp3')