import React from 'react';
import { NavLink } from 'react-router-dom';

const Panel = ({ children }) =>
{
    return(
        <div className="Panel">
            <h3>{ children }</h3>
        </div>
    )
}

export default Panel;
