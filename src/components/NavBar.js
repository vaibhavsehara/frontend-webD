import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './NavBar.css';
function NavBar() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScroll(isScrolled);
        };
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) { setButton(false); }
        else { setButton(true); }
    };

    window.addEventListener('resize', showButton);

    return (
        <nav className={scroll ? 'navbar-shrink' : ''}>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        8 CG launga BC <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/jobs' className='nav-links' onClick={closeMenu}>
                                JOBS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aptitude-test' className='nav-links' onClick={closeMenu}>
                                VERIFY SKILLS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Home' className='nav-links' onClick={closeMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Services' className='nav-links' onClick={closeMenu}>
                                SERVICES
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </nav>
    );
}

export default NavBar;


