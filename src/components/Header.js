import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faUserPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import { FaRegCommentDots, FaPhoneAlt } from 'react-icons/fa'; 
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">Foodie Heaven</h1>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} /> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/menu">
                            <FontAwesomeIcon icon={faUtensils} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup">
                            <FontAwesomeIcon icon={faUserPlus} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/FeedbackForm">
                            <FaRegCommentDots /> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/Contact">
                        <FaPhoneAlt />
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} /> 
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
