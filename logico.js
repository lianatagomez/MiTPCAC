const cont_dia = document.querySelector('#dia');
const cont_mes = document.querySelector('#mes');
const cont_año = document.querySelector('#año');

const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre']



i=0;
var dia;
var mes;
var año;



while (i < 31) {
    i++;
    dia = document.createElement('option');
    dia.id = 'Dia'+ i;
    dia.className = 'Dia'+i;
    dia.textContent = i;    
    dia.setAttribute('value', i);
    cont_dia.appendChild(dia); 

}

i=0
while (i < meses.length) {
    
    mes = document.createElement('option');
    mes.id = meses[i];
    mes.className = meses[i];
    mes.textContent = meses[i];
    mes.setAttribute('value', meses[i]);
    cont_mes.appendChild(mes); 
    i++;
}

i=0 
while (2021-i > 1900) {
    
    A=2021-i
    año = document.createElement('option');
    año.id = A ;
    año.className = A;
    año.textContent = A;
    año.setAttribute('value', A);
    cont_año.appendChild(año); 
    i++;
}