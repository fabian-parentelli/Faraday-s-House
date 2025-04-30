import './theBooks.css';
import Icons from '../../../components/Icons/Icons';

const TheBooks = () => {

    return (
        <div className='theBooks'>

            <section className='theBooksTitle'>
                <h2 className='colA'>The Book</h2>
                <p>En estas páginas, he reunido una serie de códigos y recomendaciones que considero valiosas para cualquier persona que trabaje con programación. Desde fragmentos útiles hasta consejos prácticos, este libro busca ser un recurso directo y efectivo para tus desafíos diarios. ¡Adelante, explora y que te sea de provecho</p>

                <div className='theBooksTitleIcons'>
                    <Icons type='mongo' />
                    <Icons type='react' />
                    <Icons type='js' />
                    <Icons type='css' />
                    <Icons type='html' />
                </div>
            </section>

        </div>
    );
};

export default TheBooks;