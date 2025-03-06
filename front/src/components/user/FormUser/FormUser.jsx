import './formUser.css';

const FormUser = ({ vew = {}, values, setValues }) => {

    const defaultVew = { name: true, email: true, password: true, confirm: false };
    const finalVew = { ...defaultVew, ...vew };

    const handleChange = (e) => setValues((prevQuery) => ({ ...prevQuery, [e.target.name]: e.target.value }));

    return (
        <div className='formUser'>

            {finalVew.name &&
                <div>
                    <label>Nombre</label>
                    <input
                        type="text" name='name'
                        placeholder='Nombre completo'
                        value={values.name || ''} onChange={handleChange}
                        required
                    />
                </div>
            }

            {finalVew.email &&
                <div>
                    <label>Email</label>
                    <input
                        type="email" name='email'
                        placeholder='Email'
                        value={values.email || ''} onChange={handleChange}
                        required
                    />
                </div>
            }

            {finalVew.password &&
                <div>
                    <label>Contraseña</label>
                    <input
                        type="password" name='password'
                        placeholder='Contraseña'
                        value={values.password || ''} onChange={handleChange}
                        required
                    />
                </div>
            }

            {finalVew.confirm &&
                <div>
                    <label>Confirmar contraseña</label>
                    <input
                        type="password" name='confirm'
                        placeholder='Confirma la contraseña'
                        value={values.confirm || ''} onChange={handleChange}
                        required
                    />
                </div>
            }

        </div>
    );
};

export default FormUser;