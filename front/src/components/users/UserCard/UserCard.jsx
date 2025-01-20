import './userCard.scss';
import { images } from '../../../utils/images';

const UserCard = ({ user }) => {

    console.log(user);


    return (
        <div className='userCard'>
            <div className='userCardDivImg'>
                <img src={images.userPreset} alt="img" />
            </div>
            <h2>{user.name}</h2>
            <p className='pgray'>{user.email}</p>
            <p className='pgray'>{user.role === 'user' ? 'Usuario' : 'Administrador'}</p>
            <div className='line'></div>
        </div>
    );
};

export default UserCard;