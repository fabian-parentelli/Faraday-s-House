import './userForm.scss';

const UserForm = ({ values, setValues, handleSubmit, pass = true, nam = true, nameButton }) => {

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <form className='userForm' onSubmit={handleSubmit}>

            {nam &&
                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name='name'
                        placeholder='Nombre completo'
                        value={values.name}
                        onChange={handleChange}
                    />
                </div>
            }

            <div>
                <label>Email</label>
                <input
                    type="email"
                    name='email'
                    placeholder='email'
                    value={values.email}
                    onChange={handleChange}
                />
            </div>

            {pass &&
                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name='password'
                        placeholder='Contraseña'
                        value={values.password || ''}
                        onChange={handleChange}
                    />
                </div>
            }

            <button className='btn btnA'>{nameButton}</button>

        </form>
    );
};

export default UserForm;