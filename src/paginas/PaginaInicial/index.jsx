import Cabecalho from "../../componentes/Cabecalho";
import Galeria from "../../componentes/Galeria";
import Menu from "../../componentes/Menu";
import Populares from "../../componentes/Populares";
import Rodape from "../../componentes/Rodape";
import banner from './banner.png'
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial(){
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria completa</h1>
                        <img src={banner} alt="" />
                    </div>
                </section>
                
            </main>
            <div className={styles.galeria}>
                <Galeria />
                <Populares />
            </div>
            <Rodape />
            
        </>
    )
}