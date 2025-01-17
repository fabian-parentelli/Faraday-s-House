import './userRegister.scss';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { images } from '../../../utils/images.js';
import Loader from '../../../components/utils/Loader/Loader.jsx';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import UserForm from '../../../components/users/UserForm/UserForm.jsx';
import Snackbar from '../../../components/utils/SnackBar/SnackBar.jsx';

const UserRegister = () => {

    const navigate = useNavigate();
    const { register, loading, user } = useLoginContext()
    const [values, setValues] = useState({ name: '', email: '', password: '' });
    const [snack, setSnack] = useState({ open: false, message: '', status: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(values);
    };

    useEffect(() => {
        if (user.error) {
            setSnack({ open: true, message: user.error, status: 'error' })
            setTimeout(() => { setSnack({ open: false, message: '', status: '' }) }, 2000);
        };
        if (user.registered) {
            setSnack({ open: true, message: 'Registro exitos', status: '' })
            const path = localStorage.getItem('path');
            if (path) {
                localStorage.removeItem('path');
                setTimeout(() => { navigate(`/${path}`) }, 2000);
            } else setTimeout(() => { navigate('/') }, 2000);
        };
    }, [user]);

    return (
        <div className='userRegister'>

            <div className='userRegisterDiv'>
                <section className='userregisterLeft'>
                    <h2 className='colA'>Registro</h2>
                    <UserForm
                        values={values}
                        setValues={setValues}
                        handleSubmit={handleSubmit}
                        nameButton='Registrarte'
                    />
                </section>

                <section className='userregisterRight'>
                    <Link to={'/'}><img src={images.logoPng} alt="logo" /></Link>
                    <div >
                        <Link to={'/login'}><button className='btn btnA'>Iniciar sesión</button></Link>
                        <Link to={'/what_email'} className='pgray userRegisterGoToPass'>Recuperar contraseña</Link>
                    </div>
                </section>
            </div>

            <Snackbar snack={snack} />
            <Loader loading={loading} />
        </div>
    );
};

export default UserRegister;