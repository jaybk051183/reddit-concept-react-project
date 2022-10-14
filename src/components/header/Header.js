import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

// 5. Set up the header menu with the link elements

function Header({children}) {
    return (
        <header className="outer-content-container">
            <div className="inner-content-container">
                <nav>
                    <ul>
                        <li><Link to="/">HOTTEST POSTS</Link></li>
                        <li><a href="https://reddit.com/">REDDIT</a></li>
                        <li><Link to="/subreddit/memes">MEMES</Link></li>
                    </ul>
                </nav>
                <div className="hero-content">
                    {children}
                </div>
            </div>
        </header>
    );
}

export default Header;