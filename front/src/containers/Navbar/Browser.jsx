import { HashLink as Link } from 'react-router-hash-link';
import {  IconMenu, AutoComplete } from 'faradays_comp';
import { useLoginContext } from '../../context/LoginContext.jsx';
import SearchInPage from '../../components/utils/SearchInPage/SearchInPage.jsx';

const Browser = ({ handleMenuClick, menuVisible, listElementsRef, setMenuVisible }) => {

    const { user, logout } = useLoginContext();

    const handleInsideClick = () => { setMenuVisible(false) };
    const handleLogout = () => logout();

    const handleItemClick = (e) => {
        const listItem = e.currentTarget;
        const nestedMenu = listItem.querySelector('.menu_nesting');
        const inside = listItem.querySelector('.menu_inside');

        if (listItem && nestedMenu) {
            listItem.classList.toggle('menu_item--active');
            if (listItem.classList.contains('menu_item--active')) {
                nestedMenu.style.height = `${nestedMenu.scrollHeight}px`;
            } else {
                nestedMenu.style.height = '0';
            };
        };
        if (inside && e.target.classList.contains('menu_inside')) {
            handleInsideClick();
        };
    };
    
    return (
        <div className="browser">
            <div className='prentation'>
                <Link to={'/'}><img src='https://res.cloudinary.com/dhv8bgdke/image/upload/v1720214935/background/fum4hvo048bnmzomdvs4.png' alt='Pasarela' /></Link>
                <SearchInPage />
            </div>
            <ul className={`menu_links ${menuVisible ? 'menu_links--show' : ''}`} ref={listElementsRef}>

                <li className={`menu_item menu_item--show`} onClick={handleItemClick}>
                    <a href='#' className='menu_link'>Productos <img src="/arrow.png" className="menu_arrow" /></a>
                    <ul className={`menu_nesting`}>
                        <li className='menu_inside' onClick={handleInsideClick}><Link to='/' className='menu_link menu_link--inside'>Páginas web</Link></li>
                        <li className='menu_inside' onClick={handleInsideClick}><Link to='/' className='menu_link menu_link--inside'>Hub de Servicios y Productos</Link></li>
                        <li className='menu_inside' onClick={handleInsideClick}><Link to='/' className='menu_link menu_link--inside'>Sistemas White label</Link></li>
                        <li className='menu_inside' onClick={handleInsideClick}><Link to='/' className='menu_link menu_link--inside'>Noticias</Link></li>
                    </ul>
                </li>
                
                <li className={`menu_item menu_item--show`} onClick={handleItemClick}>
                    <a href='#' className='menu_link'>Plataforma <img src="/arrow.png" className="menu_arrow" /></a>
                    <ul className={`menu_nesting`}>
                        <li className='menu_inside' onClick={handleInsideClick}><Link to={'/'} className='menu_link menu_link--inside'>Códigos</Link></li>
                        <li className='menu_inside' onClick={handleInsideClick}><Link to={'/'} className='menu_link menu_link--inside'>Librerías</Link></li>
                        <li className='menu_inside' onClick={handleInsideClick}><Link to={'/'} className='menu_link menu_link--inside'>Iconos</Link></li>
                        <li className='menu_inside' onClick={handleInsideClick}><Link to={'/'} className='menu_link menu_link--inside'>Anotador</Link></li>
                    </ul>
                </li>

                <li className={`menu_item menu_item--show`} onClick={handleItemClick}>
                    <a href='#' className='menu_link'>Usuario<img src="/arrow.png" className="menu_arrow" /></a>
                    <ul className={`menu_nesting`}>
                        {!user.logged ?
                            <>
                                <li className='menu_inside loginDiv' onClick={handleInsideClick}><Link to={'/login'} className='menu_link menu_link--inside' >Iniciar Sesión</Link></li>
                                <li className='menu_inside registerId' onClick={handleInsideClick}><Link to={'/register'} className='menu_link menu_link--inside' href='#'>Registrarte</Link></li>
                            </>
                            : <li className='menu_inside updateUserDiv' onClick={handleInsideClick}><Link to={'/user_panel'} className='menu_link menu_link--inside'>Panel del usuario</Link></li>
                        }
                        
                        <li className='menu_inside' onClick={handleInsideClick}><Link to={('/#contact')} className='menu_link menu_link--inside' >Contacto</Link></li>
                        {user.logged && <li className='menu_inside' onClick={handleInsideClick}><Link onClick={handleLogout} to={('/')} className='menu_link menu_link--inside' >Cerrar sesión</Link></li>}
                    </ul>
                </li>
            </ul >
            <div className="menu_hamburguer" onClick={handleMenuClick}>
                <IconMenu color='#fff' size='40px' />
            </div>
        </div >
    );
};

export default Browser;