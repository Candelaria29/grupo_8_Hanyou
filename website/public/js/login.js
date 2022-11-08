let form = document.querySelector('#loginBox')

form.addEventListener('submit', event => {
event.preventDefault();
let errors = [];

let email = document.querySelector('#userEmail');

if (email.value == "") {
    errors.push("El campo 'Correo electrónico' no puede estar vacío.");
    email.classList.add('errorForm')
} else if (!email.value.includes('@')) {
    errors.push("Por favor, ingrese un Email válido.");
    email.classList.add('errorForm')
}

let password = document.querySelector('#passwordLogin');

if (password.value == ""){
    errors.push("El campo 'Contraseña' no puede estar vacío.");
    password.classList.add('errorForm')
}

console.log(errors);

if (errors.length > 0) {
    let errorsList = document.querySelector('div#errors ul');
    errors.forEach( error => errorsList.innerHTML += "<li> <i class='fa-solid fa-circle-exclamation'></i> " + error + "</li>")
} else {
    event.target.submit();
}
}
)