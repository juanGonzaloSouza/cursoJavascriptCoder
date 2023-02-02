
let arrayPedidos = [];


function validarPedido() {
  let name = document.getElementById("name").value;
  let weight = document.getElementById("weight").value;
  let type = document.getElementById("type").options[document.getElementById("type").selectedIndex].text;

  //Campos de errores
  let nameError = document.getElementById("errorName");
  let weightError = document.getElementById("weightError");
  let formulario = document.getElementById("form");


  if (name.length < 1) {
    nameError.innerHTML = "Ingrese un valor para el Campo Nombre!";
    return false;
  } else {
    nameError.innerHTML = "";
  }

  if (isNaN(weight)) {
    weightError.innerHTML = "Ingrese un valor numerico para el Campo Peso!";
    return false;
  } else if (weight <= 0) {
    weightError.innerHTML = "Ingrese un peso mayor a 0!";
    return false;

  } else {
    weightError.innerHTML = "";
  }

  let value = weight * 20;
  let discount = weight * 6; //Hace 3 dolares de descuento cada 500 gramos
  discount = discount % 3 ? discount : 0; //Verifica que sea un multiplo de 500 gramo
  const article = {
    name: name,
    weight: weight,
    shippingValue: value - discount,
    type: type,
    state: "Almacenado",
    id: 0,

  }
  arrayPedidos.push(article);
  localStorage.setItem('arrayPedidos', JSON.stringify(arrayPedidos[0]))
  window.location.href = "./pedidos.html";
}
let btnForm = document.getElementById("btnFormulario");
btnForm.addEventListener("click", validarPedido);
