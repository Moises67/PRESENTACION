generalDataBaseArray = [];
generalDataBaseBackUp = [];
generalDataBaseErrorHistory = [];
numeroTotalDeCuentasRegistradas = 0;
errorTimes=0
function guardarTexto(){
    let texto = document.getElementById('texto').value;
    if (texto) {
        borrarEsteBoton()
        if(texto.includes("@") && (texto.includes(".com") || texto.includes(".uas") || texto.includes(".edu")) || texto.includes(".mx") || texto.includes(".org")){
            generalDataBaseArray[numeroTotalDeCuentasRegistradas] = texto;
            numeroTotalDeCuentasRegistradas++;
            cuentasRegistradas();
        }else{
            generalDataBaseErrorHistory[errorTimes] = "Error 1Simple: " + texto;
            document.getElementById("error").innerHTML = "Introduce un correo electrónico válido. Error: 1Simple";
            errorTimes++;
            texto = null;
        }
    } else {
        if (errorTimes <= 5) {
            generalDataBaseErrorHistory[errorTimes] = "Error 2Simple: " + texto;
            document.getElementById("error").innerHTML = "El input debe de contener texto. Ingrese su correo electrónico. Error: 2Simple";
            errorTimes++;
            texto = null;
        } else {
            generalDataBaseErrorHistory[errorTimes] = "Error 4Simple: " + texto;
            document.getElementById("error").innerHTML = "Ten paciencia ombeeee. Error: 3Simple";
            errorTimes++;
            texto = null;
        }
    }
}

function borrarEsteBoton(){
    document.getElementById("error").innerHTML = null
}

function cuentasRegistradas(){
    if(numeroTotalDeCuentasRegistradas == 1){
        alert("Enviado satisfactoriamente. Ahora hay una cuenta registrada");
    }else{
        alert("Enviado satisfactoriamente. Ahora son " + numeroTotalDeCuentasRegistradas + " cuentas registradas");
    }
}

function descargarTexto() {
const blob = new Blob([generalDataBaseArray + generalDataBaseErrorHistory], { type: 'text/plain' });

const url = URL.createObjectURL(blob);

const a = document.createElement('a');
a.href = url;
a.download = 'Correos Electrónicos.txt';

document.body.appendChild(a);
a.click();
document.body.removeChild(a);
}

function imprimirTexto(){
    for(var i=0; i < generalDataBaseArray.length; i++){
        console.log(generalDataBaseArray[i]);
    }
}

function formatearDatos(){
    bandera=prompt("¿ESTAS SEGURO?  SI / NO")
    generalDataBaseBackUp = generalDataBaseArray;
    numeroTotalDeCuentasRegistradas = 0;
    generalDataBaseArray = null;
    texto = null;
    a = null;
}