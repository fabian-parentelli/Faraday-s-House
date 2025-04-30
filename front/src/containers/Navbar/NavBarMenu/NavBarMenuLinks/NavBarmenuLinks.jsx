import './navBarMenuLinks.css';
import { Link } from 'react-router-dom';
import Icons from '../../../../components/Icons/Icons';
import { useLoginContext } from '../../../../context/LoginContext';

const NavBarMenuLinks = () => {

    const { user } = useLoginContext();

    console.log(user.data);
    

    return (
        <div className='navBarMenuLinks'>

            <Link to={user.data.role !== 'user' ? '/dashboard' : '/panel'}>
                <Icons type='dashboard' color='gray' size='25px' />
                <p>Panel</p>
            </Link>

            <Link to={'/favorites'}>
                <Icons type='star' color='gray' size='25px' />
                <p>Favoritos</p>
            </Link>

            <Link to={'/messages'}>
                <Icons type='message' color='gray' size='25px' />
                <p>Mensajes</p>
            </Link>
            
            <Link to={'/panel/alerts'}>
                <Icons type='bell' color='gray' size='25px' />
                <p>Alertas</p>
            </Link>
            
            <Link to={'/panel/activity'}>
                <Icons type='run' color='gray' size='25px' />
                <p>Actividad</p>
            </Link>

        </div>
    );
};

export default NavBarMenuLinks;