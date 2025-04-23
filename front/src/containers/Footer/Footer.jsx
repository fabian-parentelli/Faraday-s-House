import './footer.css';
import { IconFacebook, IconX, IconYoutube, IconLinkedin, IconInstagram, IconNpm, IconMap } from 'faradays_comp';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className='footer'>

            <section className='footerSect'>
                <Link to={'/'}>
                    <img src="/logo.png" alt="img" />
                    <h2>La casa de Faraday</h2>
                </Link>
            </section>

            <section className='footerList'>

                <div>
                    <h4>Productos</h4>
                    <Link>Componentes</Link>
                    <Link>CataWeb</Link>
                    <Link>UnderPass</Link>
                    <Link>AudioFree</Link>
                </div>

                <div>
                    <h4>Plataforma</h4>
                    <Link>Nosotros</Link>
                    <Link>Noticias</Link>
                    <Link>Próximamente</Link>
                    <Link>Ayudas con el código</Link>
                </div>

                <div>
                    <h4>Interacción</h4>
                    <Link>Contacto</Link>
                    <Link>Comentarios</Link>
                </div>

            </section>

            <section className='footerSocial'>

                <div>
                    <a href='' target='_blank'><IconFacebook color='#ffff' size='30px' /></a>
                    <a href='https://x.com/FabianParentell' target='_blank'><IconX color='#ffff' size='30px' /></a>
                    <a href='https://www.youtube.com/@FabianParentelli' target='_blank'><IconYoutube color='#ffff' size='30px' /></a>
                    <a href='https://www.linkedin.com/in/fabian-parentelli-2608ba272' target='_blank'><IconLinkedin color='#ffff' size='30px' /></a>
                    <a href='https://www.instagram.com/fabianparentelli/' target='_blank'><IconInstagram color='#ffff' size='30px' /></a>
                </div>

                <div>
                    <a href="https://www.npmjs.com/package/faradays_comp?activeTab=readme" target='_blank'><IconNpm color='#ffff' size='30px' /></a>
                    <p>Componentes NPM</p>
                    <p></p>
                    <a><IconMap color='#ffff' size='30px' /></a>
                    <p>Buenos Aires - Argentina</p>
                </div>
            </section>

            <section className='footerEnd'>
                <p className='pgray'>© 2025 Fabián Parentelli</p>

                <div>
                    <Link className='pgray'>Privacidad</Link>
                    <Link className='pgray'>Términos y condiciones</Link>
                </div>
            </section>

        </div>
    );
};

export default Footer;