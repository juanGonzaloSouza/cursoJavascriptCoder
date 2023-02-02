const articulo = {
    nombre: "",
    valor: 0,
    peso: 0
}
do {
    if (articulo.nombre == "") {
        articulo.nombre = prompt("Ingresa el nombre del articulo");
    }
    if ((articulo.valor == 0) || (isNaN(articulo.valor))) {
        articulo.valor = parseInt(prompt("Ingresa el valor de tu articulo"));
    }
    if ((articulo.peso == 0) || (isNaN(articulo.peso))) {
        articulo.peso = parseInt(prompt("Ingresa el peso en kilogramos de tu articulo"));
    }

} while ((articulo.nombre == "") || (articulo.valor.length == 0) || (isNaN(articulo.valor)) || (articulo.peso.length == 0)  || (isNaN(articulo.peso)));

console.log(articulo);



function calculoPeso(peso) {
    if ((peso > 0) && (peso < 20)) {
        if (peso <= 0.5) {
            costoEnvio = 8.99;
        } else if (peso <= 0.8) {
            costoEnvio = 12.99;
        } else if (peso >= 1) {
            costoEnvio = peso * 20;
        }
    } else if(peso <= 0){
        alert("El valor debe de ser positivo")
    }
     else {
        alert("El peso debe ser menor a 20 kilogramos")
    }
    return costoEnvio;
}

costoEnvio = calculoPeso(articulo.peso);

function precioTotal(costoEnvio, nombre, valor, peso) {
    let costoTotal = "El costo del envío de tu " + nombre + " con peso de " + peso +" kilogramos es de: $" + costoEnvio + " dolares. \nEl valor total del producto y el envío es de: $" + (costoEnvio + valor) + " dolares.";
    alert(costoTotal);
}

precioTotal(costoEnvio, articulo.nombre, articulo.valor, articulo.peso);


