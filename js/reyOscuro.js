//* -------- CLASE REY OSCURO -------- *//
class ReyOscuro {

    constructor(IDpanel, x, y, velocidad) {

        this.panel = document.getElementById(IDpanel);

        this.posX = x;
        this.posY = y;

        //
        // VELOCIDAD DEL JEFE
        //
        this.velocidadBase = velocidad + 1.5;
        this.velocidad = this.velocidadBase;

        //
        // TAMAÑO DEL JEFE
        //
        this.width = 220;
        this.height = 220;

        //
        // VIDA DEL JEFE
        //
        this.vidaMaxima = 3500;
        this.vida = this.vidaMaxima;

        //
        // DAÑO POR CONTACTO
        //
        this.danoContacto = 35;

        //
        // IDENTIFICADOR DE JEFE FINAL
        //
        this.esJefeFinal = true;

        //
        // DIRECCIÓN Y SPRITES
        //
        this.direccion = "abajo";

        this.moverDerecha = [];
        this.moverIzquierda = [];
        this.moverArriba = [];
        this.moverAbajo = [];

        this.crearSprites("d", this.moverDerecha);
        this.crearSprites("i", this.moverIzquierda);
        this.crearSprites("a", this.moverArriba);
        this.crearSprites("h", this.moverAbajo);

        //
        // CONTADORES
        //
        this.tiempoInvocacion = 0;
        this.tiempoAtaqueEspecial = 0;
        this.tiempoSprite = 0;

        //
        // ATAQUES ESPECIALES
        //
        this.ataques = [];
        this.cicloAtaque = 0;

        //
        // FASE FINAL
        //
        this.faseFinal = false;

        //
        // SONIDO DEL REY OSCURO
        //
        this.sonidoRisa = new Audio("sounds/risarey.mp3");
        this.sonidoRisa.volume = 0.6;
        this.tiempoRisa = 0;
        this.frecuenciaRisa = 260;
    }

    //
    // CREAR SPRITES DEL JEFE
    //
    crearSprites(prefijo, array) {

        for (let i = 0; i < 4; i++) {

            let img = new Image();

            img.src = `img/reyoscuro/${prefijo}${i}.png`;

            array.push(img);
        }
    }

    //
    // OBTENER SPRITE ACTUAL
    //
    obtenerSpriteActual() {

        let arrayActual;

        if (this.direccion == "derecha") {
            arrayActual = this.moverDerecha;
        }
        else if (this.direccion == "izquierda") {
            arrayActual = this.moverIzquierda;
        }
        else if (this.direccion == "arriba") {
            arrayActual = this.moverArriba;
        }
        else {
            arrayActual = this.moverAbajo;
        }

        //
        // SPRITE MÁS RÁPIDO
        //
        let indice = Math.floor(this.tiempoSprite / 3) % arrayActual.length;

        return arrayActual[indice];
    }

    //
    // FUNCIÓN PRINCIPAL DEL JEFE
    //
    avanzar() {

        const ctx = this.panel.getContext("2d");

        this.verificarFaseFinal();

        this.moverHaciaJugador();

        this.tiempoInvocacion++;
        this.tiempoAtaqueEspecial++;
        this.tiempoSprite++;

        this.tiempoRisa++;

    if (this.tiempoRisa >= this.frecuenciaRisa) {
        this.reproducirRisa();
        this.tiempoRisa = 0;
    }   

        //
        // INVOCAR CRIATURAS
        //
        if (this.tiempoInvocacion >= this.obtenerTiempoInvocacion()) {
            this.invocarCriaturas();
            this.tiempoInvocacion = 0;
        }

        //
        // ATAQUES ESPECIALES
        //
        if (this.tiempoAtaqueEspecial >= this.obtenerTiempoAtaqueEspecial()) {
            this.elegirAtaqueEspecial();
            this.tiempoAtaqueEspecial = 0;
        }

        this.actualizarAtaques();

        this.dibujar(ctx);
    }

    //
    // ACTIVAR FASE FINAL
    //
    verificarFaseFinal() {

        if (this.vida <= 1000 && this.faseFinal == false) {

            this.faseFinal = true;

            this.velocidad = this.velocidadBase + 2;
            this.danoContacto = 50;

            this.reproducirRisa();
        }
    }

