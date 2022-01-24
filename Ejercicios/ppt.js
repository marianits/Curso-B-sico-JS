function juego(eleccion){
    opciones = ["piedra","papel","tijera"];
    numero = Math.floor(Math.random() * 3);
    opcion = opciones[numero];
    console.log(opcion);
    if (opcion === "piedra"){
        piedra(eleccion);
    }else if(opcion === "papel"){
        papel(eleccion);
    }else{
        tijera(eleccion)
    }
}

function piedra(eleccion){
    if (eleccion === "papel"){
        console.log("Ganaste!");}
    else if(eleccion === "tijera"){
        console.log("Perdiste!");
    }else
        console.log("Empate!")
}

function papel(eleccion){
    if (eleccion === "tijera"){
        console.log("Ganaste!");}
    else if(eleccion === "piedra"){
        console.log("Perdiste!");
    }else
        console.log("Empate!")
}

function tijera(eleccion){
    if (eleccion === "piedra"){
        console.log("Ganaste!");}
    else if(eleccion === "papel"){
        console.log("Perdiste!");
    }else
        console.log("Empate!")
}

juego("tijera")

