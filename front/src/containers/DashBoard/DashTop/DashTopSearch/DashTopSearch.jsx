import './dashTopSearch.scss';
import { useState } from 'react';
import { AutoComplete } from 'faradays_comp';

const DashTopSearch = () => {

    const [data, setData] = useState(null);

    const options = [
        { label: 'Apple', id: 1 },
        { label: 'Banana', id: 2 },
        { label: 'Orange', id: 3 },
        { label: 'Grapes', id: 4 },
        { label: 'Pineapple', id: 5 },
    ];

    return (
        <div className='dashTopSearch'>
            <AutoComplete options={options} labelKey='label' style={{width: '800px'}} />
        </div>
    );
};

export default DashTopSearch;