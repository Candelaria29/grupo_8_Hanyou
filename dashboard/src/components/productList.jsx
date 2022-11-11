import '../css/productList.css'
import SingleProduct from './singleProduct';

function ProductList (){
    return (
    <main id= 'listMain'>
        <h1 id='listTitle'>Todos los productos</h1>
        <section id='list'>
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>
        </section>

    </main>)

}

export default ProductList;