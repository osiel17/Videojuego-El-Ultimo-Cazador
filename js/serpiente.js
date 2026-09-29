//* -------- CLASE SERPIENTE -------- *//
class Serpiente {

    #Direccion = 1;

    constructor(IDpanel, x, y, velocidad){

        this.panel = document.getElementById(IDpanel);

        this.velocidad = velocidad;

        // TAMAÑO
        this.width = 60;
        this.height = 60;

        // VIDA
        this.vida = 1;

        // ESPACIO ENTRE SEGMENTOS
        this.espacio = 40;

        // POSICIÓN PRINCIPAL PARA QUE EL SISTEMA DE ATAQUE LA DETECTE
        this.posX = x;
        this.posY = y;

        // -------- IMÁGENES --------

        // CABEZAS
        this.cabezaDerecha = new Image();
        this.cabezaDerecha.src = "img/serpiente/cabeza-derecha.png";

        this.cabezaIzquierda = new Image();
        this.cabezaIzquierda.src = "img/serpiente/cabeza-izquierda.png";

        this.cabezaArriba = new Image();
        this.cabezaArriba.src = "img/serpiente/cabeza-arriba.png";

        this.cabezaAbajo = new Image();
        this.cabezaAbajo.src = "img/serpiente/cabeza-abajo.png";

        // CUERPO
        this.cuerpo = new Image();
        this.cuerpo.src = "img/serpiente/cuerpo.png";

        // COLAS
        this.colaDerecha = new Image();
        this.colaDerecha.src = "img/serpiente/cola-derecha.png";

        this.colaIzquierda = new Image();
        this.colaIzquierda.src = "img/serpiente/cola-izquierda.png";

        this.colaArriba = new Image();
        this.colaArriba.src = "img/serpiente/cola-arriba.png";

        this.colaAbajo = new Image();
        this.colaAbajo.src = "img/serpiente/cola-abajo.png";

        //*---- SONIDO ----*//
        this.sound = new Audio('sounds/snakesound.mp3');
        this.sound.volume = 0.5;

        this.intervaloSonido = setInterval(() => {

            this.sound.currentTime = 0;
            this.sound.play();

        }, 4000);

        //
        // -------- SEGMENTOS --------
        //
        this.segmentos = [];

        for(let i = 0; i < 7; i++){

            this.segmentos.push({
                x: x - (i * this.espacio),
                y: y
            });
        }
    }

    avanzar(){

        //
        // CAMBIAR DIRECCIÓN
        //
        if(Math.floor(Math.random() * 40) == 0){
            this.#CambiarDireccion();
        }

        //
        // CABEZA ACTUAL
        //
        let cabeza = this.segmentos[0];

        //
        // NUEVA POSICIÓN TENTATIVA
        //
        let nuevaX = cabeza.x;
        let nuevaY = cabeza.y;

        if(this.#Direccion == 0){
            nuevaX -= this.velocidad;
        }

        if(this.#Direccion == 1){
            nuevaX += this.velocidad;
        }

        if(this.#Direccion == 2){
            nuevaY += this.velocidad;
        }

        if(this.#Direccion == 3){
            nuevaY -= this.velocidad;
        }

        //
        // REVISAR OBSTÁCULOS ANTES DE MOVER
        //
        if (
            colisionObstaculoCriatura(
                nuevaX,
                nuevaY,
                this.width,
                this.height
            )
        ) {
            this.#CambiarDireccion();
            this.#dibujar();

            // Actualizar posX y posY aunque no se mueva
            this.posX = this.segmentos[0].x;
            this.posY = this.segmentos[0].y;

            return;
        }

        //
        // POSICIÓN ANTERIOR CABEZA
        //
        let anteriorX = cabeza.x;
        let anteriorY = cabeza.y;

        //
        // MOVER CABEZA
        //
        cabeza.x = nuevaX;
        cabeza.y = nuevaY;

        //
        // MOVER CUERPO
        //
        for(let i = 1; i < this.segmentos.length; i++){

            let dx = anteriorX - this.segmentos[i].x;
            let dy = anteriorY - this.segmentos[i].y;

            let distancia = Math.sqrt(dx * dx + dy * dy);

            if(distancia > this.espacio){

                this.segmentos[i].x +=
                    (dx / distancia) * this.velocidad;

                this.segmentos[i].y +=
                    (dy / distancia) * this.velocidad;
            }

            anteriorX = this.segmentos[i].x;
            anteriorY = this.segmentos[i].y;
        }

        //
        // LÍMITES DEL MAPA
        //
        let anchoPanel = anchoMapa;
        let altoPanel = altoMapa;

        if(cabeza.x <= 0){
            cabeza.x = 0;
            this.#Direccion = 1;
        }

        if(cabeza.x >= anchoPanel - this.width){
            cabeza.x = anchoPanel - this.width;
            this.#Direccion = 0;
        }

        if(cabeza.y <= 0){
            cabeza.y = 0;
            this.#Direccion = 2;
        }

        if(cabeza.y >= altoPanel - this.height){
            cabeza.y = altoPanel - this.height;
            this.#Direccion = 3;
        }

        //
        // ACTUALIZAR POSICIÓN GENERAL PARA EL SISTEMA DE ATAQUE
        //
        this.posX = this.segmentos[0].x;
        this.posY = this.segmentos[0].y;

        //
        // DIBUJAR
        //
        this.#dibujar();
    }

