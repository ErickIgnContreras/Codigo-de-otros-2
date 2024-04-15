var formulario = document.querySelector("#form")

formulario.onsubmit = function(e) {

  e.prevent();
  // nombre de las variables no es claro  n= nombre , e= edad , na= nacionalidad
  var nombre = formulario.elements[0].value;// se agrego avalue a la funcion y se cerro con ; 
  var edad = formulario.elements[1].value;
  var nacionalidad = formulario.elements[2].value;

  /*var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value*/
  console.log(nombre, edad)
  console.log(nacionalidad)
// se corrigio el if else
  if (nombre.length === 0) {
    formulario.elements[0].classList.add("error");
  } else {
    formulario.elements[0].classList.remove("error");
  }

  if (edad < 18 || edad > 120) {
    formulario.elements[1].classList.add("error");
  } else {
    formulario.elements[1].classList.remove("error");
  }

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
    formulario.reset();
  }
};

// Funciona de la line a 33 a la 53 correctamente
/*var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"//
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);
*/

// Función para agregar un invitado a la lista
function agregarInvitado(nombre, edad, nacionalidad) {
  var nacionalidadTexto = "";
  
  if (nacionalidad === "ar") {
    nacionalidadTexto = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidadTexto = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidadTexto = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidadTexto = "Peruana";
  }


var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)
/* Esta repetido  en la linea 71
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio) */

function crearElemento(descripcion, nombre) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

botonBorrar.onclick = function() {
  elementoLista.remove();
  };
}