    //
    // REPRODUCIR RISA
    //
    reproducirRisa() {

    if (this.sonidoRisa) {

        this.sonidoRisa.pause();
        this.sonidoRisa.currentTime = 0;
        this.sonidoRisa.play();

    }
}

    //
    // TIEMPO DE INVOCACIÓN
    //
    obtenerTiempoInvocacion() {

        if (this.faseFinal == true) {
            return 90;
        }

        return 130;
    }

    //
    // TIEMPO DE ATAQUES ESPECIALES
    //
    obtenerTiempoAtaqueEspecial() {

        if (this.faseFinal == true) {
            return 75;
        }

        return 105;
    }

    //
    // MOVER HACIA EL JUGADOR
    //
    moverHaciaJugador() {

        let dx = posX - this.posX;
        let dy = posY - this.posY;

        let distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia > 0) {

            //
            // DIRECCIÓN VISUAL DEL SPRITE
            //
            if (Math.abs(dx) > Math.abs(dy)) {

                if (dx > 0) {
                    this.direccion = "derecha";
                }
                else {
                    this.direccion = "izquierda";
                }

            } 
            else {

                if (dy > 0) {
                    this.direccion = "abajo";
                }
                else {
                    this.direccion = "arriba";
                }
            }

            let nuevaX = this.posX + (dx / distancia) * this.velocidad;
            let nuevaY = this.posY + (dy / distancia) * this.velocidad;

            if (!colisionObstaculoCriatura(nuevaX, this.posY, this.width, this.height)) {
                this.posX = nuevaX;
            }

            if (!colisionObstaculoCriatura(this.posX, nuevaY, this.width, this.height)) {
                this.posY = nuevaY;
            }
        }
    }

    //
    // ELEGIR ATAQUE ESPECIAL
    //
    elegirAtaqueEspecial() {

        this.cicloAtaque++;

        if (this.cicloAtaque == 1) {
            this.crearExplosionOscura();
        }
        else if (this.cicloAtaque == 2) {
            this.crearCorteOscuro();
        }
        else if (this.cicloAtaque == 3) {
            this.crearLluviaDeSombras();
            this.cicloAtaque = 0;
        }
    }

    //
    // EXPLOSIÓN OSCURA
    //
    crearExplosionOscura() {

        this.ataques.push({
            tipo: "explosion",
            x: this.posX + this.width / 2,
            y: this.posY + this.height / 2,
            radio: this.faseFinal ? 350 : 290,
            aviso: this.faseFinal ? 25 : 32,
            duracion: 18,
            dano: this.faseFinal ? 80 : 60,
            activo: false,
            danoAplicado: false
        });
    }

    //
    // CORTE OSCURO
    //
    crearCorteOscuro() {

        let centroBossX = this.posX + this.width / 2;
        let centroBossY = this.posY + this.height / 2;

        let centroPlayerX = posX + anchoP / 2;
        let centroPlayerY = posY + altoP / 2;

        let dx = centroPlayerX - centroBossX;
        let dy = centroPlayerY - centroBossY;

        let angulo = Math.atan2(dy, dx);

        this.ataques.push({
            tipo: "corte",
            x: centroBossX,
            y: centroBossY,
            angulo: angulo,
            largo: this.faseFinal ? 1100 : 900,
            ancho: this.faseFinal ? 140 : 110,
            aviso: this.faseFinal ? 18 : 25,
            duracion: 16,
            dano: this.faseFinal ? 75 : 55,
            activo: false,
            danoAplicado: false
        });
    }

    //
    // LLUVIA DE SOMBRAS
    //
    crearLluviaDeSombras() {

        let cantidad = this.faseFinal ? 8 : 6;

        for (let i = 0; i < cantidad; i++) {

            let offsetX = Math.floor(Math.random() * 900) - 450;
            let offsetY = Math.floor(Math.random() * 700) - 350;

            let ataqueX = posX + anchoP / 2 + offsetX;
            let ataqueY = posY + altoP / 2 + offsetY;

            //
            // EVITAR QUE CAIGAN FUERA DEL ÁREA JUGABLE
            //
            if (typeof areaJugable !== "undefined") {

                if (ataqueX < areaJugable.x + 100) {
                    ataqueX = areaJugable.x + 100;
                }

                if (ataqueX > areaJugable.x + areaJugable.width - 100) {
                    ataqueX = areaJugable.x + areaJugable.width - 100;
                }

                if (ataqueY < areaJugable.y + 100) {
                    ataqueY = areaJugable.y + 100;
                }

                if (ataqueY > areaJugable.y + areaJugable.height - 100) {
                    ataqueY = areaJugable.y + areaJugable.height - 100;
                }
            }

            this.ataques.push({
                tipo: "sombra",
                x: ataqueX,
                y: ataqueY,
                radio: this.faseFinal ? 170 : 140,
                aviso: this.faseFinal ? 25 + i * 3 : 35 + i * 4,
                duracion: 16,
                dano: this.faseFinal ? 55 : 40,
                activo: false,
                danoAplicado: false
            });
        }
    }

    //
    // INVOCAR MINI FANTASMAS
    //
    invocarCriaturas() {

    this.reproducirRisa();

    let cantidad = this.faseFinal ? 6 : 4;

    let posiciones = [
        { x: this.posX + 260, y: this.posY },
        { x: this.posX - 260, y: this.posY },
        { x: this.posX, y: this.posY + 260 },
        { x: this.posX, y: this.posY - 260 },
        { x: this.posX + 220, y: this.posY + 220 },
        { x: this.posX - 220, y: this.posY - 220 }
    ];

    for (let i = 0; i < cantidad; i++) {

        let enemigo = new miniFantasma(
            "panel",
            posiciones[i].x,
            posiciones[i].y,
            this.faseFinal ? 12 : 10
        );

        enemigo.vida = 1;

        // Quitar sonido a los mini fantasmas invocados por el jefe
        if (enemigo.intervaloSonido) {
            clearInterval(enemigo.intervaloSonido);
        }

        if (enemigo.sound) {
            enemigo.sound.pause();
            enemigo.sound.volume = 0;
        }

        enemigo.sinSonido = true;

        criaturas.push(enemigo);
    }
}

    //
    // ACTUALIZAR ATAQUES
    //
    actualizarAtaques() {

        for (let i = 0; i < this.ataques.length; i++) {

            let ataque = this.ataques[i];

            if (ataque.aviso > 0) {
                ataque.aviso--;
            }
            else {
                ataque.activo = true;
                ataque.duracion--;
            }

            if (ataque.duracion <= 0) {
                this.ataques.splice(i, 1);
                i--;
            }
        }
    }

    //
    // DIBUJAR TODO
    //
    dibujar(ctx) {

        this.dibujarAtaques(ctx);

        let imagenActual = this.obtenerSpriteActual();

        //
        // DIBUJAR JEFE CON SPRITE
        //
        if (imagenActual.complete && imagenActual.naturalWidth > 0) {

            ctx.drawImage(
                imagenActual,
                this.posX - camaraX,
                this.posY - camaraY,
                this.width,
                this.height
            );

        } 
        else {

            ctx.fillStyle = "purple";

            ctx.fillRect(
                this.posX - camaraX,
                this.posY - camaraY,
                this.width,
                this.height
            );

            ctx.strokeStyle = "white";
            ctx.lineWidth = 3;

            ctx.strokeRect(
                this.posX - camaraX,
                this.posY - camaraY,
                this.width,
                this.height
            );
        }

        this.dibujarAura(ctx);
        this.dibujarBarraVida(ctx);
    }

    //
    // DIBUJAR ATAQUES
    //
    dibujarAtaques(ctx) {

        for (let i = 0; i < this.ataques.length; i++) {

            let ataque = this.ataques[i];

            if (ataque.tipo == "explosion") {
                this.dibujarExplosion(ctx, ataque);
            }
            else if (ataque.tipo == "corte") {
                this.dibujarCorte(ctx, ataque);
            }
            else if (ataque.tipo == "sombra") {
                this.dibujarSombra(ctx, ataque);
            }
        }
    }

    //
    // DIBUJAR EXPLOSIÓN
    //
    dibujarExplosion(ctx, ataque) {

        let x = ataque.x - camaraX;
        let y = ataque.y - camaraY;

        ctx.save();

        if (ataque.aviso > 0) {

            let parpadeo = ataque.aviso % 8 < 4 ? 0.3 : 0.5;

            ctx.globalAlpha = parpadeo;

            ctx.beginPath();
            ctx.arc(x, y, ataque.radio, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(90, 0, 130, 0.25)";
            ctx.fill();

            ctx.strokeStyle = "rgba(210, 70, 255, 0.95)";
            ctx.lineWidth = 6;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(x, y, ataque.radio - 35, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
            ctx.lineWidth = 3;
            ctx.stroke();

        } 
        else {

            let gradiente = ctx.createRadialGradient(
                x,
                y,
                5,
                x,
                y,
                ataque.radio
            );

            gradiente.addColorStop(0, "rgba(255, 255, 255, 0.95)");
            gradiente.addColorStop(0.18, "rgba(220, 70, 255, 0.9)");
            gradiente.addColorStop(0.45, "rgba(120, 0, 180, 0.75)");
            gradiente.addColorStop(0.75, "rgba(40, 0, 80, 0.45)");
            gradiente.addColorStop(1, "rgba(0, 0, 0, 0)");

            ctx.globalAlpha = 0.9;

            ctx.beginPath();
            ctx.arc(x, y, ataque.radio, 0, Math.PI * 2);
            ctx.fillStyle = gradiente;
            ctx.fill();

            ctx.strokeStyle = "rgba(230, 120, 255, 0.95)";
            ctx.lineWidth = 8;
            ctx.stroke();
        }

        ctx.restore();
    }

    //
    // DIBUJAR CORTE OSCURO
    //
    dibujarCorte(ctx, ataque) {

        let x = ataque.x - camaraX;
        let y = ataque.y - camaraY;

        ctx.save();

        ctx.translate(x, y);
        ctx.rotate(ataque.angulo);

        if (ataque.aviso > 0) {

            ctx.globalAlpha = ataque.aviso % 8 < 4 ? 0.3 : 0.5;

            ctx.fillStyle = "rgba(160, 0, 220, 0.35)";

            ctx.fillRect(
                0,
                -ataque.ancho / 2,
                ataque.largo,
                ataque.ancho
            );

            ctx.strokeStyle = "rgba(240, 130, 255, 0.95)";
            ctx.lineWidth = 5;

            ctx.strokeRect(
                0,
                -ataque.ancho / 2,
                ataque.largo,
                ataque.ancho
            );

        } 
        else {

            ctx.globalAlpha = 0.9;

            let gradiente = ctx.createLinearGradient(0, 0, ataque.largo, 0);

            gradiente.addColorStop(0, "rgba(255,255,255,0.95)");
            gradiente.addColorStop(0.25, "rgba(210,80,255,0.9)");
            gradiente.addColorStop(0.7, "rgba(90,0,150,0.65)");
            gradiente.addColorStop(1, "rgba(0,0,0,0)");

            ctx.fillStyle = gradiente;

            ctx.beginPath();
            ctx.moveTo(0, -ataque.ancho / 2);
            ctx.lineTo(ataque.largo, -ataque.ancho / 4);
            ctx.lineTo(ataque.largo, ataque.ancho / 4);
            ctx.lineTo(0, ataque.ancho / 2);
            ctx.closePath();
            ctx.fill();

            ctx.strokeStyle = "rgba(255,255,255,0.85)";
            ctx.lineWidth = 4;
            ctx.stroke();
        }

        ctx.restore();
    }

    //
    // DIBUJAR LLUVIA DE SOMBRAS
    //
    dibujarSombra(ctx, ataque) {

        let x = ataque.x - camaraX;
        let y = ataque.y - camaraY;

        ctx.save();

        if (ataque.aviso > 0) {

            ctx.globalAlpha = ataque.aviso % 10 < 5 ? 0.3 : 0.5;

            ctx.beginPath();
            ctx.arc(x, y, ataque.radio, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(70, 0, 100, 0.35)";
            ctx.fill();

            ctx.strokeStyle = "rgba(190, 50, 255, 0.95)";
            ctx.lineWidth = 5;
            ctx.stroke();

        } 
        else {

            let gradiente = ctx.createRadialGradient(
                x,
                y,
                5,
                x,
                y,
                ataque.radio
            );

            gradiente.addColorStop(0, "rgba(255, 255, 255, 0.9)");
            gradiente.addColorStop(0.25, "rgba(180, 50, 255, 0.9)");
            gradiente.addColorStop(0.65, "rgba(60, 0, 110, 0.65)");
            gradiente.addColorStop(1, "rgba(0, 0, 0, 0)");

            ctx.globalAlpha = 0.9;

            ctx.beginPath();
            ctx.arc(x, y, ataque.radio, 0, Math.PI * 2);
            ctx.fillStyle = gradiente;
            ctx.fill();

            ctx.globalAlpha = 0.8;
            ctx.fillStyle = "rgba(230, 180, 255, 0.85)";
            ctx.fillRect(x - 12, y - 430, 24, 430);
        }

        ctx.restore();
    }

    //
    // AURA DEL JEFE
    //
    dibujarAura(ctx) {

        let centroX = this.posX + this.width / 2 - camaraX;
        let centroY = this.posY + this.height / 2 - camaraY;

        ctx.save();

        ctx.globalAlpha = this.faseFinal ? 0.5 : 0.3;

        ctx.beginPath();
        ctx.arc(
            centroX,
            centroY,
            this.faseFinal ? 185 : 145,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "rgba(120, 0, 180, 0.35)";
        ctx.fill();

        ctx.restore();
    }

    //
    // BARRA DE VIDA DEL JEFE
    //
    dibujarBarraVida(ctx) {

        let porcentaje = this.vida / this.vidaMaxima;

        if (porcentaje < 0) {
            porcentaje = 0;
        }

        if (porcentaje > 1) {
            porcentaje = 1;
        }

        let barraX = this.posX - camaraX;
        let barraY = this.posY - 35 - camaraY;

        ctx.fillStyle = "black";
        ctx.fillRect(barraX, barraY, this.width, 20);

        ctx.fillStyle = this.faseFinal ? "#ff004c" : "#7b00ff";
        ctx.fillRect(barraX, barraY, this.width * porcentaje, 20);

        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.strokeRect(barraX, barraY, this.width, 20);
    }

    //
    // COLISIÓN Y DAÑO
    //
    colision(posXJugador, posYJugador, anchoP, altoP) {

        let xBoss = this.posX + 45;
        let yBoss = this.posY + 45;

        let anchoBoss = this.width - 90;
        let altoBoss = this.height - 90;

        let xPlayer = posXJugador + 20;
        let yPlayer = posYJugador + 20;

        let anchoPlayer = anchoP - 40;
        let altoPlayer = altoP - 40;

        //
        // DAÑO POR CONTACTO
        //
        if (
            xPlayer < xBoss + anchoBoss &&
            xPlayer + anchoPlayer > xBoss &&
            yPlayer < yBoss + altoBoss &&
            yPlayer + altoPlayer > yBoss
        ) {
            return this.danoContacto;
        }

        //
        // DAÑO POR ATAQUES ESPECIALES
        //
        for (let i = 0; i < this.ataques.length; i++) {

            let ataque = this.ataques[i];

            if (ataque.activo == true && ataque.danoAplicado == false) {

                //
                // DAÑO POR EXPLOSIÓN O SOMBRA
                //
                if (ataque.tipo == "explosion" || ataque.tipo == "sombra") {

                    let centroPlayerX = posXJugador + anchoP / 2;
                    let centroPlayerY = posYJugador + altoP / 2;

                    let dx = centroPlayerX - ataque.x;
                    let dy = centroPlayerY - ataque.y;

                    let distancia = Math.sqrt(dx * dx + dy * dy);

                    if (distancia <= ataque.radio) {
                        ataque.danoAplicado = true;
                        return ataque.dano;
                    }
                }

                //
                // DAÑO POR CORTE
                //
                if (ataque.tipo == "corte") {

                    let centroPlayerX = posXJugador + anchoP / 2;
                    let centroPlayerY = posYJugador + altoP / 2;

                    let dx = centroPlayerX - ataque.x;
                    let dy = centroPlayerY - ataque.y;

                    let cos = Math.cos(-ataque.angulo);
                    let sin = Math.sin(-ataque.angulo);

                    let localX = dx * cos - dy * sin;
                    let localY = dx * sin + dy * cos;

                    if (
                        localX >= 0 &&
                        localX <= ataque.largo &&
                        localY >= -ataque.ancho / 2 &&
                        localY <= ataque.ancho / 2
                    ) {
                        ataque.danoAplicado = true;
                        return ataque.dano;
                    }
                }
            }
        }

        return 0;
    }
}