import './navBarContent.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarMenu from '../NavBarMenu/NavBarMenu';
import Icons from '../../../components/Icons/Icons';
import { useLoginContext } from '../../../context/LoginContext';
import Tooltip from '../../../components/tools/Tooltip/Tooltip.jsx';
import MenuItems from '../../../components/utils/MenuItems/MenuItems.jsx';

const NavBarContent = () => {

    const { user, current } = useLoginContext();

    useEffect(() => { current() }, []);

    return (
        <div className='navBarContent'>

            <Link to={'/'}>
                <img src="/logo.png" alt="img" />
                <div className='navBarContentTitle'>
                    <h1>Faraday</h1>
                    <p>La casa de</p>
                </div>
            </Link>

            <section className='navBarContentSect'>

                <MenuItems title='Productos' list={informations} icons='info' />
                <MenuItems title='Plataforma' list={apps} icons={'app'} />

                {!user.logged ?
                    <div style={{ paddingRight: '1.2rem' }}>
                        <Tooltip text='Iniciar sesión' position='bottom'>
                            <Link to={'/login'}>
                                <Icons type='user' color='#EAEBEF' hover={true} />
                            </Link>
                        </Tooltip>
                    </div>
                    : <NavBarMenu user={user.data} />
                }

            </section>
        </div>
    );
};

export default NavBarContent;

const informations = [
    { text: 'Under Pass', route: '/underpass' },
    { text: 'Catalina', route: '/cata' },
    { text: 'Componentes', route: '/comp' },
    { text: 'En desarrollo', route: '/dev' },
    { text: 'Noticias', route: '/news' },
];

const apps = [
    { text: 'Ponerme en contacto', route: '/contact' },
    { text: 'Logotipos', route: '/logstype' },
    { text: 'Precios', route: '/prices' },
];