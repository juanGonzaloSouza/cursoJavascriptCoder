
let sendBtn = document.getElementById("sendBtn");

const crearPedido = async function (name, weight, type) {
    const article = {
        name: name,
        weight: weight,
        shippingValue: weight * 20 - weight * 6,
        type: type,
        state: "Almacenado",
        id: arrayPedidos.length + 1,
    }
    await calcularMoneda(article);
    arrayPedidos.push(article)
    setStorage(arrayPedidos);

}



const cargarPedido = function () {
    let arrayPedidos = getStorage();
    if (arrayPedidos) {
        let container = document.getElementById("cards");
        let modalHeader = document.getElementById("modalHeader");
        let contenido = ""
        arrayPedidos.forEach((article) => {
            contenido += `
            <div class="card">
                <div> 
                    <p>Articulo: ${article.name}</p>
                    <p>ID: ${article.id}</p>
                    <p>Costo de envío: ${article.shippingValue}</p>
                    <p>Estado: ${article.state} </p> 
                    <button class="myBtn"><i class="fa-solid fa-gear"></i></button>
                </div>
            </div>`;
        });
        container.innerHTML = contenido;
        modalHeader.innerHTML = arrayPedidos.name;

        window.scrollBy({ top: window.innerHeight, left: 0, behaviour: 'smooth' })
    }

}

const enviarPedido = function () {
    let arrayPedidos = getStorage();
    arrayPedidos.state = "Preparando Envío";
    setStorage(arrayPedidos)

}

sendBtn.addEventListener("click", enviarPedido);
window.addEventListener("DOMContentLoaded", cargarPedido)