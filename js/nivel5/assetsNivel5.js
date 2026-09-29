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

let moveRight = []
let moveLeft = []
let moveUp = []
let moveDown = []

// ---- VARIABLES PARA CREAR LAS IMAGENES -----//
var personajeDerecha;
var personajeIzquierda;
var personajeArriba;
var personajeAbajo;
var direccion;

var doradoDerecha;
var doradoIzquierda;
var doradoArriba;
var doradoAbajo;


// ------ ARRAYS CON LAS IMAGENES DE GOLPE ------//

let atacarDerecha = [];
let atacarIzquierda = [];
let atacarArriba = [];
let atacarAbajo = [];

let hitRight = [];
let hitLeft = [];
let hitUp = [];
let hitDown = [];




//- VARIABLES PARA CREAR LAS IMAGENES ------//
var ataqueDerecha;
var ataqueIzquierda;
var ataqueArriba;
var ataqueAbajo;

var goldAtaqueDerecha;
var goldAtaqueIzquierda;
var goldAtaqueArriba;
var goldAtaqueAbajo;


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
fondo.src = "img/escenarios/escenario5.png";


//
//-------  AUDIOS DEL NIVEL -------
//

const gameOverSound = new Audio ('sounds/gameover.mp3');
const stepsSound = new Audio ('sounds/stepssound.mp3');
const victorySound = new Audio ('sounds/victorysound.mp3');
const ouchSound = new Audio ('sounds/ouch-sound.mp3');
const swordSound = new Audio ('sounds/swordsound.mp3')

let cazadorDorado = false;
let oleadaFantasmasInvocada = false;


// Función para nuevo aspecto del personaje
function becomeGold() {

    if (cazadorDorado == true) {
        return;
    }

    cazadorDorado = true;
	localStorage.setItem("poderDorado", "true");

    moverDerecha = moveRight;
    moverIzquierda = moveLeft;
    moverArriba = moveUp;
    moverAbajo = moveDown;

    atacarDerecha = hitRight;
    atacarIzquierda = hitLeft;
    atacarArriba = hitUp;
    atacarAbajo = hitDown;

    vidaMaxima = 500;
    vida = vidaMaxima;

    danoEspada = 50;
    duracionAtaque = 150;
    cooldownAtaque = 150;
	velocidadJugador = 30


    actualizarVida();

    invocarOleadaFantasmas();
}

function invocarOleadaFantasmas() {

    if (oleadaFantasmasInvocada == true) {
        return;
    }

    oleadaFantasmasInvocada = true;

    let posicionesFantasmas = [
        { x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
	    { x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
        { x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },
		{ x: 1710, y: 1920 },   
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 2710, y: 1120 }, 
		{ x: 1260, y: 620 }, 
		{ x: 1260, y: 620 }, 
		{ x: 1260, y: 620 }, 
		{ x: 1260, y: 620 }, 
		{ x: 1260, y: 620 }, 
		{ x: 1260, y: 620 }, 
		{ x: 1260, y: 620 }, 
		{ x: 1260, y: 620 }, 
		{ x: 1260, y: 620 }, 
		{ x: 1260, y: 620 }, 
    ];

    for (let i = 0; i < posicionesFantasmas.length; i++) {

        let fantasmaNuevo = new Fantasma(
            'panel',
            posicionesFantasmas[i].x,
            posicionesFantasmas[i].y,
            6
        );

        fantasmaNuevo.vida = 2;

        criaturas.push(fantasmaNuevo);
    }
}

// Personaje Dorado Movimiento //

// Derecha
crearImagenes(doradoDerecha,8,'gd',moveRight);

// Izquierda
crearImagenes(doradoIzquierda,8,'gi',moveLeft);

// Arriba
crearImagenes(doradoArriba,8,'ga',moveUp);

//Abajo
crearImagenes(doradoAbajo,8,'gh',moveDown);

// Personaje Ataque//

// Derecha
crearImagenes(goldAtaqueDerecha,3,'gdd',hitRight);

//Izquierda
crearImagenes(goldAtaqueIzquierda,3,'gii',hitLeft);

// Arriba
crearImagenes(goldAtaqueArriba,3,'gaa',hitUp);

// Abajo
crearImagenes(goldAtaqueAbajo,3,'ghh',hitDown);