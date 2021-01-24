let a;
let b;
let operacion;

function init() {
  //variables
  let resultado = document.getElementById("resultado");
  let reset = document.getElementById("reset");
  let suma = document.getElementById("suma");
  let resta = document.getElementById("resta");
  let multiplicacion = document.getElementById("multiplicacion");
  let division = document.getElementById("division");
  let igual = document.getElementById("igual");
  let uno = document.getElementById("uno");
  let dos = document.getElementById("dos");
  let tres = document.getElementById("tres");
  let cuatro = document.getElementById("cuatro");
  let cinco = document.getElementById("cinco");
  let seis = document.getElementById("seis");
  let siete = document.getElementById("siete");
  let ocho = document.getElementById("ocho");
  let nueve = document.getElementById("nueve");
  let cero = document.getElementById("cero");

  //eventos de click
  uno.addEventListener("click", function() {
    resultado.textContent = resultado.textContent + "1";
  });

  dos.addEventListener("click", function() {
    resultado.textContent = resultado.textContent + "2";
  });

  tres.addEventListener("click", function() {
    resultado.textContent = resultado.textContent + "3";
  });

  cuatro.addEventListener("click", function() {
    resultado.textContent = resultado.textContent + "4";
  });
 
  cinco.addEventListener("click", function() {
    resultado.textContent = resultado.textContent + "5";
  });

  seis.addEventListener("click", function() {
    resultado.textContent = resultado.textContent + "6";
  });

  siete.addEventListener("click", function() {
    resultado.textContent = resultado.textContent + "7";
  });

  ocho.addEventListener("click", function() {
    resultado.textContent = resultado.textContent + "8";
  });

  nueve.addEventListener("click", function() {
    resultado.textContent = resultado.textContent + "9";
  });

  cero.addEventListener("click", function() {
    resultado.textContent = resultado.textContent + "0";
  });

  reset.addEventListener("click", function() {
    resetear();
  });
 
  suma.addEventListener("click", function() {
    a = resultado.textContent;
    operacion = "+";
    limpiar();
  });
 
  resta.addEventListener("click", function() {
    a = resultado.textContent;
    operacion = "-";
    limpiar();
  });

  multiplicacion.addEventListener("click", function() {
    a = resultado.textContent;
    operacion = "*";
    limpiar();
  });

  division.addEventListener("click", function() {
    a = resultado.textContent;
    operacion = "/";
    limpiar();
  });
  igual.addEventListener("click", function() {
    b = resultado.textContent;
    resolver();
  });
}

function limpiar() {
  resultado.textContent = "";
}

function resetear() {
  resultado.textContent = "";
  a = 0;
  b = 0;
  operacion = "";
}

function resolver() {
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(a) + parseFloat(b);
      break;

    case "-":
      res = parseFloat(a) - parseFloat(b);
      break;

    case "*":
      res = parseFloat(a) * parseFloat(b);
      break;

    case "/":
      res = parseFloat(a) / parseFloat(b);
      break;
  }
  resetear();
  resultado.textContent = res;
}
