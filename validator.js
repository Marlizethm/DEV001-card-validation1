const validator = {
  isValid : (creditCardNumber) => {
    //la variable cardNumber se inicia con 0, al momento de completar cada ciclo el número cambia// 
      let count = 0;
     //la variable estado empieza con false, ya que la primera posición es impar (1)// 
      let estado = false;
      
    /*el for nos permite iniciar un ciclo que se recorre desde el ultimo caracter del string hasta el primero,
    es decir invertido deacuerdo al algoritmo lunh. El ciclo finaliza cuando ya ha pasado por todos 
    los números. y n-- significa que cada vez va disminuyendo una posición*/ 
      for (let n = creditCardNumber.length - 1; n >= 0; n--) {
        let digito = creditCardNumber.charAt(n);//extrae el carácter del string creditCardNumber
        let digActual = parseInt(digito, 10);//se convierte a número entero base 10 
    
       /*si estado y el digito seleccionado multiplicado por 2 es mayor a 9, se le resta 9
       ej. 12-9=3 que es igual a 1+2=3 */
       if (estado && (digActual *= 2) > 9) { 
        digActual -= 9;
       }
    /*esto se realiza cada que comienza un ciclo, a cardNumber(0)cada que se completa un 
    ciclo se modifica por el digito sin modificar (false) o el digito que se obtuvo en la 
    posicion par*/ 
        count += digActual;//se le va a sumar el digito a count 
        estado = !estado;//cada que se termine el ciclo, el estado va a cambiar ej.1ciclo-false 2ciclo-true ...
      }
      
      /*funcion debe retornar un boolean (false o true), que en este caso si retorna true es 
      porque la division entre 10 de cardNumber tiene un residuo 0, lo que seria una tarjeta válida
      pero si el residuo es diferente a 0, la tarjeta es no válida*/
      if((count % 10) == 0){
        return true;
      }
      else {
        return false;
      }
    },  
  
maskify(tcNumber){
    return tcNumber.slice(0,-4).replace(/./g,"#") + tcNumber.slice(-4);
}

  };

export default validator;
