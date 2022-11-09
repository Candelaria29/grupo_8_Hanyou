import '../css/new.css';
import NewProductCard from './newProductCard.jsx'
import NewUserCard from './newUserCard.jsx'


function New() {
    return (
        <main id='newMain'>
            <h2 id='newTitle'>Lo nuevo de Hanyou</h2>
            <section id='cards'>
            <NewProductCard />
            <NewUserCard />
            </section>
        </main>

    );
}

export default New;