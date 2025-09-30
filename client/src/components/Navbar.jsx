import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, X, House, Desktop, Translate, Flask, BookOpen, Palette, User } from '@phosphor-icons/react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="Navbar">
            <Link to="/" className="Navbar-logo">Expo</Link>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
                <li><Link to="/ict" onClick={toggleMenu}>ICT</Link></li>
                <li><Link to="/bahasa" onClick={toggleMenu}>Bahasa</Link></li>
                <li><Link to="/sains" onClick={toggleMenu}>Sains</Link></li>
                <li><Link to="/sbo" onClick={toggleMenu}>SBO</Link></li>
                <li><Link to="/thafidz" onClick={toggleMenu}>Thafidz</Link></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                {menuOpen ? <X size={28} /> : <List size={28} />}
            </div>
        </nav>
    );
};

export default Navbar;