import validator from './validator.js'; //conexion con validador.js

/*Se crea la variable del DOM con el id 'tcNumber'
se extrae el string y se asigna a la variable "creditCard"*/

const btn = document.getElementById("btn");
const creditCardNumber = document.getElementById('tcNumber');
const nombre = document.getElementById('usuario'); //trae el nombre del titular de la tarjeta

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(nombre.value ==""){
        document.getElementById("advertencia1").innerHTML="*Favor de ingresar nombre del titular";} // Párrafo o span
    
        if (creditCardNumber.value ==="") {
        document.getElementById("advertencia").innerHTML="*Favor de ingresar numero de tarjeta";}  // Párrafo o span          

        /*Si no esta vacío se ejecuta la funcion isValid*/  
        else {
            let tcValidacion= validator.isValid(creditCardNumber.value)
            if(tcValidacion == true) { 
                alert ('Pago realizado con exito');} 
                else { alert ('Pago rechazado');}}          
}),

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let tcNumber = document.getElementById('tcNumber');
    let numeroInput= validator.maskify(tcNumber.value);
    tcNumber.value=numeroInput;
})
