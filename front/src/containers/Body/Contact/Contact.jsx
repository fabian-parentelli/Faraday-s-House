import './contact.scss';
import { useEffect, useState } from 'react';
import { Spinner, Snackbar } from 'faradays_comp';
import { images } from '../../../utils/images.js';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { newMessageApi } from '../../../helpers/messages/newMessage.api.js';

const Contact = () => {

    const { user } = useLoginContext();
    const [loading, setLoading] = useState(false);
    const [snack, setSnack] = useState({ open: false, message: '', status: '' });
    const [values, setValues] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        if (user.logged) setValues({ ...values, name: user.data.name, email: user.data.email });
    }, [user])

    const hanldeChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (snack.open) setSnack({ open: false, message: '', status: '' });
        setLoading(true);
        const response = await newMessageApi(values);
        if (response.status === 'success') {
            setSnack({ open: true, message: 'hemos recibido tu mensaje', status: 'success' });
        } else setSnack({ open: true, message: response.error, status: 'error' })
        setLoading(false);
    };

    return (
        <div id='contact'>

            <form className='contactSect' onSubmit={handleSubmit}>

                <h2 className='colA'>Contactar</h2>

                <div>
                    <label>Tu nombre</label>
                    <input type="text" name='name' placeholder='Escribe tu nombre' required onChange={hanldeChange} value={values.name} />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" name='email' placeholder='Escribe tu email' required onChange={hanldeChange} value={values.email} />
                </div>

                <div>
                    <label>Mensaje</label>
                    <textarea name='message' placeholder='Escribe tu mensaje' required onChange={hanldeChange} />
                </div>

                <button className='btn btnA contactBtn'>{loading ? <Spinner size={'25px'} color='white' /> : 'Enviar'}</button>
            </form>

            <img src={images.writeCat} alt="cat" />

            <Snackbar snack={snack} />
        </div>
    );
};

export default Contact;