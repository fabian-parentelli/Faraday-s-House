import './searchIcons.scss';
import { useState } from 'react';
import { AutoComplete } from 'faradays_comp';

const SearchIcons = ({ options, setData }) => {


    return (
        <div>
            <AutoComplete
                options={options || []}
                labelKey='name'
                setData={setData}
                style={{
                    width: '300px',
                    height: '50px',
                    placeholder: 'Buscar iconos'
                }}
            />
        </div>
    );
};

export default SearchIcons;