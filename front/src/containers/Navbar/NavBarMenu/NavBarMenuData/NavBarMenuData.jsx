import './navBatMenuData.css';
import { imgUrl } from '../../../../utils/images.utils.js';

const NavBatMenuData = ({ user }) => {

    return (
        <div className='navBatMenuData'>
            <div className='navBarMenuPortal'>
                <img src='/catWriting.png' alt="img" />
            </div>
            <div>
                <h4>{user.name}</h4>
                <h4 className='pgray'>{user.email}</h4>
            </div>
        </div>
    );
};

export default NavBatMenuData;