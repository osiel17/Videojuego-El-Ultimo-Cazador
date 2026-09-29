//
//-------- FUNCIÓN INICIO--------
//
function inicio(event)
{	
	anchoP;
	altoP;
	actualizarVida()
    configurarPanelesInicio()
}

//
//--------- FUNCIÓN ACTUALIZA ----------//
//

function Actualiza(){
	//console.log(posX,posY);
	//---- OBTENER CANVAS ------//
	const canvas = document.getElementById('panel');
	// Ancho y Alto del Canvas // 
	anchoBase=canvas.width;
	altoBase=canvas.height;
	const ctx = canvas.getContext('2d');
	// Dibujar fondo //
	ctx.drawImage(
    fondo,
    -camaraX,
    -camaraY,
    anchoMapa,
    altoMapa
);

// DIBUJAR OBSTACULOS
	/*
	ctx.strokeStyle = "yellow";
	ctx.lineWidth = 3;

	for (let i = 0; i < obstaculos.length; i++) {
    ctx.strokeRect(
        obstaculos[i].x - camaraX,
        obstaculos[i].y - camaraY,
        obstaculos[i].width,
        obstaculos[i].height
    );
}*/
	
	//-- Actualizar la posición del personaje
	let nuevaX = posX + incrRIGHT - incrLEFT;
	let nuevaY = posY + incrDOWN - incrUP;

	if (!colisionObstaculo(nuevaX, posY, anchoP, altoP)) {
		posX = nuevaX;
	}

	if (!colisionObstaculo(posX, nuevaY, anchoP, altoP)) {
		posY = nuevaY;
	}

	camaraX = posX - anchoBase / 2 + anchoP / 2;
	camaraY = posY - altoBase / 2 + altoP / 2;

	if(camaraX < 0) camaraX = 0;
	if(camaraY < 0) camaraY = 0;

	if(camaraX > anchoMapa - anchoBase){
		camaraX = anchoMapa - anchoBase;
	}

	if(camaraY > altoMapa - altoBase){
		camaraY = altoMapa - altoBase;
	}
	
	//-- Validar que el personaje no se salga del panel --//
	if(posX + anchoP > anchoMapa) posX = anchoMapa - anchoP;
	if(posX <= 0) posX = 0;

	if(posY + altoP > altoMapa) posY = altoMapa - altoP;
	if(posY <= 0) posY = 0;
	
	//
	//-- Dibujar Personaje --
	//
	let spriteActual;
		
	// DERECHA
	if(incrRIGHT > 0){
		stepsSound.play()
		spriteActual = moverDerecha;
		ultimaDireccion = 'derecha'
	}
	
	// IZQUIERDA
	else if(incrLEFT > 0){
		spriteActual = moverIzquierda;
		stepsSound.play()
		ultimaDireccion = 'izquierda'
	}
	
	// ARRIBA
	else if(incrUP > 0){
		spriteActual = moverArriba;
		stepsSound.play()
		ultimaDireccion = 'arriba'
	}

	// ABAJO
	else if(incrDOWN > 0){
		spriteActual = moverAbajo;
		stepsSound.play()
		ultimaDireccion= 'abajo'
	}
	else{
		if(ultimaDireccion == "derecha"){
			spriteActual = moverDerecha
		}
		else if (ultimaDireccion == "izquierda"){
			spriteActual =moverIzquierda;
		}
		else if (ultimaDireccion == 'arriba'){
			spriteActual = moverArriba;
		}
		else if (ultimaDireccion == "abajo"){
			spriteActual = moverAbajo;
		}
	}


	// JUGADOR HITBOX
	/*
	ctx.strokeStyle = 'blue';
	ctx.strokeRect(
	posX + 20 - camaraX,
    posY + 20 - camaraY,
    anchoP - 40,
    altoP - 40

);*/

	//
	// ---------- DIBUJAR PLAYER ----------
	//
	if(muriendo == true){
	ctx.drawImage(m3, posX - camaraX, posY - camaraY, anchoP, altoP);

	}
	else if(recibiendoDano == true){
		if(direccionDano == "derecha"){
			ctx.drawImage(dano1, posX - camaraX, posY - camaraY, anchoP, altoP);
		}
		else if(direccionDano == "izquierda"){
			ctx.drawImage(dano2, posX - camaraX, posY - camaraY, anchoP, altoP);
		}
		else if(direccionDano == "arriba"){
			ctx.drawImage(dano3, posX - camaraX, posY - camaraY, anchoP, altoP);
		}
		else if(direccionDano == "abajo"){
			ctx.drawImage(dano4, posX - camaraX, posY - camaraY, anchoP, altoP);
		}
	}
	else{
		let imagenPersonaje;

		if(incrRIGHT > 0 || incrLEFT > 0 || incrUP > 0 || incrDOWN > 0){
			imagenPersonaje = sprite(spriteActual, TIC);
		}
		else{
			imagenPersonaje = spriteActual[0];
		}

	if (atacando == true) {
   		 dibujarAtaque(ctx);
	}
	else {
		ctx.drawImage(
			imagenPersonaje,
			posX - camaraX,
			posY - camaraY,
			anchoP,
			altoP
		);
	}
	}
	//
	//----  CREAR CRIATURAS EN EL PANEL ----- //
	//
	for(let i = 0; i < criaturas.length;i++){
		criaturas[i].avanzar();
		const damage = criaturas[i].colision(posX,posY,anchoP,altoP);

		//
// ------- ATAQUE A CRIATURAS --------
//

if (atacando == true) {

    let espada = obtenerHitboxEspada();

    if (
        espadaGolpeaCriatura(espada, criaturas[i]) &&
        !criaturasGolpeadas.has(criaturas[i])
    ) {

        criaturasGolpeadas.add(criaturas[i]);

        if (criaturas[i].vida == undefined) {
            criaturas[i].vida = 1;
        }

        criaturas[i].vida -= danoEspada;

       if (criaturas[i].vida <= 0) {

    	//if (criaturas[i].esReina == true) {
        //invocarSerpientesReina();
   		// }

    	if (criaturas[i].intervaloSonido) {
        clearInterval(criaturas[i].intervaloSonido);
   		 }

   		 if (criaturas[i].sound) {
        criaturas[i].sound.pause();
 		}

		criaturas.splice(i, 1);
		i--;
		continue;
	}
    }
}

		
		// CRIATURA HITBOX
		/*
		ctx.strokeStyle = 'red';
		ctx.lineWidth = 2;

		ctx.strokeRect(
		criaturas[i].posX + 20 - camaraX,
    	criaturas[i].posY + 20 - camaraY,
   		criaturas[i].width - 40,
        criaturas[i].height - 40		
		);*/
	
	if (damage > 0){
	recibirDamage(damage);
	actualizarVida();
	}

	if (vida <= 0){
		gameOver();
	}
	}

	if (criaturas.length == 0) {
    	eliminarEnemigos();
	}

	ganarNivel(posX, posY);
	TIC ++;
}

window.addEventListener("load", inicio);