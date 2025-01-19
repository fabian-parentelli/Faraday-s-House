import './whatEmail.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../../utils/images.js';
import Loader from '../../../components/utils/Loader/Loader';
import Snackbar from '../../../components/utils/SnackBar/SnackBar';
import UserForm from '../../../components/users/UserForm/UserForm';
import { recoverPassApi } from '../../../helpers/users/recoverPass.api.js';

const WhatEmail = () => {

    const [values, setValues] = useState({ email: '' });

    const [snack, setSnack] = useState({ open: false, message: '', status: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await recoverPassApi(values);
        if (response.status === 'success') setSnack({ open: true, message: 'Enviamos un correo a tu email', status: 'success' });
        else setSnack({ open: true, message: response.error, status: 'error' });
        setLoading(false);
        setTimeout(() => { setSnack({ open: false, message: '', status: '' }) }, 4000);
    };

    return (
        <div className='whatEmail'>
            <div className='userRegisterDiv'>

                <section className='userregisterLeft'>
                    <h2 className='colA'>Cual es tu email</h2>
                    <UserForm
                        values={values}
                        setValues={setValues}
                        handleSubmit={handleSubmit}
                        nameButton='Enviar'
                        nam={false}
                        pass={false}
                    />
                </section>

                <section className='userregisterRight'>
                    <Link to={'/'}><img src={images.logoPng} alt="logo" /></Link>
                    <div >
                        <Link to={'/login'}><button className='btn btnA'>Iniciar sesión</button></Link>
                    </div>
                </section>
            </div>

            <Loader loading={loading} />
            <Snackbar snack={snack} />
        </div>
    );
};

export default WhatEmail;