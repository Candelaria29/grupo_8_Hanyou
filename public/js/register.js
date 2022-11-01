let form = document.querySelector('#formularioDeRegistro');

form.addEventListener('submit', event => {
    
    event.preventDefault();
let errors = [];

let fisrtName = document.querySelector('#nombre');

if (fisrtName.value == "") {
    errors.push("El campo 'Nombre' no puede estar vacío.");
    fisrtName.classList.add('errorForm')
} else if (fisrtName.value.length < 2) {
    errors.push("El campo 'Nombre' debe tener al menos 2 caractéres.");
    fisrtName.classList.add('errorForm')
}

let lastName = document.querySelector('#apellido');

if (lastName.value == "") {
    errors.push("El campo 'Apellido' no puede estar vacío.");
    lastName.classList.add('errorForm')
} else if (lastName.value.length < 2) {
    errors.push("El campo 'Apellido' debe tener al menos 2 caractéres.");
    lastName.classList.add('errorForm')
}

let inputFile = document.querySelector('#imagenUsuario');
let file = inputFile.value;
    let acceptedExtensions = /(.jpg|.jpeg|.gif|.png)$/i;

    if(!acceptedExtensions.exec(file)) {
        errors.push('La imagen no es de un formato válido. Debe ser .jpg, .jpeg, .png, o .gif.');
    }

let email = document.querySelector('#email');

if (email.value == "") {
    errors.push("El campo 'Email' no puede estar vacío.");
    email.classList.add('errorForm')
} else if (!email.value.includes("@")) {
    errors.push("Por favor, ingrese un Email válido.");
    email.classList.add('errorForm')
}

let password = document.querySelector('#password');

if (password.value == "") {
    errors.push("El campo 'Contraseña' no puede estar vacío.");
    email.classList.add('errorForm')
} else if (password.value.length < 8) {
    errors.push("Su contraseña debe tener al menos 8 caractéres.");
    email.classList.add('errorForm')
}

if (errors.length > 0) {
    let errorsList = document.querySelector('div#errors ul');
    errors.forEach( error => errorsList.innerHTML += "<li> <i class='fa-solid fa-circle-exclamation'></i> " + error + "</li>")
} else {
    event.target.submit();
}
})
