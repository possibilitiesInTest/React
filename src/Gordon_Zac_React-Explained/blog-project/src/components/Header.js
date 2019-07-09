import React from "react";
import {Link} from "react-router-dom";

const Header = ({ onLogout, isAuthenticated}) => (
    <header className="App-header">
        <ul className="container">
            <li key="home">
                <Link to="/"> My Site </Link>
            </li>
            {isAuthenticated ? (
                <>
                <li>
                    <Link to="/new">New Post</Link>
                </li>
                <li>
                    <button
                        className="linkLike"
                        onClick={e => {
                        e.preventDefault();
                        onLogout();
                        }}
                        >Logout
                    </button>
                </li>
                </>
            ) : (
                <li key="login">
                    <Link to="/login">Login</Link>
                </li>
            )}
        </ul>
    </header>
);

export default Header;