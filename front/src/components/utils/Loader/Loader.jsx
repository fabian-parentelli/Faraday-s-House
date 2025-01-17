import './loader.scss';
import { Spinner } from '../Spinner/Spinner';

const Loader = ({ loading }) => {

    if (loading) return (
        <div className='loader'>
            <Spinner size={50} color={'gray'} />
        </div>
    );
};

export default Loader;

// This component receives a boolean as a parameter.