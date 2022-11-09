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
                    <li><section class='productItem'><p>Set de macetas Pokemón</p><a href='http://localhost:8000/productos/detalle/2' target="_blank" ><i class="fa-solid fa-circle-info"></i></a></section></li>
                    <li><section class='productItem'><p>Set de macetas Pokemón</p><a href='http://localhost:8000/productos/detalle/2' target="_blank"><i class="fa-solid fa-circle-info"></i></a></section></li>
                    <li><section class='productItem'><p>Set de macetas Pokemón</p><a href='http://localhost:8000/productos/detalle/2' target="_blank"><i class="fa-solid fa-circle-info"></i></a></section></li>
                    <li><section class='productItem'><p>Set de macetas Pokemón</p><a href='http://localhost:8000/productos/detalle/2' target="_blank"><i class="fa-solid fa-circle-info"></i></a></section></li>
                </ul>
            </div>
        </article>
    )
}

export default CategoryCard