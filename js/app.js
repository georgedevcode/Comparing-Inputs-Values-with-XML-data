var busqueda; //Vaiable global para el objeto busqueda

function buscar(){
    //Funcion que extrae los valores ingresados en los input text y los guarda en variables
    var cedula = document.getElementById("cedula").value;
    // console.log(cedula)
    var placa = document.getElementById("placa").value;
    // console.log(placa)
    var marca = document.getElementById("marca").value;
    // console.log(marca)
    var modelo = document.getElementById("modelo").value;
    // console.log(modelo)

busqueda = {//Objeto busqueda donde se almacenan las variables extraidas con la function buscar();
    "cedula": cedula,
    "placa": placa,
    "marca":  marca,
    "modelo": modelo
    }
console.log(busqueda);
}

function cargarXML(){//Cargamos documento XML
    var peticion = new XMLHttpRequest();
    console.log("XML cargado")//Console log para saber que el XML fue cargado correctamente
    peticion.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            mainFunction(this);//LLamamos MainFunction para recorrer el XML
        }
    }
    peticion.open("GET", "data.xml", true);
    peticion.send();
}

function mainFunction(xml){
    var i;
    var xmlDoc = xml.responseXML;
    console.log(xmlDoc);//Console log del documento XML
    var tabla = "<tr><th>NOMBRE</th><th>CEDULA</th><th>PLACA</th></tr>"
    var x = xmlDoc.getElementsByTagName("CD");
    // console.log(x);
    for (i = 0; i < x.length; i++) {
        tabla += "<tr><td>" +
        x[i].getElementsByTagName("NOMBRE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("CEDULA")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("PLACA")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    // document.getElementById("lista").innerHTML = tabla;
}