import './navBarMenu.css';
import { Link } from 'react-router-dom';
import { IconUser } from 'faradays_comp';

const NavBarMenu = () => {

    // trabajar -- Si esta logeado que me lleve al menu del usuario.

    return (
        <div className='navBarMenu'>

            <Link to={'/login'} className='navBarDiv'>
                <IconUser size='20px' />
            </Link>

        </div>
    );
};

export default NavBarMenu;