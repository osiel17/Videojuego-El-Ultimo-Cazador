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
        posX >= 1910 &&
        posX <= 2040 &&
        posY >= 110 &&
        posY <= 200
    ) {
        localStorage.setItem("progresoJuego", 2);

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
function configurarPanelesInicio() {

    const panelInstrucciones = document.getElementById('panel-instrucciones');
    const panelObjetivo = document.getElementById('panel-objetivo');

    const botonContinuar = document.getElementById('continuar1');
    const botonComenzar = document.getElementById('comenzar-juego');

    const botonReintentar = document.getElementById('restart-js');
    const botonMenuGameOver = document.getElementById('menu-js');

    const botonMenuVictoria = document.getElementById('menu-victoria');
    const nextLevelButton = document.getElementById('nextlevel-js');

    // Verificar si algún elemento no existe
    if (
        panelInstrucciones == null ||
        panelObjetivo == null ||
        botonContinuar == null ||
        botonComenzar == null
    ) {
        console.error("Error: No se encontraron elementos de los paneles iniciales.");
        console.log("panelInstrucciones:", panelInstrucciones);
        console.log("panelObjetivo:", panelObjetivo);
        console.log("botonContinuar:", botonContinuar);
        console.log("botonComenzar:", botonComenzar);
        return;
    }

    //
    // Botón continuar instrucciones
    //
    botonContinuar.addEventListener("click", () => {
        panelInstrucciones.style.display = "none";
        panelObjetivo.style.display = "flex";
    });

    //
    // Botón comenzar juego
    //
    botonComenzar.addEventListener("click", () => {
        panelObjetivo.style.display = "none";
        Anim = setInterval(Actualiza, 50);
    });

    //
    // Botón reintentar
    //
    if (botonReintentar) {
        botonReintentar.addEventListener("click", () => {
            window.location.reload();
        });
    }

    //
    // Botón volver al menú desde Game Over
    //
    if (botonMenuGameOver) {
        botonMenuGameOver.addEventListener("click", () => {
            window.location.href = "menu-principal.html";
        });
    }

    //
    // Botón volver al menú desde Victoria
    //
    if (botonMenuVictoria) {
        botonMenuVictoria.addEventListener("click", () => {
            window.location.href = "menu-principal.html";
        });
    }

    //
    // Botón siguiente nivel
    //
    if (nextLevelButton) {
        nextLevelButton.addEventListener("click", () => {
            window.location.href = "nivel2.html";
        });
    }
}