import './userPanelTop.scss';
import { Link } from 'react-router-dom';

import UserPanelTopSearch from './UserPanelTopSearch/UserPanelTopSearch';
import { IconApp, IconBag, IconBell, IconHome, IconMessage, IconNetworks } from 'faradays_comp';

const UserPanelTop = ({ user }) => {

    return (
        <div className='userPanelTop'>

            <UserPanelTopSearch />

            <section className='userPanelTopSect'>

                <Link className='userPanelTopIc'>
                    <IconHome size='35px' color='#fff' />
                    <p>Home</p>
                </Link>

                <Link className='userPanelTopIc'>
                    <IconNetworks size='35px' color='#fff' />
                    <p>Red</p>
                </Link>

                <Link className='userPanelTopIc'>
                    <IconBag size='35px' color='#fff' />
                    <p>Trabajo</p>
                </Link>

                <Link className='userPanelTopIc'>
                    <IconMessage size='35px' color='#fff' />
                    <p>Mensajes</p>
                </Link>

                <Link className='userPanelTopIc'>
                    <IconBell size='35px' color='#fff' />
                    <p>Alertas</p>
                </Link>

                <div className='lineHeight'></div>

                {user.logged && user.role !== 'user' &&
                    <Link className='userPanelTopIc'>
                        <IconApp size='35px' color='#fff' />
                        <p>Admin</p>
                    </Link>
                }

            </section >

        </div >
    );
};

export default UserPanelTop;