document.querySelector('#agregar').onclick = function () {
    agregarMiembro();
    return false;
}

document.querySelector('#quitar').onclick = function () {
    quitarMiembro();  
    return false;
}

document.querySelector('#calcular').onclick = function () {
    document.querySelector('#mayor-salario-anual').textContent = calcularMayorSalarioAnual ();
    document.querySelector('#menor-salario-anual').textContent = calcularMenorSalarioAnual ();
    document.querySelector('#salario-anual-promedio').textContent = calcularSalarioAnualPromedio ();
    document.querySelector('#salario-mensual-promedio').textContent = calcularSalarioMensualPromedio ();
}


function agregarMiembro() {

    let indice = Number(document.querySelectorAll('.integrante').length) + 1;

    const div = document.createElement('div');
    div.className = 'integrante';

    const label = document.createElement('label');
    label.textContent = 'Salario Anual del integrante Nro: ' + indice; 

    const input = document.createElement('input');
    input.type = 'number';

    div.appendChild(label);
    div.appendChild(input);

    const miembrosFamilia = document.querySelector('#miembros-familia');
    miembrosFamilia.appendChild(div);

}

function quitarMiembro() {
    let miembrosaEliminar = document.querySelector('#miembros-familia');
    let elementoEliminar = document.querySelectorAll('.integrante');
    miembrosaEliminar.removeChild(elementoEliminar[elementoEliminar.length-1]);

}

function obtenerSalarios() {
    const salariosInputs = document.querySelectorAll('.integrante input');
    const salariosMiembros = [];
    for (i = 0; i < salariosInputs.length; i++) {
        if (salariosInputs[i].value === "") {
        continue;
        }
        salariosMiembros.push(Number(salariosInputs[i].value));    
    }

    return salariosMiembros;
}

function calcularMayorSalarioAnual() {
    let salarios = obtenerSalarios();
    let mayorNumero = salarios[0];
    for (i = 1; i > salarios.length; i++){
        if (salarios[i] > mayorNumero) {
            mayorNumero = salarios[i];
        }
    }
    return mayorNumero;
}

function calcularMenorSalarioAnual() {
    let salarios = obtenerSalarios();
    let menorNumero = salarios[0];
    for (i = 1; i < salarios.length; i++) {
        if (salarios[i] < menorNumero) {
            menorNumero = salarios[i];
        }
    }
    return menorNumero;
}

function calcularSalarioAnualPromedio() {
    let salarios = obtenerSalarios();
    let sumaSalarios = 0;
    for (i = 0; i < salarios.length; i++) {
        sumaSalarios += salarios[i];
    }
    return sumaSalarios/ salarios.length;
}

function calcularSalarioMensualPromedio() {
    let salarios = obtenerSalarios();
    let sumaSalarios = 0;
    let salarioMensualPromedio = 0;
    for (i = 0; i < salarios.length; i++) {
        sumaSalarios += salarios[i]/12
    }
    salarioMensualPromedio = sumaSalarios / salarios.length;
    return salarioMensualPromedio;
}