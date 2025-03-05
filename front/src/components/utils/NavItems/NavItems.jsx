import './navItems.css';
import { useState, useRef, useEffect } from 'react';

const NavItems = ({ title, items, setData, style = { fontSize: 1 }, arrow = true }) => {

    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    const handleclick = (data) => {
        setData(data);
        setOpen(false);
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) setOpen(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className='navItems' ref={containerRef}>
            
            <div className='menuItemButom'>
                {arrow && <img src="arrow.png" alt="img" className={open ? 'menuItemArrow' : 'menuItemArrowNone'} /> }
                <p
                    className='menuItemTitle'
                    onClick={() => setOpen(!open)}
                    style={{ fontSize: `${style.fontSize}rem` }}
                >
                    {title ? title : 'Titulo'}
                </p>
            </div>

            <div
                className={`menuItemVew ${open ? 'menuItemVewOpen' : ''}`}
                style={{ top: `${style.fontSize + .6}rem`, left: style.left ? style.left : '16px' }}
            >
                {items && items.map((it, ind) => (
                    <p key={ind}
                        onClick={() => handleclick(it)}
                    >
                        {it.label}
                    </p>
                ))}
            </div>

        </div>
    );
};

export default NavItems;