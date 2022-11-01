let form = document.querySelector('#formularioDeRegistro');

form.addEventListener('submit', event => {
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

let file = document.querySelector('#imagenUsuario');

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
    event.preventDefault();
    let errorsList = document.querySelector('div#errors ul');
    errors.forEach( error => errorsList.innerHTML += "<li class='error'> " + error + "</li>")
}
})