import './header.css';

const Header = () => {

    return (
        <div className='headerApp'>

            <section className='headerAppSect'>
                <div>
                    <h2>Innovación que se adapta,</h2>
                    <h2>Tecnología que conecta.</h2>
                </div>

                <p>La solución integral que permite la gestión y el control inteligente de tu empresa en un solo lugar.</p>

                <div className='headerAppSectButtons'>
                    <button className='btn btnB'>Demos</button>
                    <button className='btn btnC'>Contacto</button>
                </div>
            </section>

            <img src="/hover.png" alt="img" />
        </div>
    );
};

export default Header;