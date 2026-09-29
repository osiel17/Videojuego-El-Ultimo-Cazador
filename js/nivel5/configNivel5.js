//
//----- AJUSTES DE LA CAMARA  Y DEL ESCENARIO --------//
//
const anchoMapa = 4000;
const altoMapa = 2500;

let camaraX = 0;
let camaraY = 0;

const velocidadMov= 15; // Velocidad de movimiento  //


// ------ ANCHO Y ALTO DEL PANEL -------//
var anchoPanel;
var altoPanel;

//
//* ------- OBSTACULOS DEL ESCENARIO NIVEL 1 ------*//
//

let obstaculos = [
// Toda la parte izquierda 
{x:100, y:10, width:410, height:2480},
// Toda la parte arriba
{x:510, y:10, width:2500, height:400},
// Muro izquierda
{x:510, y:420, width:580, height:250},
// Toda la pasrte de abajo
{x:1010, y:2170, width:2900, height:450},
// Junto al personaje
{x:520, y:2370, width:590, height:150},
// Toda la parte derecha
{x:3700, y:10, width:290, height:2300},
// Arriba del portal
{x:3010, y:10, width:990, height:140},
// Parte derecha del portal
{x:3320, y:170, width:400, height:400},
// Escombros
{x:3110, y:1570, width:400, height:400},
// Escombros
{x:3300, y:1420, width:190, height:300},
// Escombros
{x:3160, y:1970, width:160, height:300},
// Muro izquierda portal
{x:2590, y:420, width:130, height:520},
// Antorcha y emperador
{x:2710, y:420, width:290, height:120},
// Torre
{x:2390, y:520, width:160, height:300},
// Torre abajo
{x:2390, y:1620, width:160, height:300},
// Trono izquierda
{x:1110, y:1020, width:250, height:500},
// Trono derecha
{x:2080, y:1020, width:250, height:500},
// Trono arriba
{x:1240, y:820, width:970, height:300},
// Trono abajo derecha
{x:1810, y:1480, width:300, height:260},
// Trono abajo izquierda
{x:1260, y:1480, width:340, height:260},
// Antorcha portal
{x:2980, y:820, width:70, height:100},
// Antorcha portal
{x:3300, y:820, width:70, height:100},
];

// ESTADO DE GAMEOVER //
var gameOverActive = false;

// VARIABLES GENERALES //
var TIC = 0; // -- Variable para el Sprite -- //
var Anim;