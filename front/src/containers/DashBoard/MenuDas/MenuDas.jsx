import './menuDas.scss';
import { images } from '../../../utils/images.js';
import { useLoginContext } from '../../../context/LoginContext';
import { IconMenu, IconMessage, IconBell, IconCode, IconBook, IconIcons, IconUsers, IconNews } from 'faradays_comp';

const MenuDas = ({ handleVew, vew }) => {

    const { user } = useLoginContext(); // Esto es para ver si hay una imagen a futuro.

    return (
        <div className='menuDas'>

            <section className='menuDasProfilSect' onClick={() => handleVew('myProfil')}>
                <div className='menuDasProfilDiv' style={{backgroundColor: vew === 'myProfil' ? '#ffff' : ''}}>
                    <img src={images.happyCat} alt="cat" />
                </div>
                <p>Tu perfil</p>
            </section>

            <section className='menuDasIcon'>

                <div onClick={()=>handleVew(null)} style={{backgroundColor: vew === null ? '#1e1c22' : ''}}>
                    <IconMenu color='#ffff' size='25px' />
                    <p>Menú</p>
                </div>
                
                <div onClick={()=>handleVew('codes')} style={{backgroundColor: vew === 'codes' ? '#1e1c22' : ''}}>
                    <IconCode color='#ffff' size='25px' />
                    <p>Codigos</p>
                </div>
                
                <div onClick={()=>handleVew('bookshop')} style={{backgroundColor: vew === 'bookshop' ? '#1e1c22' : ''}}>
                    <IconBook color='#ffff' size='25px' />
                    <p>Librería</p>
                </div>
                
                <div onClick={()=>handleVew('icons')} style={{backgroundColor: vew === 'icons' ? '#1e1c22' : ''}}>
                    <IconIcons color='#ffff' size='25px' />
                    <p>Iconos</p>
                </div>
                
                <div onClick={()=>handleVew('users')} style={{backgroundColor: vew === 'users' ? '#1e1c22' : ''}}>
                    <IconUsers color='#ffff' size='25px' />
                    <p>Usuarios</p>
                </div>
                
                <div onClick={()=>handleVew('message')} style={{backgroundColor: vew === 'message' ? '#1e1c22' : ''}}>
                    <IconMessage color='#ffff' size='25px' />
                    <p>Mensjes</p>
                </div>
                
                <div onClick={()=>handleVew('alerts')} style={{backgroundColor: vew === 'alerts' ? '#1e1c22' : ''}}>
                    <IconBell color='#ffff' size='25px' />
                    <p>Alertas</p>
                </div>
                
                <div onClick={()=>handleVew('news')} style={{backgroundColor: vew === 'news' ? '#1e1c22' : ''}}>
                    <IconNews color='#ffff' size='25px' />
                    <p>Noticias</p>
                </div>

            </section>

        </div>
    );
};

export default MenuDas;