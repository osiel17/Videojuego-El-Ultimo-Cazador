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
// Parte superior izquierda
{x:50, y:50, width:1500, height:800},
// Parte de abajo del anterior obstaculo.
{x:50, y:870, width:1000, height:600},
// Obstaculo pequeño entre los don anteriores
{x:1050, y:900, width:400, height:250},
// Obstaculo parte inferior izquierda
{x:50, y:1520, width:500, height:500},
// Obstaculo pequeño al lado del anterior
{x:550, y:1420, width:300, height:350},
// Obstaculo pequeño medio
{x:1050, y:1170, width:300, height:180},
// Obstaculo centro superior
{x:1550, y:50, width:1310, height:780},
// Obstaculo centro superior
{x:2050, y:820, width:540, height:400},
// Obstaculo pequeño debajo del anterior
{x:2200, y:1220, width:390, height:100},
// Obstaculo pequeño a lado de los dos anteirores
{x:2600, y:820, width:60, height:480},
// Obstaculo pequeño cerca de llegar al portal
{x:2850, y:620, width:230, height:170},
// Parte izquierda cerca del portal
{x:2850, y:50, width:310, height:340},
// Abajo del anterior
{x:2870, y:370, width:310, height:120},
// Obstaculo pequeño 
{x:2850, y:500, width:80, height:90},
// Parte izquierda del portal
{x:3150, y:10, width:200, height:190},
// Parte arriba del portal
{x:3350, y:10, width:200, height:100},
// Parte derecha del portal 
{x:3570, y:120, width:200, height:2100},
// Parte del centro abajo
{x:850, y:2120, width:2800, height:800},
// Parte arriba del anterior
{x:1200, y:1770, width:2800, height:400},
// Parte central
{x:1650, y:1300, width:400, height:450},
// Parte central
{x:2050, y:1490, width:200, height:250},
// Parte central
{x:2250, y:1620, width:1000, height:250},
// Parte derecha casi al llegar al portal
{x:2900, y:980, width:1000, height:1250},
// Parte derecha casi al llegar al portal
{x:3300, y:610, width:500, height:550},
// Parte derecha casi al llegar al portal
{x:3450, y:390, width:400, height:550},
// Parte del centro 
{x:2500, y:1490, width:540, height:550},
// Parte del centro 
{x:2550, y:1430, width:500, height:550},
// Parte del centro 
{x:2700, y:1380, width:200, height:150},
// Parte del centro 
{x:2750, y:1350, width:150, height:150},
// Parte del centro 
{x:2650, y:820, width:120, height:150},
// Parte del centro 
{x:3000, y:920, width:120, height:150},
// Parte del centro 
{x:3150, y:860, width:120, height:150},
// Piedra Grande  
{x:1450, y:870, width:170, height:150},
// Piedra Grande  
{x:1540, y:1510, width:170, height:220},


];

// ESTADO DE GAMEOVER //
var gameOverActive = false;

// VARIABLES GENERALES //
var TIC = 0; // -- Variable para el Sprite -- //
var Anim;