import ProductLinks from './productLinks.jsx'

function CategoryCard() {
    return (
        <article className="categoryCard">
            <div>
                <div class='catTitle'>
                    <p>Categoria</p>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <ul id='categoryList'>
                    {/* aca hay que hacer que cada link llegue al detalle del producto correspondiente */}
                    <ProductLinks />
                    <ProductLinks />
                    <ProductLinks />
                    <ProductLinks />
                </ul>
            </div>
        </article>
    )
}

export default CategoryCard