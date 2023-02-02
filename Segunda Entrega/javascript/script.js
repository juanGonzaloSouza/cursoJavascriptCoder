















let arrayPedidos = [];

const crearPedido = function () {
  while (true) {
    cantidadArticulos = parseInt(prompt("Ingresa cantidad de pedidos."));
    if (cantidadArticulos > 5) {
      alert("El maximo de articulos que aceptamos son 5 por consolidación.");
      continue;
    }
    if (cantidadArticulos <= 0) {
      alert("El minimo permitido es uno.");
      continue;
    }
    if (isNaN(cantidadArticulos)) {
      continue;
    }
    break;
  }
  for (let i = 0; i < cantidadArticulos; i++) {
    const articulo = {
      costoEnvio: 0,
      nombre: "",
      valor: 0,
      peso: 0,
      id: arrayPedidos.length + 1,
    };
    while (true) {
      if (articulo.nombre == "") {
        articulo.nombre = prompt( (i +1) +") Ingresa el nombre del articulo.");
        continue;
      }
      if (articulo.valor == 0 || isNaN(articulo.valor)) {
        articulo.valor = parseFloat(prompt( (i +1) +") Ingresa el valor de tu articulo."));
        continue;
      }
      if (articulo.peso == 0 || isNaN(articulo.peso)) {
        articulo.peso = parseFloat(
          prompt( (i +1) +") Ingresa el peso en kilogramos de tu articulo.")
        );
        continue;
      }
      break;
    }
    articulo.costoEnvio = calculoPeso(articulo.peso);
    arrayPedidos.push(articulo);
  }
};
crearPedido();

function calculoPeso(peso) {
  let costoEnvio;
  if (peso <= 0.5) {
    costoEnvio = 8.99;
  } else if (peso <= 0.8) {
    costoEnvio = 12.99;
  } else if (peso >= 1) {
    costoEnvio = peso * 20;
  }

  let costo = costoEnvio;
  return costo;
}

function rellenoPedido() {
  for (let i = 0; i < arrayPedidos.length; i++) {
    const articulo = arrayPedidos[i];
    function precioTotal({ costoEnvio, nombre, valor, peso }) {
      let mensajeCostoEnvio =
        "El costo del envío de tu " +
        nombre +
        " con peso de " +
        peso +
        " kilogramos es de: $" +
        costoEnvio +
        " dolares. \nEl valor total del producto y el envío es de: $" +
        (costoEnvio + valor) +
        " dolares.";
      alert(mensajeCostoEnvio);
    }

    precioTotal(articulo);
  }
}
rellenoPedido();

function eliminarPedido(datosArticulo) {
  let articuloEliminado = "";

  while (true) {
    articuloEliminado = parseInt(
      prompt(
        datosArticulo +
          "\nSelecciona la id del articulo a eliminar. \n Escribe 0 para cancelar."
      )
    );
    if (articuloEliminado == 0) {
      break;
    }
    if (articuloEliminado == "") {
      articuloEliminado = parseInt(
        prompt(
          datosArticulo +
            "\nSelecciona la id del articulo a eliminar. \n Escribe 0 para cancelar."
        )
      );
      continue;
    }
    if (isNaN(articuloEliminado)) {
      articuloEliminado = parseInt(
        prompt(
          datosArticulo +
            "\nSelecciona la id del articulo a eliminar. \n Escribe 0 para cancelar."
        )
      );
      continue;
    }
    if (!isNaN(articuloEliminado)) {
      arrayPedidos.splice(articuloEliminado - 1, 1);
      alert("Eliminado correctamente.");
      break;
    }
    break;
  }
}
function verPedidos() {
  let datosArticulo = "";
  for (let i = 0; i < arrayPedidos.length; i++) {
    datosArticulo +=
      i +
      1 +
      ") ID: " +
      arrayPedidos[i].id +
      " " +
      arrayPedidos[i].nombre +
      " con costo de envío de: " +
      arrayPedidos[i].costoEnvio +
      "$. \n";
  }
  return datosArticulo;
}
let datosArticulo = verPedidos();
eliminarPedido(datosArticulo);

console.log(arrayPedidos);
