import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () =>
{
    return(
        <header>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/posts/new">Create a Post</NavLink></li>
                <li><NavLink exact to="/posts">Show Posts</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;
