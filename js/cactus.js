// ------- Clase Cactus -------- //

class Cactus {
    constructor(IDpanel, x, y) {
        this.posX = x;
        this.posY = y;
        this.vida = 3;

        this.foto0 = new Image();
        this.foto0.src = "img/cactus/cactus-frente.png";

        this.width = 80;
        this.height = 80;

        this.panel = document.getElementById(IDpanel);
    }

    // 
    //-------- FUNCIÓN AVANZAR --------
    //
    avanzar() {
        const ctx = this.panel.getContext('2d');

        let dibujarX = this.posX - camaraX;
        let dibujarY = this.posY - camaraY;

        ctx.drawImage(
            this.foto0,
            dibujarX,
            dibujarY,
            this.width,
            this.height
        );
    }

    //
    // ------- FUNCIÓN COLISIÓN ------
    //
    colision(posX, posY, anchoP, altoP) {

        // HITBOX DEL PERSONAJE
        let xPlayer = posX + 20;
        let yPlayer = posY + 20;
        let anchoPlayer = anchoP - 40;
        let altoPlayer = altoP - 40;

        // HITBOX CACTUS
        let xCriatura = this.posX + 15;
        let yCriatura = this.posY + 15;
        let anchoCriatura = this.width - 30;
        let altoCriatura = this.height - 30;

        // DETECTAR COLISIÓN
        if (
            xPlayer < xCriatura + anchoCriatura &&
            xPlayer + anchoPlayer > xCriatura &&
            yPlayer < yCriatura + altoCriatura &&
            yPlayer + altoPlayer > yCriatura
        ) {
            return 10;
        }
        else {
            return 0;
        }
    }
}