import React from 'react';
import './Header.css';
import {
  Link,
} from "react-router-dom";

const Header = () => {
  return (
    <header className="stripe">
        <nav>
            <ul class="hr">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
