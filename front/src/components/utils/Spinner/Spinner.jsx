import './spinner.scss';

export const Spinner = ({ color, size }) => {

    return (
        <div
            className='spinner'
            role='status'
            aria-live='polite'
            aria-label='Cargando'
            style={{
                borderTopColor: color ? color : '#2990c8',
                width: size ? `${size}px` : '36px',
                height: size ? `${size}px` : '36px',
                zIndex: '1003'
            }}
        >
        </div>
    );
};