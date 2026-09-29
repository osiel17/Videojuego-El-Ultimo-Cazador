//*Clase Ave*//

class Ave {

    #Direccion = 1;

    constructor(IDpanel, x, y, velocidad, limite) {

        //* ---- POSICIÓN ---- *//
        this.posX = x;
        this.posY = y;
        this.vida = 1;

        this.posxInicial = x;
        this.posyInicial = y;

        //* ---- MOVIMIENTO ---- *//
        this.velocidad = velocidad;
        this.limite = limite;

        //* ---- IMÁGENES ---- *//

        // ARRIBA
        this.foto0 = new Image();
        this.foto0.src = "img/ave/ave-arriba.png";

        // DERECHA
        this.foto1 = new Image();
        this.foto1.src = "img/ave/ave-right.png";

        // ABAJO
        this.foto2 = new Image();
        this.foto2.src = "img/ave/ave-abajo.png";

        // IZQUIERDA
        this.foto3 = new Image();
        this.foto3.src = "img/ave/ave-left.png";

        //* ---- TAMAÑO ---- *//
        this.width = 80;
        this.height = 80;

        //* ---- PANEL ---- *//
        this.panel = document.getElementById(IDpanel);

        //*---- SONIDO DE LA AVE ----*//
        this.sound = new Audio('sounds/aguilasound.mp3');
        this.sound.volume = 0.5;

        this.intervaloSonido = setInterval(() => {
            this.sound.currentTime = 0;
            this.sound.play();
        }, 11000);
    }

    avanzar() {

        //* -------------------------------- *//
        //* -------- MOVIMIENTO ------------ *//
        //* -------------------------------- *//

        // DERECHA
        if (this.#Direccion == 1) {
            this.posX += this.velocidad;
        }

        // ABAJO
        if (this.#Direccion == 2) {
            this.posY += this.velocidad;
        }

        // IZQUIERDA
        if (this.#Direccion == 3) {
            this.posX -= this.velocidad;
        }

        // ARRIBA
        if (this.#Direccion == 0) {
            this.posY -= this.velocidad;
        }

        //* -------------------------------- *//
        //* --------- LÍMITES -------------- *//
        //* -------------------------------- *//

        // Límite derecho
        if (this.posX >= this.posxInicial + this.limite) {
            this.posX = this.posxInicial + this.limite;
            this.#Direccion = 3;
        }

        // Límite izquierdo
        if (this.posX <= this.posxInicial - this.limite) {
            this.posX = this.posxInicial - this.limite;
            this.#Direccion = 1;
        }

        // Límite inferior
        if (this.posY >= this.posyInicial + this.limite) {
            this.posY = this.posyInicial + this.limite;
            this.#Direccion = 0;
        }

        // Límite superior
        if (this.posY <= this.posyInicial - this.limite) {
            this.posY = this.posyInicial - this.limite;
            this.#Direccion = 2;
        }

        //* -------------------------------- *//
        //* ------ CAMBIO DIRECCIÓN -------- *//
        //* -------------------------------- *//

        if (
            Math.abs(this.posX - this.posxInicial) < 5 &&
            Math.abs(this.posY - this.posyInicial) < 5
        ) {

            this.posX = this.posxInicial;
            this.posY = this.posyInicial;

            this.#Direccion = Math.floor(Math.random() * 4);
        }

        //* -------------------------------- *//
        //* ----------- DIBUJAR ------------ *//
        //* -------------------------------- *//

        const ctx = this.panel.getContext('2d');

        let dibujarX = this.posX - camaraX;
        let dibujarY = this.posY - camaraY;

        // ARRIBA
        if (this.#Direccion == 0) {

            ctx.drawImage(
                this.foto0,
                dibujarX,
                dibujarY,
                this.width,
                this.height
            );
        }

        // DERECHA
        if (this.#Direccion == 1) {

            ctx.drawImage(
                this.foto1,
                dibujarX,
                dibujarY,
                this.width,
                this.height
            );
        }

        // ABAJO
        if (this.#Direccion == 2) {

            ctx.drawImage(
                this.foto2,
                dibujarX,
                dibujarY,
                this.width,
                this.height
            );
        }

        // IZQUIERDA
        if (this.#Direccion == 3) {

            ctx.drawImage(
                this.foto3,
                dibujarX,
                dibujarY,
                this.width,
                this.height
            );
        }
    }

    //
    // ------- FUNCIÓN COLISIÓN ------
    //
    colision(posX, posY, anchoP, altoP) {

        // HITBOX PLAYER
        let xPlayer = posX + 20;
        let yPlayer = posY + 20;
        let anchoPlayer = anchoP - 40;
        let altoPlayer = altoP - 40;

        // HITBOX AVE
        let xCriatura = this.posX + 20;
        let yCriatura = this.posY + 20;
        let anchoCriatura = this.width - 40;
        let altoCriatura = this.height - 40;

        // DETECTAR COLISIÓN
        if (
            xPlayer < xCriatura + anchoCriatura &&
            xPlayer + anchoPlayer > xCriatura &&
            yPlayer < yCriatura + altoCriatura &&
            yPlayer + altoPlayer > yCriatura
        ) {
            return 20;
        }
        else {
            return 0;
        }
    }
}