import mainStyle from '../css/main.module.css';
import MainStats from './mainStats.jsx'
import Categories from './categories.jsx'

function Main() {
    return (
        <main className={mainStyle.main}>
            <h2 className={mainStyle.title1}>HOME</h2>
            <MainStats/>
            <h2 className={mainStyle.title2}>Categorías</h2>
            <Categories/>
        </main>
    )
}

export default Main