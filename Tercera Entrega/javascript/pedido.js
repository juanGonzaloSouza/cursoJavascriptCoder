window.addEventListener('load', cargarPedidos());


function cargarPedidos() {
    let arrayPedidos = JSON.parse(localStorage.getItem('arrayPedidos'))
    if (arrayPedidos){
    let container = document.getElementById("cards");
    let article = document.createElement("article");
    let div = document.createElement("div");

    let pName = document.createElement("p");
    let pIcon = document.createElement("i");
    let pId = document.createElement("p");
    let pCost = document.createElement("p");
    let pState = document.createElement("p");

    article.className += "card";
    pIcon.className += "fa-solid fa-gear";

    pName.innerHTML = "Articulo: " + arrayPedidos.name;
    pId.innerHTML = "ID: " + 01;
    pCost.innerHTML = "Costo de envío: " + arrayPedidos.shippingValue + " US$";
    pState.innerHTML = "Estado: " + arrayPedidos.state;

    container.appendChild(article);
    article.appendChild(div);
    div.appendChild(pName);
    div.appendChild(pId);
    div.appendChild(pCost);
    div.appendChild(pState);
    div.appendChild(pIcon);


}
}