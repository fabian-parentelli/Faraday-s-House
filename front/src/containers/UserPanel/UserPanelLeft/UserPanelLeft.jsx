import './userPanelLeft.scss';
import UserCard from '../../../components/users/UserCard/UserCard';

const UserPanelLeft = ({ user }) => {

    return (
        <div className='userPanelLeft'>
            <UserCard user={user.data} />
        </div>
    );
};

export default UserPanelLeft;