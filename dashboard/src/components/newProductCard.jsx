import logo from '../img/logo4.png';

function NewProductCard() {
    return (
        <article id='newCard'>
            <p id='newTitle'> Ultimo producto </p>
            <picture id= 'newImg'><img src={logo}></img></picture>
            <div id='info'>
                <p id='name'>Set de macetas Pokemón</p>
                <p id='price'>$3500.00</p>
                <p id='description'>Combiná tu amor por las plantas y Pokemón con este set de macetas de Bulbasaur y Oddish.</p>
            </div>
        </article>

    );
}

export default NewProductCard;