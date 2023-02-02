let arrayPedidos = [];
let btnForm = document.getElementById("btnFormulario");
let btndel = document.getElementById("delPedido")


const calcularMoneda = async (article) => {
    let moneda = document.getElementById("moneda").value;
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
    const data = await response.json();
    let taza = data.rates[moneda] * article.shippingValue;
    article.shippingValue = taza.toFixed() + " " + moneda;
}

const getStorage = function () {
    let arrayPedidos = JSON.parse(localStorage.getItem('arrayPedidos'));
    return arrayPedidos;
}

const setStorage = function (arrayPedidos) {
    localStorage.setItem('arrayPedidos', JSON.stringify(arrayPedidos));

}

const delPedido = function () {
    localStorage.clear();
    location.reload();
}

function validarPedido() {
    let name = document.getElementById("name").value;
    let weight = document.getElementById("weight").value;
    let type = document.getElementById("type").options[document.getElementById("type").selectedIndex].text;
    let nameError = document.getElementById("errorName");
    let weightError = document.getElementById("weightError");
    let formError = document.getElementById("formError");

    nameError.innerHTML = "";
    weightError.innerHTML = "";

    if (name.length < 1) return nameError.innerHTML = "Ingrese un valor para el Campo Nombre!";
    if (weight <= 0) return weightError.innerHTML = "Ingrese un peso mayor a 0!";
        else if (weight >= 20) return weightError.innerHTML = "Solo se permiten pedidos de maximo 20kg!";

    if (arrayPedidos.length < 5) {
        crearPedido(name,weight,type).then( () => {cargarPedido()});
        btndel.classList.add("formulario__submit");

    }
    else {
        formError.innerHTML = "Ya agregaste un máximo de 5 articulos.";

};
}

btnForm.addEventListener("click", validarPedido);
btndel.addEventListener("click", delPedido)
