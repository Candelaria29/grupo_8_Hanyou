let form = document.querySelector('#createNewProductForm')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let errors = [];

    let inputFile = document.querySelector('#createNewProductDesign');
    let file = inputFile.value;
    let acceptedExtensions = /(.jpg|.jpeg|.gif|.png)$/i;

    if(!acceptedExtensions.exec(file) {
        errors.push('La imagen no es de un formato válido. Debe ser .jpg, .jpeg, .png, o .gif.');
    }

    let productName = document.querySelector('#createNewProductName');

    if (productName.value == "") {
        errors.push("El campo 'Nombre' no puede estar vacío");
        productName.classList.add('errorForm')
    } else if (productName.value.length < 5) {
        errors.push("El campo 'Nombre' debe tener al menos 5 caractéres");
        productName.classList.add('errorForm')
    }

    let description = document.querySelector('#c_eDescripcion');

    if (description.value == "") {
        errors.push("El campo 'Descripción' no puede estar vacío");
        description.classList.add('errorForm')
    } else if (description.value.length < 20) {
        errors.push("El campo 'Descripción' debe tener al menos 20 caractéres");
        description.classList.add('errorForm')
    }

    if (errors.length > 0) {
        let errorsList = document.querySelector('div#errors ul');
        errors.forEach(error => errorsList.innerHTML += "<li> <i class='fa-solid fa-circle-exclamation'></i> " + error + "</li>")
    } else {
        event.target.submit();
    }
})