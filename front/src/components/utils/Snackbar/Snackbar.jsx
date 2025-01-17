import './snackbar.scss';
import { useEffect, useState } from "react";
import { images } from '../../../utils/images.js';

const Snackbar = ({ snack }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (snack.open) setIsVisible(true);
        else {
            const timeout = setTimeout(() => setIsVisible(false), 1000);
            return () => clearTimeout(timeout);
        };
    }, [snack.open]);

    if (snack.open && snack.message) return (
        <div
            className={`snackbar ${isVisible ? "show" : "hide"}`}
            style={{ backgroundColor: snack.status === 'error' ? '#f52019' : '#449147' }}
        >   
            <img src={snack.status === 'error' ? images.ungryCat : images.happyCat} width={'30px'} alt="" />
            <p>{snack.message}</p>
        </div>
    );
};

export default Snackbar;

// This component receives an object with three properties:
// open, a boolean value to control visibility,
// message, a string containing the message to display, and
// status, a string that determines the notification color;
// if the status is 'error', the notification will be red, otherwise, it will be green.