let miembrosGrupoFamiliar = Number(prompt('Cuantos miembros hay en el grupo familiar'));
    for (i = 0; i < miembrosGrupoFamiliar; i++) {
        crearMiembros(i);
    }

document.querySelector('#calcular').onclick = function() {
    let edades = obtenerEdadesMiembros ();
    document.querySelector('#mayor-edad').value = calcularMayorEdad(edades);
    document.querySelector('#menor-edad').value = calcularMenorEdad(edades);
    document.querySelector('#promedio-edad').value = calcularPromedioEdad(edades);

    return false;
};

document.querySelector('#reset').onclick = function () {
    borrarIntegrantes();
    borrarNumeroMayor();
    borrarNumeroMenor();
    borrarPromedio();

    return false
};
 
function crearMiembros(indice = 0) {

    if (indice >= 0) {
        indice = indice + 1;
    
    const div = document.createElement('div');
    div.className = 'integrante';

    const label = document.createElement('label');
    label.textContent = 'Edad del integrante Nro: ' + (indice);

    const input = document.createElement('input');
    input.type = 'number';

    div.appendChild(label);
    div.appendChild(input);

    const miembros = document.querySelector('#miembros');
    miembros.appendChild(div);
    }
}

function obtenerEdadesMiembros() {
    const edadesinputs = document.querySelectorAll('.integrante input');
    const edadesMiembros = [];
    for (let j = 0; j < edadesinputs.length; j++) {
        edadesMiembros.push(Number(edadesinputs[j].value));
    }
    return edadesMiembros;
}

function calcularMayorEdad(edades) {
    let mayorNumero = edades[0];
    for (i = 1; i > edades.length; i++) {
        if (edades[i] > mayorNumero ) {
            mayorNumero = edades[i];
        }
    }    
    return mayorNumero;
}

function calcularMenorEdad(edades) {
    let menorNumero = edades[0];
    for (i = 1; i < edades.length; i++) {
        if (edades[i] < menorNumero) {
            menorNumero = edades[i];
        }
    }
    return menorNumero;
}

function calcularPromedioEdad(edades) {
    let acumulador = 0;
    for (i = 0; i < edades.length; i++){
        acumulador += edades[i];
    }
    return acumulador / edades.length;
}

function borrarNumeroMayor() {
    document.getElementById('mayor-edad').value = "";
}

function borrarNumeroMenor() {
    document.getElementById('menor-edad').value = "";
}

function borrarPromedio() {
    document.getElementById('promedio-edad').value = "";
}

function borrarIntegrantes() {
    let resetIntegrantes = document.querySelectorAll('.integrante input');
    for (i = 0; i < resetIntegrantes.length; i++) {
        resetIntegrantes[i].value = "";
}}