    //
    // -------- DIBUJAR --------
    //
    #dibujar(){

        const ctx = this.panel.getContext('2d');

        //
        // CABEZA
        //
        let imgCabeza;

        if(this.#Direccion == 0){
            imgCabeza = this.cabezaIzquierda;
        }

        if(this.#Direccion == 1){
            imgCabeza = this.cabezaDerecha;
        }

        if(this.#Direccion == 2){
            imgCabeza = this.cabezaAbajo;
        }

        if(this.#Direccion == 3){
            imgCabeza = this.cabezaArriba;
        }

        //
        // DIBUJAR CABEZA
        //
        ctx.drawImage(
            imgCabeza,
            this.segmentos[0].x - camaraX,
            this.segmentos[0].y - camaraY,
            this.width,
            this.height
        );

        //
        // CUERPO
        //
        for(let i = 1; i < this.segmentos.length - 1; i++){

            ctx.drawImage(
                this.cuerpo,
                this.segmentos[i].x - camaraX,
                this.segmentos[i].y - camaraY,
                this.width,
                this.height
            );
        }

        //
        // COLA
        //
        let imgCola;

        if(this.#Direccion == 0){
            imgCola = this.colaIzquierda;
        }

        if(this.#Direccion == 1){
            imgCola = this.colaDerecha;
        }

        if(this.#Direccion == 2){
            imgCola = this.colaAbajo;
        }

        if(this.#Direccion == 3){
            imgCola = this.colaArriba;
        }

        let ultima = this.segmentos[this.segmentos.length - 1];

        ctx.drawImage(
            imgCola,
            ultima.x - camaraX,
            ultima.y - camaraY,
            this.width,
            this.height
        );
    }

    //
    // -------- CAMBIAR DIRECCIÓN --------
    //
    #CambiarDireccion(){
        this.#Direccion = Math.floor(Math.random() * 4);
    }

    //
    // -------- COLISIÓN CON JUGADOR --------
    //
    colision(posX, posY, anchoP, altoP){

        for(let i = 0; i < this.segmentos.length; i++){

            let xCriatura = this.segmentos[i].x + 15;
            let yCriatura = this.segmentos[i].y + 15;

            let anchoCriatura = this.width - 30;
            let altoCriatura = this.height - 30;

            let xPlayer = posX + 20;
            let yPlayer = posY + 20;

            let anchoPlayer = anchoP - 40;
            let altoPlayer = altoP - 40;

            if(
                xPlayer < xCriatura + anchoCriatura &&
                xPlayer + anchoPlayer > xCriatura &&
                yPlayer < yCriatura + altoCriatura &&
                yPlayer + altoPlayer > yCriatura
            ){
                return 20;
            }
        }

        return 0;
    }
}