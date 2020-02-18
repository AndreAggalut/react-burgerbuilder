import React from 'react';

import classes from './Toolbar.css';

const toolbar = ( props ) => (
    <header className = {classes.Toolbar}>
        <div className ={classes.test}>Menu</div>
        <div>Logo</div>
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;