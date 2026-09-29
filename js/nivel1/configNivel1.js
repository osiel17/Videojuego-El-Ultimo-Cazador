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
// Piedras y Arboles
{x:30, y:1900, width:1000, height:600},
// Conjunto de Arboles izquierda
{x:30, y:50, width:350, height:1900},
// Parte superior izquierda
{x:30, y:50, width:950, height:350},
// Parte inferior izquierda
{x:2800, y:1740, width:1200, height:750},
// Zona rocosa a la derecha
{x:3350, y:50, width:600, height:1750},
// Conjunto de arboles cerca del portal
{x:1270, y:10, width:600, height:450},
// Parte arriba del portal
{x:1870, y:10, width:1450, height:100},
// Parte derecha del portal
{x:2170, y:380, width:500, height:380},
// Arriba del anterior
{x:2170, y:140, width:450, height:250},
// Conjunto de rocas parte media
{x:2230, y:900, width:700, height:220},
// Conjunto de arboles parte derecha
{x:370, y:920, width:450, height:1000},
// Arbol grande superior derecho
{x:2790, y:380, width:90, height:90},
// Conjunto de rocas y arboles centro
{x:1090, y:1100, width:680, height:200},
// Arbol Grande Izquierda Centro
{x:840, y:690, width:120, height:120},
// Arbol Grande Izquierda Centro
{x:3130, y:800, width:120, height:120},
// Limite superior izquierdo
{x:980, y:10, width:600, height:120},
// Limite izquierdo portal
{x:1850, y:90, width:80, height:200},
// Limite derecho portal
{x:2100, y:90, width:80, height:200},

];

// ESTADO DE GAMEOVER //
var gameOverActive = false;

// VARIABLES GENERALES //
var TIC = 0; // -- Variable para el Sprite -- //
var Anim;