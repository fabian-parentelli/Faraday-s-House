import './searchInPage.scss';
import {  AutoComplete } from 'faradays_comp';

const SearchInPage = () => {

    const options = [
        { label: 'Apple', id: 1 },
        { label: 'Banana', id: 2 },
        { label: 'Orange', id: 3 },
        { label: 'Grapes', id: 4 },
        { label: 'Pineapple', id: 5 },
    ];

    return (
        <div className='searchInPage'>
            <AutoComplete options={options} labelKey='label' />
        </div>
    );
};

export default SearchInPage;

// acá obtener el valor y que me lleve a la sección.