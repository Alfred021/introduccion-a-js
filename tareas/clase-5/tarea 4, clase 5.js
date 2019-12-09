let $Licontent = document.querySelectorAll('li');
let newArray = [];
let totalArray = 0;

for (let i = 0; i < $Licontent.length; i++) {
    newArray.push($Licontent[i].innerText)
    newArrayNum = newArray.map(Number);
    totalArray += newArrayNum[i];
}

calcularPromedio = totalArray / newArrayNum.length;
maxNum = Math.max(...newArrayNum);
minNum = Math.min(...newArrayNum);

function numeroMasRepetido (newArrayNum) {
let masFrecuente = 1;
let vecesRepetido = 0;
let numeromasRepetido = 0;

for (i = 0; i < newArrayNum.length; i++) {
    for(let j = 0; j < newArrayNum.length; j++){
        if (newArrayNum[i] == newArrayNum[j]) {
            vecesRepetido++;
        }  
        if (masFrecuente < vecesRepetido) {
            masFrecuente = vecesRepetido;
           numeromasRepetido = newArrayNum[i];
        }
    }
    vecesRepetido = 0;
}
return numeromasRepetido + ', se repite ' + masFrecuente + ' veces.';
}

let $promedio = document.querySelector('#promedio');
$promedio.textContent = calcularPromedio;

let $numeroMenor = document.querySelector('#numero_mas_pequeño');
$numeroMenor.textContent = minNum;

let $numeroMayor = document.querySelector('#numero_mas_grande');
$numeroMayor.textContent = maxNum;

let $numRepetido = document.querySelector('#numero_mas_repetido');
$numRepetido.textContent = numeroMasRepetido(newArrayNum);

