import './header.css';

const Header = () => {

    return (
        <div className='headerApp'>
            <img src="/leyendo.png" alt="img" />

            <section className='headerAppSect'>
                <h1>La Casa de Farday</h1>
                <p>Innovación que se adapta,</p>
                <p style={{marginTop: '6px'}}>Tecnología que conecta.</p>
            </section>

        </div>
    );
};

export default Header;