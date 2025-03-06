import './login.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../../../context/LoginContext';
import FormUser from '../../../components/user/FormUser/FormUser';

const Login = () => {

    const navigate = useNavigate();
    const { login, user } = useLoginContext();
    const [values, setValues] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(values);
    };

    useEffect(() => {
        if (user.logged) {
            const path = localStorage.getItem('path');
            if (path) {
                localStorage.removeItem('path');
                setTimeout(() => { navigate(`/${path}`) }, 2000);
            } else navigate('/');
        };
    }, [user]);

    return (
        <div className='login bg-container'>

            <form onSubmit={handleSubmit}>
                <h2>Iniciar sesión</h2>
                <FormUser vew={{ name: false }} values={values} setValues={setValues} />
                <button className='btn btnB'>Iniciar sesión</button>
            </form>

            <section>
                <img src="/leyendo.png" alt="" />
                <Link to={'/register'} className='btn btnB btnRegister'>Regístrate</Link>
                <Link to={'/what_email'} className='btnPassword'>Recuperar contraseña</Link>
            </section>

        </div>
    );
};

export default Login;