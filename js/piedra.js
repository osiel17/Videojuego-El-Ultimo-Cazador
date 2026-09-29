//*------ Clase Piedra ------*//
class Piedra {

    // DIRECCIÓN HACIA ABAJO
    #Direccion = 3;

    constructor(IDpanel, x, y, velocidad) {

        // POSICIÓN
        this.posX = x;
        this.posY = y;
        this.vida = 10;

        // VELOCIDAD
        this.velocidad = velocidad;

        // IMAGEN

        this.foto3 = new Image();
        this.foto3.src = "img/piedra/piedra.png";

        // TAMAÑO
        this.width = 90;
        this.height = 80;

        // PANEL
        this.panel = document.getElementById(IDpanel);

        // SONIDO
        //this.sound = new Audio('sounds/piedrasound.mp3');
        //this.sound.volume = 0.5;
    }

    //
    // -------- AVANZAR --------
    //
    avanzar() {
        
        

        //
        // MOVIMIENTO HACIA ABAJO
        //
        this.posY += this.velocidad;
        //this.sound.play();

        //
        // OPCIONAL: si cae fuera del mapa, vuelve arriba
        //
        if (this.posY > altoMapa && Math.floor(Math.random()*10 == 0)== 0) {
            this.posY = -this.height;
        }

        //
        // DIBUJAR CON CÁMARA
        //
        const ctx = this.panel.getContext('2d');

        let dibujarX = this.posX - camaraX;
        let dibujarY = this.posY - camaraY;

        ctx.drawImage(
            this.foto3,
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

        //
        // HITBOX PLAYER
        //
        let xPlayer = posX + 20;
        let yPlayer = posY + 20;

        let anchoPlayer = anchoP - 40;
        let altoPlayer = altoP - 40;

        //
        // HITBOX PIEDRA
        //
        let xCriatura = this.posX + 20;
        let yCriatura = this.posY + 20;

        let anchoCriatura = this.width - 40;
        let altoCriatura = this.height - 40;

        //
        // DETECTAR COLISIÓN
        //
        if (
            xPlayer < xCriatura + anchoCriatura &&
            xPlayer + anchoPlayer > xCriatura &&
            yPlayer < yCriatura + altoCriatura &&
            yPlayer + altoPlayer > yCriatura
        ) {
            return 100;
        }
        else {
            return 0;
        }
    }
}