// Obtém a data/hora atual
const data = new Date();

// Guarda cada pedaço em uma constiável
const dia = data.getDate();           // 1-31
const dia_sem = data.getDay();            // 0-6 (zero=domingo)
const mes = data.getMonth();          // 0-11 (zero=janeiro)
const ano2 = data.getYear();           // 2 dígitos
const ano4 = data.getFullYear();       // 4 dígitos
const hora = data.getHours();          // 0-23
const min = data.getMinutes();        // 0-59
const seg = data.getSeconds();        // 0-59
const mseg = data.getMilliseconds();   // 0-999
const tz = data.getTimezoneOffset(); // em minutos

//*Outra forma de encontrar a data e a hora
const time = new Date().toLocaleTimeString('pt-BR')
const date = new Date().toLocaleDateString('pt-BR')

// Formata a data e a hora (note o mês + 1)
const dayData = dia + '/' + (mes + 1) + '/' + ano4;
const dayHora = hora + ':' + min + ':' + seg;


// Mostra o resultado
console.log('Hoje é ' + dayData + ' às ' + dayHora);
console.log(`Hoje é ${date} às ${time}`)