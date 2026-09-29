//*Clase Fantasma*//
class Fantasma {

    #Direccion = 1;

    constructor(IDpanel, x, y, velocidad) {

        this.posX = x;
        this.posY = y;
        this.velocidad = velocidad;
        this.vida= 2;

        this.foto0 = new Image();
        this.foto0.src = "img/fantasma/fantasma-izquierda.png";

        this.foto1 = new Image();
        this.foto1.src = "img/fantasma/fantasma-derecha.png";

        this.foto2 = new Image();
        this.foto2.src = "img/fantasma/fantasma-abajo.png";

        this.foto3 = new Image();
        this.foto3.src = "img/fantasma/fantasma-arriba.png";

        this.width = 80;
        this.height = 80;

        this.panel = document.getElementById(IDpanel);

        this.sound = new Audio('sounds/fantasma-sound.mp3');
        this.sound.volume = 0.5;

        this.intervaloSonido = setInterval(() => {
            this.sound.currentTime = 0;
            this.sound.play();
        }, 6000);
    }

    avanzar() {

        if (Math.floor(Math.random() * 40) == 0) {
            this.#CambiarDireccion();
        }

        let limiteAncho = anchoMapa;
        let limiteAlto = altoMapa;

        let nuevaX = this.posX;
        let nuevaY = this.posY;

        // DERECHA
        if (this.#Direccion == 1) {
            nuevaX += this.velocidad;
        }

        // ARRIBA
        if (this.#Direccion == 3) {
            nuevaY -= this.velocidad;
        }

        // IZQUIERDA
        if (this.#Direccion == 0) {
            nuevaX -= this.velocidad;
        }

        // ABAJO
        if (this.#Direccion == 2) {
            nuevaY += this.velocidad;
        }

        // Revisar si choca con obstáculo invisible
        if (
            !colisionObstaculoCriatura(
                nuevaX,
                nuevaY,
                this.width,
                this.height
            )
        ) {
            this.posX = nuevaX;
            this.posY = nuevaY;
        }
        else {
            this.#CambiarDireccion();
        }

        // Límites del mapa
        if (this.posX >= limiteAncho - this.width) {
            this.posX = limiteAncho - this.width;
            this.#CambiarDireccion();
        }

        if (this.posY >= limiteAlto - this.height) {
            this.posY = limiteAlto - this.height;
            this.#CambiarDireccion();
        }

        if (this.posX <= 0) {
            this.posX = 0;
            this.#CambiarDireccion();
        }

        if (this.posY <= 0) {
            this.posY = 0;
            this.#CambiarDireccion();
        }

        // Dibujar con cámara
        const ctx = this.panel.getContext('2d');

        let dibujarX = this.posX - camaraX;
        let dibujarY = this.posY - camaraY;

        if (this.#Direccion == 0) {
            ctx.drawImage(this.foto0, dibujarX, dibujarY, this.width, this.height);
        }

        if (this.#Direccion == 1) {
            ctx.drawImage(this.foto1, dibujarX, dibujarY, this.width, this.height);
        }

        if (this.#Direccion == 2) {
            ctx.drawImage(this.foto2, dibujarX, dibujarY, this.width, this.height);
        }

        if (this.#Direccion == 3) {
            ctx.drawImage(this.foto3, dibujarX, dibujarY, this.width, this.height);
        }
    }

    #CambiarDireccion() {
        this.#Direccion = Math.floor(Math.random() * 4);
    }

    colision(posX, posY, anchoP, altoP) {

        let xPlayer = posX + 20;
        let yPlayer = posY + 20;
        let anchoPlayer = anchoP - 40;
        let altoPlayer = altoP - 40;

        let xCriatura = this.posX + 20;
        let yCriatura = this.posY + 20;
        let anchoCriatura = this.width - 40;
        let altoCriatura = this.height - 40;

        if (
            xPlayer < xCriatura + anchoCriatura &&
            xPlayer + anchoPlayer > xCriatura &&
            yPlayer < yCriatura + altoCriatura &&
            yPlayer + altoPlayer > yCriatura
        ) {
            return 15;
        }
        else {
            return 0;
        }
    }
}