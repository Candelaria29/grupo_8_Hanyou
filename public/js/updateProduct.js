let form = document.querySelector('#editProductForm')

form.addEventListener('submit', function (event) {
let errors = [];

let inputFile = document.querySelector('#createNewProductDesign');


let productName = document.querySelector('#createNewProductName');

if (productName.value == "") {
    errors.push("El campo 'Nombre' no puede estar vacío!");
    productName.classList.add('errorForm')
} else if (productName.value.length < 5) {
    errors.push("El campo 'Nombre' debe tener al menos 5 caractéres!");
    productName.classList.add('errorForm')
}

let description = document.querySelector('#c_eDescripcion');

if (description.value == "") {
    errors.push("El campo 'Descripción' no puede estar vacío!");
    description.classList.add('errorForm')
} else if (description.value.length < 20) {
    errors.push("El campo 'Descripción' debe tener al menos 20 caractéres!");
    description.classList.add('errorForm')
}

if (errors.length > 0) {
    event.preventDefault();
    let errorsList = document.querySelector('div#errors ul');
    errors.forEach( error => errorsList.innerHTML += "<li class='error'> " + error + "</li>")
}
})