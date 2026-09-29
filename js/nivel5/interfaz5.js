//
// ----------- FUNCIÓN GAMEOVER --------
//
function gameOver() {

    if (gameOverActive == true) {
        return;
    }

    gameOverActive = true;
    muriendo = true;

    incrUP = 0;
    incrDOWN = 0;
    incrLEFT = 0;
    incrRIGHT = 0;

    gameOverSound.play();

    setTimeout(() => {

        const panelGameOver = document.getElementById('mostrar-gameover');

        if (panelGameOver) {
            panelGameOver.style.display = "flex";
        }

        for (let i = 0; i < criaturas.length; i++) {

            if (criaturas[i].intervaloSonido) {
                clearInterval(criaturas[i].intervaloSonido);
            }

            if (criaturas[i].sound) {
                criaturas[i].sound.pause();
            }
        }

        clearInterval(Anim);

    }, 600);
}

//
// -------- FUNCIÓN GANAR NIVEL --------
//
function ganarNivel(posX, posY) {

    if (
        posX >= 3010 &&
        posX <= 3260 &&
        posY >= 170 &&
        posY <= 370 &&
        cazadorDorado == true && 
        enemigosEliminados == true
    ) {
        localStorage.setItem("progresoJuego", 6);

        const panelVictoria = document.getElementById('panel-victoriajs');

        if (panelVictoria) {
            panelVictoria.style.display = 'flex';
        }

        victorySound.play();

        clearInterval(Anim);
    } 
}

//
// -------- CONFIGURAR PANELES --------
//
//
// -------- CONFIGURAR PANELES --------
//
//
// -------- CONFIGURAR PANELES --------
//
function configurarPanelesInicio() {

    const panelObjetivo = document.getElementById('panel-objetivo');
    const panelMejoras = document.getElementById('panel-mejoras');

    const botonComenzar = document.getElementById('comenzar-juego');
    const botonContinuarMejoras = document.getElementById('continuar-mejoras');

    const botonReintentar = document.getElementById('restart-js');
    const botonMenuGameOver = document.getElementById('menu-js');

    const botonMenuVictoria = document.getElementById('menu-victoria');
    const nextLevelButton = document.getElementById('nextlevel-js');

    //
    // MOSTRAR PANEL OBJETIVO AL INICIO DEL NIVEL
    //
    if (panelObjetivo) {
        panelObjetivo.style.display = "flex";
    }

    //
    // BOTÓN COMENZAR
    // OCULTA OBJETIVO Y MUESTRA MEJORAS
    //
    if (botonComenzar) {
        botonComenzar.addEventListener("click", () => {

            if (panelObjetivo) {
                panelObjetivo.style.display = "none";
            }

            if (panelMejoras) {
                panelMejoras.style.display = "flex";
            } 
            else {
                Anim = setInterval(Actualiza, 50);
            }

        });
    }

    //
    // BOTÓN CONTINUAR DESDE MEJORAS
    // OCULTA MEJORAS E INICIA EL JUEGO
    //
    if (botonContinuarMejoras) {
        botonContinuarMejoras.addEventListener("click", () => {

            if (panelMejoras) {
                panelMejoras.style.display = "none";
            }

            Anim = setInterval(Actualiza, 50);

        });
    }

    //
    // BOTÓN REINTENTAR
    //
    if (botonReintentar) {
        botonReintentar.addEventListener("click", () => {
            window.location.reload();
        });
    }

    //
    // BOTÓN VOLVER AL MENÚ DESDE GAME OVER
    //
    if (botonMenuGameOver) {
        botonMenuGameOver.addEventListener("click", () => {
            window.location.href = "menu-principal.html";
        });
    }

    //
    // BOTÓN VOLVER AL MENÚ DESDE VICTORIA
    //
    if (botonMenuVictoria) {
        botonMenuVictoria.addEventListener("click", () => {
            window.location.href = "menu-principal.html";
        });
    }

    //
    // BOTÓN SIGUIENTE NIVEL
    //
    if (nextLevelButton) {
        nextLevelButton.addEventListener("click", () => {
            window.location.href = "nivel6.html";
        });
    }
}