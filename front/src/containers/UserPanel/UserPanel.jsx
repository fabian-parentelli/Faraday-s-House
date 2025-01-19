import './userPanel.scss';
import { useEffect } from 'react';
import UserPanelTop from './UserPanelTop/UserPanelTop';

const UserPanel = () => {

    useEffect(() => {
        window.scrollBy({ top: 90, behavior: 'smooth' });
    }, []);

    return (
        <div className='UserPanel'>
            <UserPanelTop />
        </div>
    );
};

export default UserPanel;