import { useEffect, useState } from 'react';
import { AutoComplete } from 'faradays_comp';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLoginContext } from '../../../context/LoginContext';

const SearchInPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useLoginContext();
    const [data, setData] = useState(null);
    const [options, setOptions] = useState(optionsData);

    useEffect(() => {
        if (data) {
            const { link } = data;
            if (link.includes('#')) {
                const [path, hash] = link.split('#');
                if (location.pathname === path) scrollToHash(hash);
                else {
                    navigate(path);
                    setTimeout(() => scrollToHash(hash), 300);
                };
            } else navigate(link)
        };
        setData(null);
    }, [data, navigate, location]);

    const scrollToHash = (hash) => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        else console.warn(`Elemento con id="${hash}" no encontrado.`);
    };

    useEffect(() => {
        if (user && user.logged && user.data.role !== 'user') {
            const data = [...options];
            data.push({ label: 'dashboard', id: 2, link: '/dashboard' })
            data.push({ label: 'crear iconos', id: 2, link: '/dashboard/icons' })
            setOptions(data);
        };
    }, [user]);

    return <AutoComplete options={options} labelKey="label" setData={setData} />;
};

export default SearchInPage;

const optionsData = [
    // Página principal...
    { label: 'pagina principal', id: 1, link: '/' },
    { label: 'contacto', id: 1, link: '/#contact' },
    // Panel del Usuario...
    { label: 'panel del usuario', id: 2, link: '/user_panel' },
];