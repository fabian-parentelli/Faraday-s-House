import './dashIconBottomR.scss';
import { useEffect, useState } from 'react';
import { TextAreaExpand, Snackbar, Spinner } from 'faradays_comp';
import { newIconInfoApi } from '../../../../../helpers/icons/newIconInfo.api.js';
import { getIconsInfoApi } from '../../../../../helpers/icons/getIconsInfo.api.js';
import { updIconInfoApi } from '../../../../../helpers/icons/updIconInfo.api.js';

const DashIconBottomR = () => {

    const [values, setValues] = useState({ message: '', props: '', github: '', version: '', imports: '' });
    const [snack, setSnack] = useState({ open: false, message: '', status: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await getIconsInfoApi();            
            if (response.status === 'success') {
                const { message, props, github, version, imports, _id } = response.result;
                setValues({ message, props, github, version, imports, _id });
            } else setSnack({ open: true, message: response.error, status: 'error' });
        }; fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (snack.open) setSnack({ open: false, message: '', status: '' })
        let response;
        if(!values._id) response = await newIconInfoApi(values);
        else response = await updIconInfoApi(values);
        if (response.status === 'success') {
            setSnack({ open: true, message: 'Información guardada', status: 'success' });
        } else setSnack({ open: true, message: response.error, status: 'error' });
        setLoading(false);
    };

    return (
        <form className='dashIconBottomR' onSubmit={handleSubmit}>

            <section>

                <div>
                    <label>Importar</label>
                    <input
                        type="text" name='imports'
                        placeholder='Como imporrtar'
                        value={values.imports}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label style={{ textAlign: 'center' }}>Versión</label>
                    <input
                        type="text" name='version'
                        placeholder='0.0.0'
                        style={{ textAlign: 'center', width: '100px' }}
                        value={values.version}
                        onChange={handleChange}
                    />
                </div>

            </section>

            <section>

                <div>
                    <label>Ejemplo</label>
                    <TextAreaExpand
                        placeholder={'Código de ejemplo'}
                        value={values.message}
                        handleChange={handleChange}
                        name='message'
                        required={true}
                        style={{
                            width: '300px',
                            borderRadius: '3px',
                        }}
                    />
                </div>

                <div>
                    <label>Props</label>
                    <TextAreaExpand
                        placeholder={'Código de ejemplo'}
                        value={values.props}
                        handleChange={handleChange}
                        name='props'
                        required={true}
                        style={{
                            width: '450px',
                            borderRadius: '3px',
                            color: 'black'
                        }}
                    />
                </div>

            </section>

            <section>
                <button className='btn btnB'>{loading ? <Spinner size='25px' color='black' /> : 'Actualizar'}</button>
                <input
                    type="text" name='github' onChange={handleChange}
                    style={{ width: '76%' }} value={values.github}
                    placeholder='GitHub'
                />
            </section>

            <Snackbar snack={snack} />
        </form>
    );
};

export default DashIconBottomR;