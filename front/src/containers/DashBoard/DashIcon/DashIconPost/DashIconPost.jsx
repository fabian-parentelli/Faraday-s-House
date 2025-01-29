import './dashIconPost.scss';
import { useState } from 'react';
import { Spinner } from 'faradays_comp';
import { newIconApi } from '../../../../helpers/icons/newIcons.api.js';

const DashIconPost = ({ counter, setCounter }) => {

    const [values, setValues] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChage = (e) => setValues(e.target.value);

    const handleForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await newIconApi({ name: values });
        if (response.status === 'success') {
            setCounter(counter + 1)
            setValues('');
        } else console.error(response);
        setLoading(false);
    };

    return (
        <div className='dashIconPost'>

            <form className='dashIconPostForm' onSubmit={handleForm}>
                <div>
                    <label>Nómbre del ícono</label>
                    <input type="text" placeholder='Nombre exacto del Icono' onChange={handleChage} value={values || ''} />
                </div>
                <button className='btn btnA'>{loading ? <Spinner size='25px' color='black' /> : 'Agregar'}</button>
            </form>

            <div className="dashIconPostCode">

                <div style={{ color: '#ffa372' }} className='dashIconPostDiv'>
                    <div>&lt;<span style={{ color: '#5ccb5f' }}>{values ? values : 'Icono'}</span></div>
                    <div><span style={{ color: '#2196f3' }}>color=</span>"black"</div>
                    <div><span style={{ color: '#2196f3' }}>size=</span>"50px"</div>
                    <div><span style={{ color: '#2196f3' }}>onClick=</span>'handle..'</div>
                    <div><span style={{ color: '#2196f3' }}>backCol=</span>"green"</div>
                    <div><span style={{ color: '#2196f3' }}>bold=</span>{1}/&gt;</div>
                </div>

            </div>

        </div>
    );
};

export default DashIconPost;