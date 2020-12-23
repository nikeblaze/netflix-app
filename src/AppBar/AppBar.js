import React from 'react';
import './AppBar.css';

const appBar = (props) => {
    return(
    <div className="app-bar">
        {props.children}
    </div>
    )
}

export default appBar;