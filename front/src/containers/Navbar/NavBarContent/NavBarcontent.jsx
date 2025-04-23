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
                <img src="/carrot.png" alt="img" />
                <h1>Under<span>Pass</span></h1>
            </Link>

            <section className='navBarContentSect'>

                <MenuItems title='Información' list={informations} icons='info' />
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
    { text: 'Guia de funcionamiento', route: '/helps' },
    { text: 'Quiénes somos', route: '/us' },
    { text: 'Videos tutoriales', route: '/videotut' },
    { text: 'Noticias y avances', route: '/ournews' },
    { text: 'Próximamente en UnderPass', route: '/advance' },
    { text: 'Preguntas frecuentes', route: '/asked' }
];

const apps = [
    { text: 'Crear eventos', route: '/newevent' },
    { text: 'Presets para eventos', route: '/presets' },
    { text: 'Ponerme en contacto', route: '/contact' },
    { text: 'Logotipos', route: '/logstype' },
    { text: 'Precios', route: '/prices' },
];