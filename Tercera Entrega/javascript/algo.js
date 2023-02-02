


// /* Para obtener el texto */

// alert(selected);

let arrayPedidos = [];

//Hay un array vacio de pedidos que se llena en la calculadora

//Los pedidos tienen nombre, peso, precio, costo de envio, estado y tipo de franquicia
//document.getItemById("name/weight")

//franquicia al estar no seleccionada tiene el valor: "Sin franquicia"

// const articulo = {
//   costoEnvio: 0,
//   nombre: "",
//   valor: 0,
//   peso: 0,
//   id: arrayPedidos.length + 1,
// }


    

function validarPedido() {
  let name = document.getElementById("name").value;
  let weight = parseIntdocument.getElementById("weight");
  let type = document.getElementById("type").options[document.getElementById("type").selectedIndex].text;
  
  //Campos de errores
  let nameError = document.getElementById("errorName");
  let weightError = document.getElementById("weightError");
  let formulario = document.getElementById("form");

  
  if (name.length <= 5) {
    nameError.innerHTML = "Ingrese un valor para el Campo Nombre!";
    return false;
    }
    else if (parseInt(weight.value) <= 0) {
    weightError.innerHTML = "Ingrese un peso mayor a 0!";
    return false;
  } else {
    
    let value = parseInt(weight.value)*20;

    let discount = (parseInt(weight.value)%0.5) ? parseInt(weight.value) : (parseInt(weight.value)-(parseInt(weight.value)%0.5)) * 6; //Hace 3 dolares de descuento cada 500 gramos
    discount = discount % 3 ? discount : discount-(discount % 3); //Verifica que sea un multiplo de 500 gramos

    const article = {
        name : name,
        weight: parseInt(weight.value),
        type: type,
        shippingValue: value-discount,
    }
    alert(article.name+"\n"+article.weight+"\n"+article.type+"\n"+article.shippingValue+"\n");
    weightError.innerHTML = "";

  }

  }

let btnForm = document.getElementById("btnFormulario");
btnForm.addEventListener("click", validarPedido);

