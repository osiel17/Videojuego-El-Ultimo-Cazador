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
{x:10, y:10, width:500, height:270},
// Huesos Grandes superior izquierda
{x:250, y:350, width:150, height:200},
// Toda la parte superior 
{x:540, y:10, width:2900, height:200},
// Ruinas superior 
{x:550, y:220, width:290, height:190},
// Cactus y obstaculos
{x:850, y:220, width:290, height:170},
// Muro alto superior
{x:1290, y:320, width:60, height:70},
// Grieta superior
{x:1790, y:220, width:80, height:380},
// Muros a lado de la grieta
{x:1900, y:270, width:160, height:180},
// Faltante del muro
{x:2050, y:440, width:160, height:80},
// Cactus superior
{x:2260, y:220, width:60, height:140},
// Muros cerca del portal
{x:2550, y:370, width:240, height:140},
// Grietas cerca del portal
{x:3050, y:220, width:110, height:360},
// Muro izquierdo del portal
{x:3180, y:220, width:190, height:160},
// Parte superior del portal
{x:3450, y:10, width:190, height:160},
// Parte derecha del portal
{x:3650, y:10, width:460, height:560},
// Muro derecho del portal
{x:3550, y:370, width:160, height:60},
// Piedras Derecha
{x:3860, y:570, width:100, height:440},
// Cactus Derecha
{x:3310, y:770, width:100, height:120},
// Cactus enorme Derecha
{x:3650, y:920, width:100, height:220},
// Piedra al lado del cactus
{x:3500, y:920, width:70, height:70},
// Muros cerca del craneo
{x:3520, y:1420, width:340, height:280},
// Grieta derecha
{x:3700, y:1720, width:200, height:670},
// Muros al lado de la grieta
{x:3400, y:1790, width:180, height:100},
// Calavera derecha
{x:3550, y:2220, width:180, height:100},
// Muros y grieta abajo derecha
{x:3240, y:2070, width:100, height:430},
// Muros al lado del anterior
{x:3050, y:2110, width:160, height:130},
// Muros faltantes
{x:3000, y:2270, width:60, height:60},
// Conjunto de huesos derecha
{x:2780, y:1570, width:350, height:400},
// Toda la parte inferior
{x:350, y:2280, width:2350, height:180},
// Grieta inferior
{x:850, y:2070, width:170, height:180},
// Grieta inferior y catus
{x:1000, y:2070, width:640, height:180},
// Cactus y muro
{x:2500, y:2220, width:140, height:50},
// Toda la parte izquierda
{x:10, y:270, width:280, height:1830},
// Esquina inferior derecha
{x:10, y:2120, width:140, height:150},
// Antorcha
{x:150, y:2120, width:100, height:90},
// Muro izquierda faltante
{x:300, y:1970, width:100, height:90},
// Muros y huesos izquierda 
{x:300, y:1640, width:240, height:220},
// Muros y huesos izquierda arriba
{x:300, y:970, width:240, height:220},
// Cactus arriba izquierda
{x:400, y:640, width:40, height:60},
// Muros Derecha
{x:3200, y:1320, width:140, height:100},
// Muros y Huesos centro
{x:1900, y:1700, width:540, height:400},
// Huesos Faltantes
{x:2450, y:1820, width:140, height:200},
// Muros centro
{x:1300, y:1760, width:350, height:200},
// Faltante grieta
{x:1200, y:1920, width:200, height:200},
// Grieta cerca del portal 
{x:2550, y:520, width:100, height:380},
// Grieta faltante
{x:2650, y:680, width:320, height:360},
// Grieta y muros abajo del anterior
{x:2650, y:1120, width:320, height:340},
// Muros arriba izquierda
{x:850, y:520, width:430, height:210},
// Cactus y muros izquierda
{x:650, y:620, width:210, height:360},
// Muros y grieta izquierda
{x:950, y:870, width:130, height:840},
// Muros faltante izquierda
{x:750, y:1170, width:130, height:440},
// Muros faltantes izquierda
{x:550, y:1400, width:130, height:140},
// Muros faltantes derecha
{x:1100, y:1120, width:100, height:140},
// Muros y huesos abajo del anterior
{x:1100, y:1490, width:190, height:150},
// Muro pequeño abajo
{x:1750, y:2220, width:130, height:140},
// Muros y cactus centro superior
{x:1540, y:620, width:440, height:140},
// Muros centro 
{x:2150, y:660, width:290, height:60},
// Muros centro ai
{x:1710, y:870, width:70, height:140},
// Muros centro ic
{x:1470, y:1060, width:130, height:40},
// Muros centro cd
{x:2150, y:870, width:130, height:100},
// Muros centro cd
{x:2400, y:1100, width:110, height:270},
// Muros ad
{x:2300, y:1390, width:110, height:70},
// Muros ac
{x:1750, y:1460, width:350, height:70},
// Muros ai
{x:1450, y:1340, width:190, height:70},
// Muros ai
{x:1550, y:1420, width:170, height:70},
// Muros pequeño
{x:2450, y:840, width:70, height:40},
// Muros pequeño
{x:750, y:2050, width:70, height:40},
// Lava pequeño
{x:3350, y:2450, width:70, height:40},



];

// ESTADO DE GAMEOVER //
var gameOverActive = false;

// VARIABLES GENERALES //
var TIC = 0; // -- Variable para el Sprite -- //
var Anim;