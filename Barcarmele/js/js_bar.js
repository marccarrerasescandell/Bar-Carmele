var producto = 0
var cantidad = 0
var prca = producto * cantidad
function cafe() {
  producto = 3;
  document.getElementById("producto").innerHTML = "Cafe"
}

function boton(x) {
  var myDiv = document.getElementById('cant');
  myDiv.innerHTML = parseFloat( myDiv.innerHTML) * 10 + x;
  cantidad = parseFloat( myDiv.innerHTML );
}

function btotal() {
  prca = producto * cantidad;
  document.getElementById("total").innerHTML = prca;
}

function borrar() {
  var myDiv = document.getElementById('cant');
  myDiv.innerHTML = parseFloat( myDiv.innerHTML) * 0;
  cantidad = parseFloat( myDiv.innerHTML );
}
function refresco() {
  producto = 2;
  document.getElementById("producto").innerHTML = "Refresco"
}
function patatas() {
  producto = 1;
  document.getElementById("producto").innerHTML = "Patatas"
}
