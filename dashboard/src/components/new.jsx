import newStyle from '../css/new.module.css';
import NewProductCard from './newProductCard.jsx'
import NewUserCard from './newUserCard.jsx'


function New() {
    return (
        <main className={newStyle.newMain}>
            <h2 className={newStyle.newTitle}>Lo nuevo de Hanyou</h2>
            <section className={newStyle.cards}>
            <NewProductCard />
            <NewUserCard />
            </section>
        </main>

    );
}

export default New;