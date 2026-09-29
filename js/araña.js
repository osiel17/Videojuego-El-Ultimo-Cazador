class Arana {

    constructor(IDpanel, x, y) {

        //* ---- POSICIÓN ---- *//
        this.posX = x;
        this.posY = y;
        this.vida = 3;

        //* ---- DESTINO ---- *//
        this.destinoX = x;
        this.destinoY = y;

        //* ---- MOVIMIENTO ---- *//
        this.incX = 0;
        this.incY = 0;

        this.moviendo = false;
        this.espera = 0;

        //* ---- DIRECCIÓN ---- *//
        this.direccion = 1;

        //* -------------------------------- *//
        //* -------- IMÁGENES -------------- *//
        //* -------------------------------- *//

        // IZQUIERDA
        this.foto0 = new Image();
        this.foto0.src = "img/arana/arana-izquierda.png";

        // DERECHA
        this.foto1 = new Image();
        this.foto1.src = "img/arana/arana-derecha.png";

        // ABAJO
        this.foto2 = new Image();
        this.foto2.src = "img/arana/arana-abajo.png";

        // ARRIBA
        this.foto3 = new Image();
        this.foto3.src = "img/arana/arana-arriba.png";

        // ARRIBA DERECHA
        this.foto4 = new Image();
        this.foto4.src = "img/arana/arana-arribaderecha.png";

        // ARRIBA IZQUIERDA
        this.foto5 = new Image();
        this.foto5.src = "img/arana/arana-arribaizquierda.png";

        // ABAJO DERECHA
        this.foto6 = new Image();
        this.foto6.src = "img/arana/arana-abajoderecha.png";

        // ABAJO IZQUIERDA
        this.foto7 = new Image();
        this.foto7.src = "img/arana/arana-abajoizquierda.png";

        //* ---- TAMAÑO ---- *//
        this.width = 80;
        this.height = 80;

        //* ---- PANEL ---- *//
        this.panel = document.getElementById(IDpanel);

        //*---- SONIDO DE LA ARAÑA ----*//
        this.sound = new Audio('sounds/aranasound.mp3');
        this.sound.volume = 0.5;

        this.intervaloSonido = setInterval(() => {
            this.sound.currentTime = 0;
            this.sound.play();
        }, 5000);
    }

    avanzar() {

        const ctx = this.panel.getContext('2d');

        // USAR EL MAPA GRANDE
        let anchoPanel = anchoMapa;
        let altoPanel = altoMapa;

        //* -------------------------------- *//
        //* ---------- QUIETA -------------- *//
        //* -------------------------------- *//

        if (!this.moviendo) {

            this.espera++;

            if (this.espera >= 50) {

                //* ---- DESTINO ALEATORIO ---- *//

                this.destinoX =
                    Math.floor(
                        Math.random() * (anchoPanel - this.width)
                    );

                this.destinoY =
                    Math.floor(
                        Math.random() * (altoPanel - this.height)
                    );

                //* ---- DISTANCIAS ---- *//

                let distanciaX =
                    this.destinoX - this.posX;

                let distanciaY =
                    this.destinoY - this.posY;

                //* ---- INCREMENTOS ---- *//

                this.incX = distanciaX / 20;
                this.incY = distanciaY / 20;

                //* -------------------------------- *//
                //* ------ DETECTAR DIRECCIÓN ------ *//
                //* -------------------------------- *//

                // DERECHA
                if (this.incX > 0 && this.incY == 0) {
                    this.direccion = 1;
                }

                // IZQUIERDA
                else if (this.incX < 0 && this.incY == 0) {
                    this.direccion = 0;
                }

                // ABAJO
                else if (this.incX == 0 && this.incY > 0) {
                    this.direccion = 2;
                }

                // ARRIBA
                else if (this.incX == 0 && this.incY < 0) {
                    this.direccion = 3;
                }

                // ARRIBA DERECHA
                else if (this.incX > 0 && this.incY < 0) {
                    this.direccion = 4;
                }

                // ARRIBA IZQUIERDA
                else if (this.incX < 0 && this.incY < 0) {
                    this.direccion = 5;
                }

                // ABAJO DERECHA
                else if (this.incX > 0 && this.incY > 0) {
                    this.direccion = 6;
                }

                // ABAJO IZQUIERDA
                else if (this.incX < 0 && this.incY > 0) {
                    this.direccion = 7;
                }

                //* ---- ACTIVAR MOVIMIENTO ---- *//

                this.moviendo = true;
                this.espera = 0;
            }
        }

        //* -------------------------------- *//
        //* -------- MOVIMIENTO ------------ *//
        //* -------------------------------- *//

        else {

            this.posX += this.incX;
            this.posY += this.incY;

            //* ---- LLEGÓ ---- *//

            if (
                Math.abs(this.posX - this.destinoX) < 5 &&
                Math.abs(this.posY - this.destinoY) < 5
            ) {

                this.posX = this.destinoX;
                this.posY = this.destinoY;

                this.moviendo = false;
            }
        }

        //* -------------------------------- *//
        //* -------- DIBUJAR --------------- *//
        //* -------------------------------- *//

        let dibujarX = this.posX - camaraX;
        let dibujarY = this.posY - camaraY;

        if (this.direccion == 0) {

            ctx.drawImage(
                this.foto0,
                dibujarX,
                dibujarY,
                this.width,
                this.height
            );
        }

        else if (this.direccion == 1) {

            ctx.drawImage(
                this.foto1,
                dibujarX,
                dibujarY,
                this.width,
                this.height
            );
        }

        else if (this.direccion == 2) {

            ctx.drawImage(
                this.foto2,
                dibujarX,
                dibujarY,
                this.width,
                this.height
            );
        }

        else if (this.direccion == 3) {

            ctx.drawImage(
                this.foto3,
                dibujarX,
                dibujarY,
                this.width,
                this.height
            );
        }

        else if (this.direccion == 4) {

            ctx.drawImage(
                this.foto4,
                dibujarX,
                dibujarY,
                this.width,
                this.height
            );
        }

        else if (this.direccion == 5) {

            ctx.drawImage(
                this.foto5,
                dibujarX,
                dibujarY,
                this.width,
                this.height
            );
        }

        else if (this.direccion == 6) {

            ctx.drawImage(
                this.foto6,
                dibujarX,
                dibujarY,
                this.width,
                this.height
            );
        }

        else if (this.direccion == 7) {

            ctx.drawImage(
                this.foto7,
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

        // HITBOX PERSONAJE

        let xPlayer = posX + 20;
        let yPlayer = posY + 20;

        let anchoPlayer = anchoP - 40;
        let altoPlayer = altoP - 40;

        // HITBOX ARAÑA

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
            return 30;
        }

        else {
            return 0;
        }
    }
}