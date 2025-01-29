import './dashIconBottom.scss';
import DashIconBottomL from './DashIconBottomL/DashIconBottomL';

const DashIconBottom = ({ counter }) => {

    return (
        <div className='dashIconBottom'>
            <DashIconBottomL counter={counter} />
        </div>
    );
};

export default DashIconBottom;