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
{x:10, y:10, width:100, height:2480},
// Toda la parte inferior
{x:150, y:2320, width:3800, height:480},
// Parte superior izquierda
{x:120, y:10, width:100, height:2480},
// Toda la parte izquierda 
{x:200, y:10, width:150, height:2480},
// Diamante izquierda
{x:350, y:1470, width:130, height:180},
// Rocas abajo
{x:910, y:2120, width:500, height:380},
// Conjunto de diamantes izquierda 
{x:650, y:1070, width:300, height:280},
// Conjunto de diamantes izquierda 
{x:950, y:1260, width:300, height:250},
// Parte superior
{x:350, y:10, width:2200, height:280},
// Parte superior izquierda
{x:350, y:300, width:740, height:540},
// Diamante faltantes
{x:1100, y:270, width:160, height:400},
// Piedras superior 
{x:1900, y:270, width:260, height:280},
// Parte superior del portal
{x:2550, y:10, width:1700, height:120},
// Parte derecha del portal
{x:3430, y:120, width:500, height:1980},
// Parte justo a la drecha del portal
{x:3250, y:120, width:300, height:580},
// Parte inferior derecha
{x:3150, y:2020, width:900, height:580},
// Parte inferior derecha
{x:2850, y:2170, width:300, height:280},
// Parte inferior derecha
{x:3300, y:1920, width:200, height:180},
// Diamante superior derecha 
{x:3350, y:770, width:90, height:80},
// Rocas derecha
{x:2900, y:1250, width:400, height:420},
// Rocas derecha faltantes
{x:2900, y:1660, width:180, height:100},
// Rocas derecha faltantes
{x:2830, y:1520, width:80, height:100},
// Portal abajo izquierda
{x:2800, y:320, width:160, height:190},
// Portal abajo derecha
{x:3150, y:470, width:160, height:170},
// Portal abajo izquierda
{x:2850, y:120, width:110, height:190},
// Piedras centro 
{x:1660, y:920, width:360, height:700},
// Piedras centro 
{x:2000, y:970, width:360, height:600},
];

// ESTADO DE GAMEOVER //
var gameOverActive = false;

// VARIABLES GENERALES //
var TIC = 0; // -- Variable para el Sprite -- //
var Anim;