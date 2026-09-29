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

let arana = new Arana('panel',600,300);
criaturas.push(arana);


let arana2 = new Arana('panel',1800,1200);
criaturas.push(arana2);


let arana3 = new Arana('panel',3000,800);
criaturas.push(arana3);


let arana4 = new Arana('panel',3600,2300);
criaturas.push(arana4);


let serpiente = new Serpiente('panel',1200,970,7);
criaturas.push(serpiente);


let serpiente2 = new Serpiente('panel',2300,570,7);
criaturas.push(serpiente2);

let serpiente3 = new Serpiente('panel',2400,1870,7);
criaturas.push(serpiente3);


let serpiente4 = new Serpiente('panel',1200,970,7);
criaturas.push(serpiente4);


let serpiente5 = new Serpiente('panel',450,970,7);
criaturas.push(serpiente5);

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