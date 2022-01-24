
    function auto(marca, modelo, annio) {  
        this.marca = marca;   
        this.modelo = modelo;
        this.annio = annio;
    }


    var autos = [];
    for(i=0;i<4;i++){
        var marca = prompt("Ingrese la marca");
        var modelo = prompt("Ingrese el modelo");
        var annio = prompt("Ingrese el annio");

        autos.push(new auto(marca,modelo,annio));
    }

    while(autos.length>0)
    {
        var auto = autos.shift();
        console.log(auto);
    }
    