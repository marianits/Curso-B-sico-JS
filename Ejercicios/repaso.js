if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


//Ciclos
let i=0;
while(i < 5){
    console.log("El valor de i es: " + i);
    i++;
}
let i = 10;
while(i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}

//objetos
function imprimir(objecto){
    for(propiedad in objeto)
        {
            console.log(`${propiedad}: ${objecto[propiedad]}`);
        }
    }
    
    var objeto = {
        nombre: "Mariana",
        edad: 15,
        sexo: "F"
    }