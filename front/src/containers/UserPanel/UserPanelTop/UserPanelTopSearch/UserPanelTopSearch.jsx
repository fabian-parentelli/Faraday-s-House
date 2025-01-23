import './userPanelTopSearch.scss';
import { Link } from 'react-router-dom';
import { images } from '../../../../utils/images.js';
import SearchInPage from '../../../../components/utils/SearchInPage/SearchInPage.jsx';

const UserPanelTopSearch = () => {

    return (
        <div className='userPanelTopSearch'>
            
            <Link to={'/'}>
                <img src={images.ungryCat} alt="img" />
            </Link>

            <SearchInPage />
        </div>
    );
};

export default UserPanelTopSearch;