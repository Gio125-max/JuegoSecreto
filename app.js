// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un numero del 1 al 10';
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);//obtiene el documento por elemento o etiqueta
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//obteneri el documento por id
    //console.log(numeroDeUsuario === numeroSecreto);//Tripe === es validacion a vaalor y tipo de dato
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';  
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya te sortearon todos los numeros posibles');
    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado)){//include recorre el arreglo para ver si el valor ya esta en la lista  //.pop elimina el ultimo
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);//agrega un numero al arreglo
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1','JUEGO DEL NUMERO SECRETO 2.0');
    asignarTextoElemento('p','Indica un numero del 1 al ' + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();
