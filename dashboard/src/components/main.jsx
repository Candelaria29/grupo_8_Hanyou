import '../css/main.css';
import MainStats from './mainStats.jsx'
import Categories from './categories.jsx'

function Main() {
    return (
        <main id='main'>
            <h2 id='title1'>HOME</h2>
            <MainStats/>
            <h2 id='title2'>Categorías</h2>
            <Categories/>
        </main>
    )
}

export default Main