//*Clase miniFantasma*//

class miniFantasma {

    #Direccion = 1;

    constructor(IDpanel, x, y, velocidad) {

        this.posX = x;
        this.posY = y;

        this.velocidad = velocidad;
        this.vida = 9;

        //* -------- IMÁGENES -------- *//

        this.foto0 = new Image();
        this.foto0.src = "img/minifantasma/fantasma-izquierda.png";

        this.foto1 = new Image();
        this.foto1.src = "img/minifantasma/fantasma-derecha.png";

        this.foto2 = new Image();
        this.foto2.src = "img/minifantasma/fantasma-abajo.png";

        this.foto3 = new Image();
        this.foto3.src = "img/minifantasma/fantasma-arriba.png";

        this.foto4 = new Image();
        this.foto4.src = "img/minifantasma/fantasma-arribaderecha.png";

        this.foto5 = new Image();
        this.foto5.src = "img/minifantasma/fantasma-arribaizquierda.png";

        this.foto6 = new Image();
        this.foto6.src = "img/minifantasma/fantasma-abajoderecha.png";

        this.foto7 = new Image();
        this.foto7.src = "img/minifantasma/fantasma-abajoizquierda.png";

        //* -------- TAMAÑO -------- *//

        this.width = 90;
        this.height = 90;

        //* -------- PANEL -------- *//

        this.panel = document.getElementById(IDpanel);

        //*---- SONIDO ----*//

        this.sound = new Audio('sounds/mini-fantasmasound.mp3');
        this.sound.volume = 0.5;

        this.intervaloSonido = setInterval(() => {

            this.sound.currentTime = 0;
            this.sound.play();

        }, 3000);
    }

    avanzar() {

        // Cambiar dirección aleatoria

        if (Math.floor(Math.random() * 90) == 0) {
            this.#CambiarDireccion();
        }

        // USAR EL MAPA GRANDE
        let anchoPanel = anchoMapa;
        let altoPanel = altoMapa;

        //* -------- MOVIMIENTO -------- *//

        // DERECHA
        if (this.#Direccion == 1) {
            this.posX += this.velocidad;
        }

        // ARRIBA
        else if (this.#Direccion == 3) {
            this.posY -= this.velocidad;
        }

        // IZQUIERDA
        else if (this.#Direccion == 0) {
            this.posX -= this.velocidad;
        }

        // ABAJO
        else if (this.#Direccion == 2) {
            this.posY += this.velocidad;
        }

        // ARRIBA DERECHA
        else if (this.#Direccion == 4) {
            this.posX += this.velocidad;
            this.posY -= this.velocidad;
        }

        // ARRIBA IZQUIERDA
        else if (this.#Direccion == 5) {
            this.posX -= this.velocidad;
            this.posY -= this.velocidad;
        }

        // ABAJO DERECHA
        else if (this.#Direccion == 6) {
            this.posX += this.velocidad;
            this.posY += this.velocidad;
        }

        // ABAJO IZQUIERDA
        else if (this.#Direccion == 7) {
            this.posX -= this.velocidad;
            this.posY += this.velocidad;
        }

        //* -------- COLISIONES MAPA -------- *//

        if (this.posX >= anchoPanel - this.width) {
            this.posX = anchoPanel - this.width;
            this.#Direccion = 0;
        }

        else if (this.posY >= altoPanel - this.height) {
            this.posY = altoPanel - this.height;
            this.#Direccion = 3;
        }

        else if (this.posX <= 0) {
            this.posX = 0;
            this.#Direccion = 1;
        }

        else if (this.posY <= 0) {
            this.posY = 0;
            this.#Direccion = 2;
        }

        //* -------- DIBUJAR -------- *//

        const ctx = this.panel.getContext('2d');

        let dibujarX = this.posX - camaraX;
        let dibujarY = this.posY - camaraY;

        if (this.#Direccion == 0)
            ctx.drawImage(this.foto0, dibujarX, dibujarY, this.width, this.height);

        if (this.#Direccion == 1)
            ctx.drawImage(this.foto1, dibujarX, dibujarY, this.width, this.height);

        if (this.#Direccion == 2)
            ctx.drawImage(this.foto2, dibujarX, dibujarY, this.width, this.height);

        if (this.#Direccion == 3)
            ctx.drawImage(this.foto3, dibujarX, dibujarY, this.width, this.height);

        if (this.#Direccion == 4)
            ctx.drawImage(this.foto4, dibujarX, dibujarY, this.width, this.height);

        if (this.#Direccion == 5)
            ctx.drawImage(this.foto5, dibujarX, dibujarY, this.width, this.height);

        if (this.#Direccion == 6)
            ctx.drawImage(this.foto6, dibujarX, dibujarY, this.width, this.height);

        if (this.#Direccion == 7)
            ctx.drawImage(this.foto7, dibujarX, dibujarY, this.width, this.height);
    }

    // Cambiar dirección
    #CambiarDireccion() {
        this.#Direccion = Math.floor(Math.random() * 8);
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

        // HITBOX MINI FANTASMA

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