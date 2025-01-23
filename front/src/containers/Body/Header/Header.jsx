import './header.scss';
import { images } from '../../../utils/images.js';

const Header = () => {

    return (
        <div className='header'>
            <div>
                <h2>Faraday's<span> House</span></h2>
                <p>Construimos soluciones digitales a medida. Desde sistemas de turnos, gestión de pedidos e inventarios, hasta sitios web personalizados para llevar tu negocio al siguiente nivel.</p>
                <a href={'#contact'} className='btn btnA headerB'>Contactar</a>
            </div>
            <img src={images.logoPng} alt="img" />
        </div>
    );
};

export default Header;