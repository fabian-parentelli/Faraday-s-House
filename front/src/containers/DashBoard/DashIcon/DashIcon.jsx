import { useState } from 'react';
import './dashIcon.scss';
import DashIconBottom from './DashIconBottom/DashIconBottom';

import DashIconPost from './DashIconPost/DashIconPost';

const DashIcon = () => {

    const [counter, setCounter] = useState(0);

    return (
        <div className='dashIcon'>
            <h2>Iconos</h2>
            <DashIconPost counter={counter} setCounter={setCounter} />
            <DashIconBottom counter={counter} />
        </div>
    );
};

export default DashIcon;