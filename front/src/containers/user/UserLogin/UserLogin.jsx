import './userLogin.scss';
import { useState, useEffect } from 'react';
import { images } from '../../../utils/images.js';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../../components/utils/Loader/Loader';
import Snackbar from '../../../components/utils/SnackBar/SnackBar';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import UserForm from '../../../components/users/UserForm/UserForm.jsx';

const UserLogin = () => {

    const navigate = useNavigate();
    const { login, loading, user } = useLoginContext();
    const [values, setValues] = useState({ name: '', email: '', password: '' });
    const [snack, setSnack] = useState({ open: false, message: '', status: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(values);
    };

    useEffect(() => {
        if (user.error) {
            setSnack({ open: true, message: user.error, status: 'error' })
            setTimeout(() => { setSnack({ open: false, message: '', status: '' }) }, 2000);
        };
        if (user.registered) {
            setSnack({ open: true, message: 'Inicio de sesión exitoso', status: '' });
            const path = localStorage.getItem('path');
            if (path) {
                localStorage.removeItem('path');
                setTimeout(() => { navigate(`/${path}`) }, 2000);
            } else setTimeout(() => { navigate('/') }, 2000);
        };
    }, [user]);

    return (
        <div className='userLogin'>

            <div className='userRegisterDiv'>
                <section className='userregisterLeft'>
                    <h2 className='colA'>Inicio de sesión</h2>
                    <UserForm
                        values={values}
                        setValues={setValues}
                        handleSubmit={handleSubmit}
                        nameButton='Iniciar sesión'
                        nam={false}
                    />
                </section>

                <section className='userregisterRight'>
                    <Link to={'/'}><img src={images.logoPng} alt="logo" /></Link>
                    <div >
                        <Link to={'/register'}><button className='btn btnA'>Registrarte</button></Link>
                        <Link to={'/what_email'} className='pgray userRegisterGoToPass'>Recuperar contraseña</Link>
                    </div>
                </section>
            </div>

            <Snackbar snack={snack} />
            <Loader loading={loading} />
        </div>
    );
};

export default UserLogin;