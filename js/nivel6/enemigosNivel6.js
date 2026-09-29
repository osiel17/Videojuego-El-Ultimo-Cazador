//
//------------CRIATURAS-----------//
//

// Array CRIATURAS //
var criaturas = [];

var criaturas = [];

let reyOscuro = new ReyOscuro("panel", 1960, 1195, 3);

criaturas.push(reyOscuro);

let enemigosEliminados = false;

function eliminarEnemigos() {

    if (enemigosEliminados == true) {
        return;
    }

    enemigosEliminados = true;
}

