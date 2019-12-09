let miembrosGrupoFamiliar = Number(prompt('Cuantos miembros hay en el grupo familiar'));

    for (i = 0; i< miembrosGrupoFamiliar; i++) {
        CrearMiembros(i);
    }

document.querySelector('#calcular').onclick = function() {
    let edades = SacarEdades ();
    document.querySelector('#mayor-edad').value = sacarmayorEdad ();
    document.querySelector('#menor-edad').value = sacarmenorEdad ();
    document.querySelector('#promedio-edad').value = sacarpromedioEdad(edades);

    return false;
};

document.querySelector('#reset').onclick = function () {
    borrarIntegrantes ();
    borrarnumMayor ();
    borrarnumMenor ();
    borrarPromedio ();

    return false
};
 
function CrearMiembros(numero = 1) {

    if (numero >= 1) {
        acumulador = 0;
        acumulador + 1;
    }
    const div = document.createElement('div');
    div.className = 'integrante';

    const label = document.createElement('label');
    label.textContent = 'Edad del integrante Nro: ' + (acumulador);

    const input = document.createElement('input');
    input.type = 'number';

    div.appendChild(label);
    div.appendChild(input);

    const miembros = document.querySelector('#miembros');
    miembros.appendChild(div);
}

function SacarEdades () {
    const edadesinputs = document.querySelectorAll('.integrante input');
    const edadesMiembros = [];
    for (let j = 0; j < edadesinputs.length; j++) {
        edadesMiembros.push(Number(edadesinputs[j].value));
    }
    return edadesMiembros;
}

function sacarmayorEdad () {
    let mayorEdad = SacarEdades ();
    let resultadomayorEdad = Math.max(...mayorEdad);
    return resultadomayorEdad;
}

function sacarmenorEdad () {
    let menorEdad = SacarEdades ();
    let resultadomenorEdad = Math.min(...menorEdad);
    return resultadomenorEdad;
}

function sacarpromedioEdad(edades) {
    let contador = 0;
    for (i = 0; i < edades.length; i++){
        contador += edades[i];
    }
    return contador / edades.length;
}

function borrarnumMayor () {
    document.getElementById('mayor-edad').value = "";
}

function borrarnumMenor () {
    document.getElementById('menor-edad').value = "";
}

function borrarPromedio () {
    document.getElementById('promedio-edad').value = "";
}

function borrarIntegrantes () {
    let resetIntegrantes = document.querySelectorAll('.integrante input');
    for (i = 0; i < resetIntegrantes.length; i++) {
        resetIntegrantes[i].value = "";
    }
}