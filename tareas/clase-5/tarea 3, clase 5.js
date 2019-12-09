document.querySelector('#calcular_tiempo_total').onclick = function () {
    let horas1 = Number(document.querySelector('#horas_clase1').value);
    let minutos1 = Number(document.querySelector('#minutos_clase1').value);
    let segundos1 = Number(document.querySelector('#segundos_clase1').value);
    
    let resultado1 =  horas1 + ' horas, ' + minutos1 + ' minutos, ' + segundos1 + ' segundos.'
    let nodeparrafo1 = document.createElement('p');
    nodeparrafo1.textContent = 'El tiempo total de la clase 1 es: ' + resultado1;
    document.querySelector('form1').appendChild(nodeparrafo1);


    let horas2 = Number(document.querySelector('#horas_clase2').value);
    let minutos2 = Number(document.querySelector('#minutos_clase2').value);
    let segundos2 = Number(document.querySelector('#segundos_clase2').value);
    
    let resultado2 =  horas2 + ' horas, ' + minutos2 + ' minutos, ' + segundos2 + ' segundos.'
    let nodeparrafo2 = document.createElement('p');
    nodeparrafo2.textContent = 'El tiempo total de la clase 2 es: ' + resultado2;
    document.querySelector('form2').appendChild(nodeparrafo2);


    let horas3 = Number(document.querySelector('#horas_clase3').value);
    let minutos3 = Number(document.querySelector('#minutos_clase3').value);
    let segundos3 = Number(document.querySelector('#segundos_clase3').value);
    
    let resultado3 =  horas3 + ' horas, ' + minutos3 + ' minutos, ' + segundos3 + ' segundos.'
    let nodeparrafo3 = document.createElement('p');
    nodeparrafo3.textContent = 'El tiempo total de la clase 3 es: ' + resultado3;
    document.querySelector('form3').appendChild(nodeparrafo3);


    let horas4 = Number(document.querySelector('#horas_clase4').value);
    let minutos4 = Number(document.querySelector('#minutos_clase4').value);
    let segundos4 = Number(document.querySelector('#segundos_clase4').value);
    
    let resultado4 =  horas4 + ' horas, ' + minutos4 + ' minutos, ' + segundos4 + ' segundos.'
    let nodeparrafo4 = document.createElement('p');
    nodeparrafo4.textContent = 'El tiempo total de la clase 4 es: ' + resultado4;
    document.querySelector('form4').appendChild(nodeparrafo4);


    let horas5 = Number(document.querySelector('#horas_clase5').value);
    let minutos5 = Number(document.querySelector('#minutos_clase5').value);
    let segundos5 = Number(document.querySelector('#segundos_clase5').value);
    
    let resultado5 =  horas5 + ' horas, ' + minutos5 + ' minutos, ' + segundos5 + ' segundos.'
    let nodeparrafo5 = document.createElement('p');
    nodeparrafo5.textContent = 'El tiempo total de la clase 5 es: ' + resultado5;
    document.querySelector('form5').appendChild(nodeparrafo5);


    let horasTotales = horas1 + horas2 + horas3 + horas4 + horas5;
    let minutosTotales = minutos1 + minutos2 + minutos3 + minutos4 + minutos5;
    let segundosTotales = segundos1 + segundos2 + segundos3 + segundos4 + segundos5;
    let tiempo_total = document.querySelector('#resultado-suma-clases'); 
    tiempo_total.textContent =  'El tiempo total de las clases es: ' + (horasTotales + (Math.floor(minutosTotales/60)))  + ' horas, ' + ((minutosTotales%60) + (Math.floor(segundosTotales/60)))  + ' minutos, ' + (segundosTotales%60) + ' segundos.'

    return false;
}

/* el resultado de las 5 clases debe ser: 10 horas, 10 minutos, 6 segundos. */