import './userPanel.scss';
import { useEffect } from 'react';
import UserPanelTop from './UserPanelTop/UserPanelTop';
import UserPanelLeft from './UserPanelLeft/UserPanelLeft';
import { useLoginContext } from '../../context/LoginContext';

const UserPanel = () => {

    const { user } = useLoginContext()

    useEffect(() => {
        window.scrollBy({ top: 90, behavior: 'smooth' });
    }, []);

    return (
        <div className='UserPanel'>
            <UserPanelTop user={user} />
            {user.logged && <p className='UserPanelP'>Hola, <span className='colC'>{user.data.name}</span> !!!</p>  }
            <section className='UserPanelBody'>
                <UserPanelLeft user={user} />

                <p>Center</p>
                <p>Right</p>
            </section>

        </div>
    );
};

export default UserPanel;