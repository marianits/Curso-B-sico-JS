function juego(eleccion){
    opciones = ["piedra","papel","tijera"];
    numero = Math.floor(Math.random() * 3);
    opcion = opciones[numero];
    console.log(opcion);
    if (opcion === eleccion){
        console.log("Empate! Vuelve a intentar");
    }else if((opcion === "tijera" && eleccion === "piedra")||
            (opcion === "piedra" && eleccion === "papel")||
            (opcion === "papel" && eleccion === "tijera")){
        console.log("Felicidades, Ganaste!!");
    }else{
        console.log("Lo siento, Perdiste!");
    }
}

juego("tijera");