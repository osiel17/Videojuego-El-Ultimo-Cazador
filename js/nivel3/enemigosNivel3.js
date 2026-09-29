//
//------------CRIATURAS-----------//
//

// Array CRIATURAS //
var criaturas = [];

//*--- Añadir Las Criaturas en el Juego ---*//
let ave = new Ave ('panel',600,1520,5,300);
criaturas.push(ave);

let ave2 = new Ave ('panel',3150,1520,5,300);
criaturas.push(ave2);

let ave3 = new Ave ('panel',2800,470,5,300);
criaturas.push(ave3);

let ave4 = new Ave ('panel',550,670,5,300);
criaturas.push(ave4);

let cactus = new Cactus('panel',3350,370)
criaturas.push(cactus);

let cactus2 = new Cactus('panel',3420,370)
criaturas.push(cactus2);

let cactus3 = new Cactus('panel',3470,370)
criaturas.push(cactus3);

let serpienteReina = new Serpiente('panel', 1950, 1170, 5);
serpienteReina.vida = 8;
serpienteReina.width = 90;
serpienteReina.height = 90;
serpienteReina.esReina = true;
criaturas.push(serpienteReina);

let serpientesInvocadas = false;

function invocarSerpientesReina() {

    if (serpientesInvocadas == true) {
        return;
    }

    serpientesInvocadas = true;

    let posiciones = [
        { x: 3150, y: 470 },
        { x: 3000, y: 650 },
        { x: 2800, y: 1050 },
        { x: 3460, y:980},
        { x: 3450, y:960},
        { x: 3410, y:930},
        { x: 3600, y: 970 },
        { x: 2200, y: 1350 },
        { x: 1800, y: 1400 },
        { x: 1500, y: 1200 },
        { x: 1200, y: 900 },
        { x: 1020, y: 750 },
        { x: 700, y: 1500 }
    ];

    for (let i = 0; i < posiciones.length; i++) {

        let nuevaSerpiente = new Serpiente(
            'panel',
            posiciones[i].x,
            posiciones[i].y,
            7
        );

        nuevaSerpiente.vida = 2;

        criaturas.push(nuevaSerpiente);
    }
}





/*
let piedra = new Piedra('panel', 680, 50, 10);
criaturas.push(piedra);

let minifantasma = new miniFantasma('panel',1370,50,8);
criaturas.push(minifantasma);

let arana = new Arana('panel',600,300);
criaturas.push(arana);

let serpiente = new Serpiente('panel',450,600,5);
criaturas.push(serpiente);
*/