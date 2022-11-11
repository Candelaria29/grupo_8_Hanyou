import logo from '../img/logo4.png';

function NewUserCard() {
    return (
        <article id='newCard'>
            <p id='newTitle'> Ultimo usuario </p>
            <picture id= 'newImg'><img src={logo}></img></picture>
            <div id='info'>
                <p id='userName'>Nombre Apellido</p>
                <p id='rol'>Rol: Administrador</p>
                <p id ='email'>Email: email@hotmail.com</p>
            </div>
        </article>
    );
}

export default NewUserCard;