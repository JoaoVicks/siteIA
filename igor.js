// Recebr valor 
let nm1 = document.getElementsByName(pudding)
console.log(nm1);
// Enviar dados pro html
document.getElementById(valor_form).innerHTML = nm1[0].defaultValue;
