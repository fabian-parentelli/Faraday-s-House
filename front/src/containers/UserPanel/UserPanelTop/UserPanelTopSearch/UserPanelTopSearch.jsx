import './userPanelTopSearch.scss';
import { Link } from 'react-router-dom';
import { images } from '../../../../utils/images.js';
import AutoComplete from '../../../../components/utils/AutoComplete/AutoComplete.jsx';

const UserPanelTopSearch = () => { // Supongo que este componenete será algo que redireccione a secciónes 

    const options = [
        { label: 'Apple', id: 1 },
        { label: 'Banana', id: 2 },
        { label: 'Orange', id: 3 },
        { label: 'Grapes', id: 4 },
        { label: 'Pineapple', id: 5 },
    ];

    return (
        <div className='userPanelTopSearch'>
            <Link to={'/'}>
                <img src={images.ungryCat} alt="img" />
            </Link>

            <AutoComplete options={options} labelKey="label" />
        </div>
    );
};

export default UserPanelTopSearch;