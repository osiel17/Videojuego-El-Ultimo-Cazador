//----- MOVIMIENTO DEL PERSONAJE CON TECLAS ------//
var incrUP=0;
var incrRIGHT=0;
var incrDOWN=0;
var incrLEFT=0;

//
//------- FUNCION MYG -------
//
function myG(event){

	// ATAQUE CON ESPADA - ESPACIO o J
    if (event.keyCode == 32 || event.keyCode == 74) {
        atacar();
    }


	if(event.keyCode==38 || event.keyCode == 87) {
		incrUP=15;
		incrDOWN = 0;
		incrLEFT = 0;
		incrRIGHT=0;
	}

	if(event.keyCode==39 || event.keyCode == 68) {
		incrRIGHT=15;
		incrUP = 0;
		incrDOWN = 0;
		incrLEFT = 0;
	}

	if(event.keyCode==40 || event.keyCode == 83) {
		incrDOWN=15;
		incrUP = 0;
		incrLEFT = 0;
		incrRIGHT=0;
	}

	if(event.keyCode==37 || event.keyCode == 65) {
		incrLEFT=15;
		incrUP = 0;
		incrDOWN = 0;
		incrRIGHT=0;
	}
}

//
// -------- FUNCION MYG2 -------
//
function myG2(event){
	if(event.keyCode==38 || event.keyCode == 87) incrUP=0
	if(event.keyCode==39 || event.keyCode == 68)  incrRIGHT=0
	if(event.keyCode==40 || event.keyCode == 83) incrDOWN=0
	if(event.keyCode==37 || event.keyCode == 65) incrLEFT=0
}
// EJECUTAR LAS FUNCIONES ANTERIORES //
window.onkeydown=myG;
window.onkeyup=myG2;