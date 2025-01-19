import './userPanelTop.scss';
import UserPanelTopSearch from './UserPanelTopSearch/UserPanelTopSearch';

const UserPanelTop = () => {

    return (
        <div className='userPanelTop'>
            
            <UserPanelTopSearch />

            <section>
                <p>Icono</p>
                <p>Icono</p>
                <p>Icono</p>
                <p>Icono</p>
                <p>Icono</p>
            </section>

        </div>
    );
};

export default UserPanelTop;