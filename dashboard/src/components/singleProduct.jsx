import logo from '../img/logo4.png';

function SingleProduct (){
    return (
            <article id='product'>
            <picture id= 'listImg'><img src={logo}></img></picture>
            <div id='listInfo'>
                <p id='name'>Set de macetas Pokemón</p>
                <p id='price'>$3500.00</p>
            </div>
            </article>
    )
}

export default SingleProduct;