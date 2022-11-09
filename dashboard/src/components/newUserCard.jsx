import logo from '../img/logo4.png';

function NewUserCard() {
    return (
        <article id='newUser'>
            <p id='newTitle'> Ultimo usuario </p>
            <picture><img src={logo}></img></picture>
            <div id='productInfo'>
                <p id='name'>Nombre del producto</p>
                <p id='price'>Precio del producto</p>
                <p id='description'>Descripción del producto</p>
            </div>
        </article>
    );
}

export default NewUserCard;