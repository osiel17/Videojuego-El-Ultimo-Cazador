//
//------------CRIATURAS-----------//
//

// Array CRIATURAS //
var criaturas = [];

//*--- Añadir Las Criaturas en el Juego ---*//


let minifantasma = new miniFantasma('panel',400,870,11);
criaturas.push(minifantasma);

let minifantasma2 = new miniFantasma('panel',1800,470,11);
criaturas.push(minifantasma2);

let minifantasma3 = new miniFantasma('panel',2800,820,11);
criaturas.push(minifantasma3);

let minifantasma4 = new miniFantasma('panel',2000,1720,11);
criaturas.push(minifantasma4);

let minifantasma5 = new miniFantasma('panel',100,100,11);
criaturas.push(minifantasma5);

let minifantasma6 = new miniFantasma('panel',2900,1720,11);
criaturas.push(minifantasma6);

let arana = new Arana('panel',600,300);
criaturas.push(arana);


let arana2 = new Arana('panel',1800,1200);
criaturas.push(arana2);


let arana3 = new Arana('panel',3000,800);
criaturas.push(arana3);


let arana4 = new Arana('panel',3600,2300);
criaturas.push(arana4);


let cactus = new Cactus('panel',1360,1370)
criaturas.push(cactus);

let cactus2 = new Cactus('panel',1420,1370)
criaturas.push(cactus2);

let cactus3 = new Cactus('panel',1480,1370)
criaturas.push(cactus3);

let cactus4 = new Cactus('panel',1540,1370)
criaturas.push(cactus4);

let cactus5 = new Cactus('panel',1600,1370)
criaturas.push(cactus5);

let cactus6 = new Cactus('panel',1660,1370)
criaturas.push(cactus6);

let cactus7 = new Cactus('panel',1720,1370)
criaturas.push(cactus7);

let cactus8 = new Cactus('panel',1780,1370)
criaturas.push(cactus8);

let cactus9 = new Cactus('panel',1840,1370)
criaturas.push(cactus9);

let cactus10 = new Cactus('panel',1900,1370)
criaturas.push(cactus10);

let cactus11 = new Cactus('panel',1960,1370)
criaturas.push(cactus11);

let cactus12 = new Cactus('panel',2020,1370)
criaturas.push(cactus12);

let fantasma = new Fantasma('panel',1360,1370,3);
criaturas.push(fantasma);

let fantasma1 = new Fantasma('panel',1360,1370,3);
criaturas.push(fantasma1);

let fantasma2 = new Fantasma('panel',1360,1370,3);
criaturas.push(fantasma2);

let fantasma3 = new Fantasma('panel',1360,1370,3);
criaturas.push(fantasma3);

let fantasma4 = new Fantasma('panel',1360,1370,3);
criaturas.push(fantasma4);

let fantasma5 = new Fantasma('panel',1360,1370,3);
criaturas.push(fantasma5);


let fantasma6  = new Fantasma('panel',1360,1370,3);
criaturas.push(fantasma6);


let fantasma7 = new Fantasma('panel',1360,1370,3);
criaturas.push(fantasma7);


let fantasma8 = new Fantasma('panel',1360,1370,3);
criaturas.push(fantasma8);


let fantasma9 = new Fantasma('panel',1360,1370,3);
criaturas.push(fantasma9);


let fantasma10 = new Fantasma('panel',1360,1370,3);
criaturas.push(fantasma10);

let fantasma11 = new Fantasma('panel',2810,1120,3);
criaturas.push(fantasma11);

let fantasma12 = new Fantasma('panel',2810,1120,3);
criaturas.push(fantasma12);

let fantasma13 = new Fantasma('panel',2810,1120,3);
criaturas.push(fantasma13);

let fantasma14 = new Fantasma('panel',2810,1120,3);
criaturas.push(fantasma14);

let fantasma15 = new Fantasma('panel',2810,1120,3);
criaturas.push(fantasma15);

let fantasma16 = new Fantasma('panel',2810,1120,3);
criaturas.push(fantasma16);

let fantasma17 = new Fantasma('panel',2810,1120,3);
criaturas.push(fantasma17);

let fantasma18 = new Fantasma('panel',2810,1120,3);
criaturas.push(fantasma18);

let fantasma19 = new Fantasma('panel',2810,1120,3);
criaturas.push(fantasma19);

let fantasma20 = new Fantasma('panel',2810,1120,3);
criaturas.push(fantasma20);




let enemigosEliminados = false;

function eliminarEnemigos(){
    if (enemigosEliminados == true){
        return
    }
    enemigosEliminados = true; 
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