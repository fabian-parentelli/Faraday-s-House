import './header.css';

const Header = () => {

    return (
        <div className='headerApp'>
            <img src="/leyendo.png" alt="img" />

            <section className='headerAppSect'>
                <h1>La Casa de Farday</h1>
                <p>Construyendo código por Fabián Parentelli.</p>
            </section>

        </div>
    );
};

export default Header;