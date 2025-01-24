import './newPassword.scss';
import { useState } from 'react';
import { images } from '../../../utils/images.js';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Loader from '../../../components/utils/Loader/Loader.jsx';
import { Snackbar } from 'faradays_comp';
import { updUserPassApi } from '../../../helpers/users/updUserPass.api.js';

const NewPassword = () => {

    const { token } = useParams();
    const navigate = useNavigate();
    const [values, setValues] = useState({ password: '', confirm: '' });
    const [snack, setSnack] = useState({ open: false, message: '', status: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (snack.open) setSnack({ open: false, message: '', status: '' });
        setLoading(true);
        const response = await updUserPassApi(token, values);
        setLoading(false);
        if (response.status === 'success') {
            setSnack({ open: true, message: 'Contraseña creada correctamente', status: 'success' });
            setTimeout(() => { navigate('/login') }, 2000);
        } else {
            setSnack({ open: true, message: response.error, status: 'error' });
        };
    };


    return (
        <div className='newPassword'>
            <div className='userRegisterDiv'>
                <section className='userregisterLeft'>
                    <h2 className='colA'>Nueva contraseña</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Contraseña</label>
                            <input type="password" placeholder='Contraseña' name='password' onChange={handleChange} required />
                        </div>

                        <div>
                            <label>Repite la contraseña</label>
                            <input type="password" placeholder='Repite la contraseña' name='confirm' onChange={handleChange} required />
                        </div>
                        {values.password.length < 4 && <p className='newPasswordP'>Debes generar almenos 4 caracteres</p>}
                        {values.password.length > 3 && values.password !== values.confirm &&
                            <p className='newPasswordP'>Las contraseñas deben de ser iguales</p>
                        }
                        {values.password > 3 && values.password === values.confirm &&
                            <p className='newPasswordPG'>Las contraseñas coinciden</p>
                        }
                        <button className='btn btnA' disabled={values.password.length < 4 || values.password !== values.confirm}>Enviar</button>
                    </form>
                </section>

                <section className='userregisterRight'>
                    <Link to={'/'}><img src={images.logoPng} alt="logo" /></Link>
                </section>
            </div>

            <Snackbar snack={snack} />
            <Loader loading={loading} />
        </div >
    );
};

export default NewPassword;