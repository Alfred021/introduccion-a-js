document.querySelector('#agregar').onclick = function () {
    agregarMiembros();
    return false;
}

document.querySelector('#quitar').onclick = function () {
    quitarMiembros ();  
    return false;
}

document.querySelector('#calcular').onclick = function () {
    document.querySelector('#mayor-salario-anual').textContent = mayorSalarioAnual ();
    document.querySelector('#menor-salario-anual').textContent =   menorSalarioAnual ();
    document.querySelector('#salario-anual-promedio').textContent = salarioAnualPromedio ();
    document.querySelector('#salario-mensual-promedio').textContent = salarioMensualPromedio ();
}


function agregarMiembros() {

    let contador = 1;
    for (i = 0; i < document.querySelectorAll('.integrante').length; i++) {
        contador += 1;
    }

    const div = document.createElement('div');
    div.className = 'integrante';

    const label = document.createElement('label');
    label.textContent = "Salario Anual del integrante Nro: " + contador; 

    const input = document.createElement('input');
    input.type = 'number';

    div.appendChild(label);
    div.appendChild(input);

    const miembrosFamilia = document.querySelector('#miembros-familia');
    miembrosFamilia.appendChild(div);

    return false;
}

function quitarMiembros () {
    let miembrosaEliminar = document.querySelector('#miembros-familia');
    let elementoEliminar = document.querySelectorAll('.integrante');
    miembrosaEliminar.removeChild(elementoEliminar[elementoEliminar.length-1]);

    return false;
}

function sacarSalarios () {
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

function mayorSalarioAnual () {
    let salarios = sacarSalarios();
    let resultadoMayorSalarioAnual = Math.max(...salarios);
    return resultadoMayorSalarioAnual;
}

function menorSalarioAnual () {
    let salarios = sacarSalarios ();
    let resultadoMenorSalarioAnual = Math.min(...salarios);
    return resultadoMenorSalarioAnual;
}

function salarioAnualPromedio () {
    let salarios = sacarSalarios ();
    let sumaSalarios = 0;
    for (i = 0; i < salarios.length; i++) {
        sumaSalarios += salarios[i];
    }
    return sumaSalarios/ salarios.length;
}

function salarioMensualPromedio () {
    let salarios = sacarSalarios ();
    let sumaSalarios = 0;
    let salarioMensualPromedio = 0;
    for (i = 0; i < salarios.length; i++) {
        sumaSalarios += salarios[i]/12
    }
    salarioMensualPromedio = sumaSalarios / salarios.length;
    return salarioMensualPromedio;
}