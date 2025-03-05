import './navBar.css';
import { useState } from 'react';
import { IconUser } from 'faradays_comp';
import Nav from '../../components/Nav/Nav';
import NavItems from '../../components/utils/NavItems/NavItems';

const NavBar = () => {

    const [data, setData] = useState(null);

    return (
        <Nav>
            <div className='navBar'>

                <section>
                    <img src="/logo.png" alt="img" />
                    <h1>La Casa de<br />Faraday</h1>
                </section>

                <section className='navBarSect'>
                    <NavItems title='Productos' items={items} setData={setData} />
                    <NavItems title='Plataforma' items={apps} setData={setData} />
                    <a href="">Contacto</a>

                    <div className='navBarDiv'>
                        <IconUser size='20px' />
                    </div>
                </section>

            </div>
        </Nav>
    );
};

export default NavBar;

const items = [
    { label: 'Componentes' },
    { label: 'CataWeb' },
    { label: 'UnderPass' },
    { label: 'AudioFree' },
];

const apps = [
    { label: 'Nosotros' },
    { label: 'Noticias' },
    { label: 'Próximamente' },
];