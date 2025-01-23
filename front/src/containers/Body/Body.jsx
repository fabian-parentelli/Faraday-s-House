import './body.scss';
import Header from './Header/Header';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import Contact from './Contact/Contact';

const Body = () => {

    return (
        <div className='body'>
            <Header /> 
            <HeaderBottom />
            <Contact />
        </div>
    );
};

export default Body;