import './dashIconBottom.scss';
import DashIconBottomL from './DashIconBottomL/DashIconBottomL';
import DashIconBottomR from './DashIconBottomR/DashIconBottomR';

const DashIconBottom = ({ counter }) => {

    return (
        <div className='dashIconBottom'>
            <DashIconBottomL counter={counter} />
            <DashIconBottomR />
        </div>
    );
};

export default DashIconBottom;