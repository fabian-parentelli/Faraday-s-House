import './register.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../../../context/LoginContext';
import FormUser from '../../../components/user/FormUser/FormUser';

const Register = () => {

    const navigate = useNavigate();
    const { register, user } = useLoginContext();
    const [values, setValues] = useState({ name: '', email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register;
    };

    useEffect(() => {
        if (user.registered) {
            const path = localStorage.getItem('path');
            if (path) {
                localStorage.removeItem('path');
                setTimeout(() => { navigate(`/${path}`) }, 2000);
            } else navigate('/');
        };
    }, [user]);

    return (
        <div className='register bg-container'>

            <form onSubmit={handleSubmit}>
                <h2>Regístrate</h2>
                <FormUser values={values} setValues={setValues} />
                <button className='btn btnB'>Iniciar sesión</button>
            </form>

            <section>
                <img src="/write.png" alt="" />
                <Link to={'/login'} className='btn btnB btnRegister'>Iniciar sesión</Link>
                <Link to={'/what_email'} className='btnPassword'>Recuperar contraseña</Link>
            </section>

        </div>
    );
};

export default Register;