function actualizarCamara(anchoBase, altoBase) {

    camaraX = posX - anchoBase / 2 + anchoP / 2;
    camaraY = posY - altoBase / 2 + altoP / 2;

    if(camaraX < 0) camaraX = 0;
    if(camaraY < 0) camaraY = 0;

    if(camaraX > anchoMapa - anchoBase){
        camaraX = anchoMapa - anchoBase;
    }

    if(camaraY > altoMapa - altoBase){
        camaraY = altoMapa - altoBase;
    }
}