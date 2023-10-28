window.alert("Bienvenido Ing. Miguel Angel  Guatame Medina al sitio web del estudiante Ivan Dario Camargo Forigua");

var colores = ["black", "red", "blue", "green", "#9fedf3", "yellow", "white"];
var indiceColor = 0;

function fondo2() {
  document.getElementById("fondo").style.backgroundColor = colores[indiceColor];
  indiceColor = (indiceColor + 1) % colores.length;
}