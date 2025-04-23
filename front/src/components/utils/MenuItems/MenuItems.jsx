import './menuItems.css';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Icons from '../../Icons/Icons';

const MenuItems = ({ title, list, icons }) => {

    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    const handleClick = () => setOpen(false);

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) setOpen(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className='menuItems' ref={containerRef}>
            {icons
                ? <p onClick={() => setOpen(!open)}>{window.innerWidth > 767 ? title : <Icons type={icons} color='#EAEBEF' size='25px' />}</p>
                : <p onClick={() => setOpen(!open)}>{title}</p>
            }
            <section className={open ? 'menuItemVewOpen' : 'menuItemVewClosed'}>
                {list.map((listItem, ind) => (
                    <Link
                        key={ind}
                        to={listItem.route}
                        onClick={handleClick}
                    >
                        {listItem.text}
                    </Link>
                ))}
            </section>
        </div>
    );
};

export default MenuItems;